package com.mindsense.salesagent.agent

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.content.pm.ServiceInfo
import android.os.Build
import android.os.IBinder
import android.util.DisplayMetrics
import android.util.Log
import android.view.WindowManager
import androidx.core.app.NotificationCompat
import com.mindsense.salesagent.App
import com.mindsense.salesagent.capture.ScreenCaptureService
import com.mindsense.salesagent.llm.MnnAidlClient
import com.mindsense.salesagent.whatsapp.WhatsAppService
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class SalesAgentService : Service() {

    companion object {
        private const val TAG = "SalesAgentService"
        private const val CHANNEL_ID = "SalesAgentChannel"
        private const val NOTIFICATION_ID = 102
        const val EXTRA_CONTACT_NAME = "contact_name"

        @Volatile
        var instance: SalesAgentService? = null
    }

    private lateinit var conversationManager: ConversationManager
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    private var screenWidth = 1080
    private var screenHeight = 2400

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onCreate() {
        super.onCreate()
        instance = this
        conversationManager = ConversationManager(this)
        createNotificationChannel()
        val wm = getSystemService(Context.WINDOW_SERVICE) as WindowManager
        val metrics = DisplayMetrics()
        @Suppress("DEPRECATION") wm.defaultDisplay.getRealMetrics(metrics)
        screenWidth = metrics.widthPixels
        screenHeight = metrics.heightPixels
        Log.i(TAG, "Screen: ${screenWidth}x${screenHeight}")
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val notification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setContentTitle("Sales Agent Active")
            .setContentText("Running pipeline...")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .build()

        // Android 14 REQUIRES the type constant at runtime — manifest alone is not enough
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            startForeground(
                NOTIFICATION_ID, notification,
                ServiceInfo.FOREGROUND_SERVICE_TYPE_DATA_SYNC
            )
        } else {
            startForeground(NOTIFICATION_ID, notification)
        }

        val contactName = intent?.getStringExtra(EXTRA_CONTACT_NAME)
        if (contactName != null) {
            scope.launch { startPipeline(contactName) }
        }
        return START_NOT_STICKY
    }

    /**
     * ACTIVE PIPELINE — agent initiates everything:
     * 1. Opens WhatsApp
     * 2. Searches for the contact (event-driven waits — no hardcoded delays)
     * 3. Opens the chat
     * 4. Sends each stage message in sequence until CLOSING
     * 5. Releases models after each stage to prevent LMKD kills
     */
    suspend fun startPipeline(contactDisplayName: String) {
        Log.i(TAG, "Waiting for WhatsAppService to connect...")
        val ws = run {
            val deadline = System.currentTimeMillis() + 15_000L
            while (System.currentTimeMillis() < deadline) {
                WhatsAppService.instance?.let { return@run it }
                delay(500)
            }
            null
        } ?: run {
            Log.e(TAG, "WhatsAppService not available after 15s — is Accessibility Service enabled?")
            return
        }

        // ── Gate 2: Wait for MNN LLM Service (up to 30s) ─────────────────
        Log.i(TAG, "Waiting for MNN LLM service...")
        val llmReady = run {
            val deadline = System.currentTimeMillis() + 30_000L
            while (System.currentTimeMillis() < deadline) {
                if (App.isLlmConnected) return@run true
                delay(500)
            }
            false
        }
        if (!llmReady) {
            Log.e(TAG, "MNN LLM not connected after 30s — is MNN Chat app running?")
            return
        }
        Log.i(TAG, "All dependencies ready — starting pipeline")

        val contactId = contactDisplayName.lowercase()
            .replace(Regex("[^a-z0-9]"), "_")

        Log.i(TAG, "=== Starting pipeline for $contactDisplayName ===")

        // ── Phase 1: Open WhatsApp and wait for home screen ──────────────
        ws.openWhatsApp()
        val homeReady = ws.waitForWhatsAppHome(timeoutMs = 6000)
        if (!homeReady) {
            Log.e(TAG, "WhatsApp home screen did not load — retrying open")
            delay(1500)
            ws.openWhatsApp()
            ws.waitForWhatsAppHome(timeoutMs = 5000)
        }
        Log.i(TAG, "WhatsApp home ready ✓")

        // ── Phase 2: Search for contact (LLM-driven with accessibility fallback) ────
        // Master plan line 196: Pipeline uses visionTap() for search icon
        val searchTapped = visionTap(ws, "search icon")
        if (!searchTapped) {
            Log.w(TAG, "visionTap for search icon failed — falling back to accessibility")
            ws.openSearch()
        }
        val searchReady = ws.waitForEditText(timeoutMs = 5000)
        if (!searchReady) {
            Log.e(TAG, "Search box never appeared")
            return
        }

        ws.enterTextInField(contactDisplayName)
        val resultReady = ws.waitForText(contactDisplayName, timeoutMs = 5000)
        if (!resultReady) {
            Log.e(TAG, "Contact result never appeared")
            return
        }

        // Master plan line 197: Pipeline uses visionTap() for contact selection
        val contactTapped = visionTap(ws, "contact row for $contactDisplayName")
        if (!contactTapped) {
            Log.w(TAG, "visionTap for contact failed — falling back to accessibility")
            ws.tapContactResult(contactDisplayName)
        }

        // ── Phase 3: Wait for chat INPUT FIELD — NOT contact name text ────
        // waitForText() returns true immediately because the contact is still
        // visible in search results. We must wait for the message box (id/entry).
        val chatReady = ws.waitForChatInput(timeoutMs = 8000)
        if (!chatReady) {
            Log.e(TAG, "Chat message input never appeared — still on search screen?")
            return
        }
        Log.i(TAG, "Chat message input ready ✓")

        // ── Phase 4: Run through all pipeline stages ──────────────────────
        for (state in SalesState.values()) {
            val currentState = conversationManager.getLeadState(contactId)
            if (currentState.ordinal > state.ordinal) {
                Log.i(TAG, "Skipping ${state.name} — already past it")
                continue
            }

            val screenContext = ws.getAllTextFromScreen()
            val response = generateSalesMessage(state, contactDisplayName, screenContext)
                .ifBlank { conversationManager.getResponseForState(contactId, contactDisplayName) }
            Log.i(TAG, "[${state.name}] Sending: $response")

            // Retry up to 3 times if send fails (send button may take a moment)
            var sent = false
            repeat(3) { attempt ->
                if (!sent) {
                    sent = ws.sendMessageSuspending(response)
                    if (!sent) {
                        Log.w(TAG, "[${state.name}] attempt ${attempt + 1} failed — retrying in 1s")
                        delay(1000)
                        // Re-verify chat input is still ready before retry
                        ws.waitForChatInput(timeoutMs = 3000)
                    }
                }
            }

            if (!sent) {
                Log.e(TAG, "[${state.name}] sendMessage failed after 3 attempts — aborting pipeline")
                return
            }

            conversationManager.advanceLead(contactId)
            Log.i(TAG, "[${state.name}] ✓ → ${conversationManager.getLeadState(contactId).name}")

            // Release models between stages to free RAM (prevents LMKD kills)
            App.releaseModels()

            // Natural delay between messages — varies to feel human
            if (state != SalesState.CLOSING) {
                val delayMs = when (state) {
                    SalesState.NEW        -> 3000L
                    SalesState.ENGAGED    -> 3500L
                    SalesState.QUALIFIED  -> 4000L
                    SalesState.PRESENTING -> 5000L
                    SalesState.OBJECTION  -> 4000L
                    else                  -> 3000L
                }
                Log.i(TAG, "Waiting ${delayMs}ms before next stage...")
                delay(delayMs)
            }
        }

        Log.i(TAG, "=== Pipeline complete. Lead $contactId → CLOSING ===")
    }

    /**
     * Called by WhatsAppService when a new message arrives from a contact.
     * In active mode, this is informational only — the pipeline drives itself.
     */
    fun onWhatsAppMessage(contactId: String, contactName: String, message: String) {
        Log.i(TAG, "Received message from $contactName: $message")
        // In active pipeline mode, we don't react to incoming messages
        // The pipeline advances proactively through startPipeline()
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // LLM-DRIVEN METHODS (Zero-Tolerance Checklist lines 193-199)
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Two-step visionTap using Thinking + Vision:
     * Step 1 — Thinking mode reasons about where the element is based on screen context
     * Step 2 — Vision confirms with actual screenshot coordinates
     * Vision result is preferred; thinking result is the fallback.
     */
    private suspend fun visionTap(ws: WhatsAppService, description: String): Boolean {
        val bitmap = ScreenCaptureService.getLatestBitmap()
        if (bitmap == null) {
            Log.w(TAG, "visionTap: ScreenCapture not ready for '$description'")
            return false
        }

        // Step 1: Thinking — reason from screen text about element location
        val screenText = ws.getAllTextFromScreen().take(300)
        val thinkResponse = MnnAidlClient.generateWithThinking(
            "I am automating WhatsApp. Screen text: $screenText\n" +
            "I need to tap: '$description'\n" +
            "Output only: X.XX,Y.YY (normalised 0.0–1.0 fractions, no explanation)",
            maxTokens = 200
        )
        val thinkCoords = parseVisionCoords(thinkResponse)
        Log.i(TAG, "visionTap think '$description' → '$thinkResponse' parsed=${thinkCoords != null}")

        // Step 2: Vision — locate element directly from screenshot
        val visualResponse = MnnAidlClient.analyzeImage(
            bitmap,
            "Output only: X.XX,Y.YY\nFind '$description' in this screenshot."
        )
        val visualCoords = parseVisionCoords(visualResponse)
        Log.i(TAG, "visionTap vision '$description' → '$visualResponse' parsed=${visualCoords != null}")

        // Vision preferred, thinking as fallback
        val coords = visualCoords ?: thinkCoords ?: run {
            Log.w(TAG, "visionTap: both think and vision failed for '$description'")
            return false
        }

        val px = (coords.first * screenWidth).toFloat()
        val py = (coords.second * screenHeight).toFloat()
        ws.tapAt(px, py)
        Log.i(TAG, "visionTap: '$description' → ($px, $py) [vision=${visualCoords != null}]")
        return true
    }

    /**
     * Taps the WhatsApp send button using accessibility ID first (fast path),
     * then vision fallback if ID not found or not enabled.
     */
    private suspend fun tapSendButton(ws: WhatsAppService): Boolean {
        val root = ws.getRootNode()
        if (root != null) {
            val sendBtn = root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send_btn")?.firstOrNull()

            if (sendBtn != null && sendBtn.isEnabled) {
                sendBtn.performAction(android.view.accessibility.AccessibilityNodeInfo.ACTION_CLICK)
                Log.i(TAG, "tapSendButton: via accessibility ID ✓")
                return true
            }
        }

        // Vision fallback
        Log.i(TAG, "tapSendButton: accessibility ID not found, trying vision...")
        return visionTap(ws, "send button")
    }

    /**
     * Generates a sales message using LLM thinking mode.
     * Calls generateWithThinking() with a stage-specific prompt,
     * falls back to state.stageResponse if LLM returns empty/error.
     */
    private suspend fun generateSalesMessage(
        state: SalesState,
        contactName: String,
        screenContext: String = ""
    ): String {
        val firstName = contactName.split(" ").firstOrNull() ?: contactName

        // Each prompt ends with "WhatsApp message:" to anchor output — model continues from there
        // NO bullet points, NO char count labels, NO hashtags in prompt — avoids LLM echoing them
        val stagePrompt = when (state) {
            SalesState.NEW ->
                "You are texting a new lead named $firstName on WhatsApp. " +
                "Write one short friendly message introducing yourself and asking how you can help. " +
                "Sound human, casual, under 160 characters. " +
                "WhatsApp message:"

            SalesState.ENGAGED ->
                "You are texting $firstName on WhatsApp. They responded to your greeting. " +
                "Write one short question to understand their business and what they need. " +
                "Sound curious and genuine, under 160 characters. " +
                "WhatsApp message:"

            SalesState.QUALIFIED ->
                "You are texting $firstName on WhatsApp. They described their business needs. " +
                "Write one short message explaining how your AI sales platform helps scale their operations. " +
                "Sound helpful, under 180 characters, no bullet points. " +
                "WhatsApp message:"

            SalesState.PRESENTING ->
                "You are texting $firstName on WhatsApp. Write a short pitch message. " +
                "Mention AI lead qualification, automated follow-ups, analytics, starts at 499 per month, 30-day free trial. " +
                "Sound conversational not formal, under 200 characters, no bullet points, no hashtags. " +
                "WhatsApp message:"

            SalesState.OBJECTION ->
                "You are texting $firstName on WhatsApp. They said the price is too high. " +
                "Write a short empathetic reply mentioning most clients see 3x return in 90 days and there is a free trial. " +
                "Offer to send a case study. Under 180 characters, no labels. " +
                "WhatsApp message:"

            SalesState.CLOSING ->
                "You are texting $firstName on WhatsApp. Write a short closing message. " +
                "Ask if they are ready to proceed. Mention you can send the contract for digital signature today. " +
                "Sound warm and confident, under 160 characters. " +
                "WhatsApp message:"
        }

        val raw = MnnAidlClient.generateWithThinking(stagePrompt, maxTokens = 200)

        if (raw.isBlank() || raw.startsWith("ERROR")) {
            Log.w(TAG, "generateSalesMessage: LLM failed — using fallback for ${state.name}")
            return state.stageResponse.replace("{name}", contactName)
        }

        // Strip any leftover prompt prefixes the model might echo
        val clean = raw.trim()
            .removePrefix("WhatsApp message:")
            .removePrefix("Message:")
            .removePrefix("Reply:")
            .trim()
            .lines()
            .firstOrNull { it.isNotBlank() }
            ?: state.stageResponse.replace("{name}", contactName)

        Log.i(TAG, "generateSalesMessage [${state.name}]: \"$clean\"")
        return clean
    }

    /**
     * Parses "x,y" coordinates from LLM vision response.
     * Handles: "0.5,0.3" | "0.5, 0.3" | "(0.5, 0.3)" | "x=0.5 y=0.3"
     * Critical fix: split on COMMA OR whitespace, not whitespace only.
     */
    private fun parseVisionCoords(raw: String): Pair<Float, Float>? {
        return try {
            // Paired Regex: matches "X,Y" when comma-adjacent — rejects verbose text.
            // Auto-normalises pixel values (e.g. 253 → 253/2400 = 0.105).
            val match = Regex("""(\d+\.?\d*),(\d+\.?\d*)""").find(raw.trim())
            if (match != null) {
                var x = match.groupValues[1].toFloat()
                var y = match.groupValues[2].toFloat()
                if (x > 1f) x /= screenWidth.toFloat()
                if (y > 1f) y /= screenHeight.toFloat()
                if (x in 0.05f..0.95f && y in 0.05f..0.95f) Pair(x, y) else null
            } else null
        } catch (e: Exception) {
            Log.w(TAG, "parseVisionCoords error for '$raw': ${e.message}")
            null
        }
    }

    override fun onDestroy() {
        instance = null
        scope.cancel()
        super.onDestroy()
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID, "Sales Agent", NotificationManager.IMPORTANCE_LOW
            )
            getSystemService(NotificationManager::class.java).createNotificationChannel(channel)
        }
    }
}
