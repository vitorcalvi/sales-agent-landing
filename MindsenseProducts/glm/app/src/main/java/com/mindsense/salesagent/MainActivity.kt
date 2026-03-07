package com.mindsense.salesagent

import android.content.Intent
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.util.DisplayMetrics
import android.util.Log
import android.view.accessibility.AccessibilityNodeInfo
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.mindsense.salesagent.agent.ConversationManager
import com.mindsense.salesagent.agent.SalesAgentService
import com.mindsense.salesagent.capture.ScreenCaptureService
import com.mindsense.salesagent.capture.ScreenshotActivity
import com.mindsense.salesagent.llm.MnnAidlClient
import com.mindsense.salesagent.whatsapp.WhatsAppService
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeoutOrNull
import java.util.Locale
import java.util.concurrent.Callable
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

class MainActivity : AppCompatActivity() {

    companion object {
        private const val TAG = "MainActivity"

        private const val CERTIFICATION_SCRIPT = """
speakText("Starting full sales pipeline for Vitor Calvi");
Android.startPipeline("Vitor Calvi");
Android.delay(90000);
var state = Android.getLeadState("vitor_calvi");
speakText("Lead state: " + state);
if (state === "CLOSING") {
    speakText("Certification PASSED. Vitor Calvi reached CLOSING.");
} else {
    speakText("Certification FAILED. State is " + state + ", expected CLOSING.");
}
"""
    }

    private lateinit var webView: WebView
    private lateinit var logView: TextView
    private lateinit var statusView: TextView
    private lateinit var scriptInput: EditText
    private lateinit var conversationManager: ConversationManager
    private var tts: TextToSpeech? = null
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    private val bridgeExecutor = Executors.newSingleThreadExecutor()
    private var screenW = 1080f
    private var screenH = 2400f

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        conversationManager = ConversationManager(this)
        tts = TextToSpeech(this) { status ->
            if (status == TextToSpeech.SUCCESS) tts?.language = Locale.US
        }
        val metrics = android.util.DisplayMetrics()
        @Suppress("DEPRECATION") windowManager.defaultDisplay.getRealMetrics(metrics)
        screenW = metrics.widthPixels.toFloat()
        screenH = metrics.heightPixels.toFloat()
        buildUI()
    }

    private fun buildUI() {
        val root = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(24, 56, 24, 24)
        }

        // Status bar
        statusView = TextView(this).apply {
            textSize = 12f
            setPadding(8, 8, 8, 8)
            setBackgroundColor(android.graphics.Color.parseColor("#1a1a2e"))
            setTextColor(android.graphics.Color.WHITE)
            text = "Checking status..."
        }
        root.addView(statusView)

        scope.launch {
            while (true) {
                val a11y = WhatsAppService.instance != null
                val llm = App.isLlmConnected
                val cap = ScreenCaptureService.isReady
                val mnnInstalled = try {
                    packageManager.getPackageInfo("com.alibaba.mnnllm.android", 0); true
                } catch (e: Exception) { false }
                val allReady = a11y && llm && cap
                val txt = buildString {
                    appendLine(if (a11y) "✅ Accessibility: ON" else "❌ Accessibility: OFF ← Settings → Accessibility")
                    appendLine(when {
                        llm           -> "✅ LLM: Connected"
                        !mnnInstalled -> "❌ LLM: MNN Chat NOT INSTALLED ← Install com.alibaba.mnnllm.android"
                        else          -> "⏳ LLM: Connecting… (MNN app launching)"
                    })
                    appendLine(if (cap) "✅ Screen Capture: READY" else "⏳ Screen Capture: NOT READY ← Tap button 1")
                    append(if (allReady) "🟢 ALL READY — tap Run Script" else "⛔ NOT READY — fix issues above")
                }
                // Do NOT call bindLlmService() here — App.onCreate() already called it once.
                // Calling it every 3s re-launches MNN Chat repeatedly.
                runOnUiThread { statusView.text = txt }
                delay(3000)
            }
        }

        root.addView(Button(this).apply {
            text = "1. Start Screen Capture"
            setOnClickListener {
                startActivity(Intent(this@MainActivity, ScreenshotActivity::class.java))
            }
        })

        root.addView(Button(this).apply {
            text = "TEST LLM"
            setBackgroundColor(android.graphics.Color.parseColor("#0057FF"))
            setTextColor(android.graphics.Color.WHITE)
            setOnClickListener { runLlmTests() }
        })

        root.addView(Button(this).apply {
            text = "TEST WHATSAPP"
            setBackgroundColor(android.graphics.Color.parseColor("#25D366"))
            setTextColor(android.graphics.Color.WHITE)
            setOnClickListener { runWhatsAppTests() }
        })

        root.addView(Button(this).apply {
            text = "2. Run Pipeline: Vitor Calvi"
            setOnClickListener {
                val intent = Intent(this@MainActivity, SalesAgentService::class.java).apply {
                    putExtra(SalesAgentService.EXTRA_CONTACT_NAME, "Vitor Calvi")
                }
                startService(intent)
            }
        })

        scriptInput = EditText(this).apply {
            setText(CERTIFICATION_SCRIPT.trim())
            minLines = 6
            gravity = android.view.Gravity.TOP
        }
        root.addView(scriptInput)

        root.addView(Button(this).apply {
            text = "Run Script"
            setOnClickListener { runJsScript(scriptInput.text.toString()) }
        })

        val scroll = ScrollView(this)
        logView = TextView(this).apply {
            text = "Ready.\n"
            setTextIsSelectable(true)
        }
        scroll.addView(logView)
        root.addView(scroll)

        webView = WebView(this).apply {
            settings.javaScriptEnabled = true
            webViewClient = WebViewClient()
            addJavascriptInterface(JsBridge(), "Android")
            visibility = android.view.View.GONE
        }
        root.addView(webView)
        setContentView(root)
    }

    private fun log(msg: String) {
        Log.i(TAG, msg)
        runOnUiThread { logView.append("$msg\n") }
    }

    // ─── TEST LLM ─────────────────────────────────────────────────────────────

    private fun runLlmTests() {
        log("═══ LLM TEST SUITE ═══")
        scope.launch {
            val lines = mutableListOf<String>()
            val ts = java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.US)
                .format(java.util.Date())
            fun record(msg: String) { log(msg); lines.add(msg) }

            // Paired coord extractor — matches "X,Y" when comma-adjacent.
            // Auto-normalises pixel values (e.g. 197 → 197/2400 = 0.082).
            // Rejects verbose text like "between 0.05 and 0.95" (no comma between them).
            fun parseCoordPair(raw: String): Pair<Float, Float>? {
                val match = Regex("""(\d+\.?\d*),(\d+\.?\d*)""").find(raw.trim()) ?: return null
                var x = match.groupValues[1].toFloatOrNull() ?: return null
                var y = match.groupValues[2].toFloatOrNull() ?: return null
                // Auto-normalize: if values > 1 they are pixel coordinates
                if (x > 1f) x /= screenW
                if (y > 1f) y /= screenH
                if (x !in 0.05f..0.95f || y !in 0.05f..0.95f) return null
                return Pair(x, y)
            }

            val llmReportFile = java.io.File(filesDir, "llm_test_report.txt")
            fun flushLlm() { try { llmReportFile.writeText(lines.joinToString("\n")) } catch (_: Exception) {} }

            record("=== LLM TEST REPORT ===")
            record("Timestamp: $ts")
            record("Device: ${android.os.Build.MODEL} (API ${android.os.Build.VERSION.SDK_INT})")
            record("LLM connected: ${App.isLlmConnected}")
            record("📄 Live output → ${llmReportFile.absolutePath}")
            record("   adb: adb shell run-as com.mindsense.salesagent cat files/llm_test_report.txt")
            record("")
            flushLlm()

            // TEST 1: Text
            record("▶ Test 1: Text generation")
            val t1 = MnnAidlClient.generate("Reply with exactly: TEXT_OK", maxTokens = 20)
            record(if (t1.contains("TEXT_OK")) "✅ PASS" else "❌ FAIL")
            record("   raw output: $t1")
            record(""); flushLlm()

            // TEST 2: Thinking
            record("▶ Test 2: Thinking (<think> stripped)")
            val t2 = MnnAidlClient.generateWithThinking(
                "What is 2+2? WhatsApp message:", maxTokens = 200)
            val thinkPass = t2.isNotBlank() && !t2.contains("<think>")
            record(if (thinkPass) "✅ PASS" else "❌ FAIL")
            record("   raw output: $t2")
            record(""); flushLlm()

            // TEST 3 + 4: Vision
            val bitmap = ScreenCaptureService.getLatestBitmap()
            if (bitmap == null) {
                record("▶ Test 3: Vision — ❌ SKIP (no screenshot)")
                record("▶ Test 4: Vision coords — ❌ SKIP (no screenshot)")
            } else {
                record("▶ Test 3: Vision (describe screenshot)")
                val t3 = MnnAidlClient.analyzeImage(
                    bitmap,
                    "Describe this screenshot in one sentence. Reply ONLY with the description.")
                val visionPass = t3.isNotBlank() && !t3.startsWith("ERROR")
                record(if (visionPass) "✅ PASS" else "❌ FAIL")
                record("   raw output: $t3")
                record("")

                record("▶ Test 4: Vision coords (visionTap format)")
                record("   NOTE: false-positive guard — coords must be 0.05–0.95 (rejects pixel values, list numbers)")
                val t4 = MnnAidlClient.analyzeImage(
                    bitmap,
                    "Find the center of this screen. " +
                    "Reply with ONLY two decimal numbers between 0.05 and 0.95 separated by a comma. " +
                    "These are normalised fractions of screen width and height, NOT pixel values. " +
                    "Format: 0.XX,0.YY — nothing else. Example: 0.50,0.50")
                // Paired extractor: rejects verbose text with numbers separated by words
                val coords4 = parseCoordPair(t4)
                record(if (coords4 != null)
                    "✅ PASS → parsed: ${coords4.first},${coords4.second}"
                    else "❌ FAIL → no paired X.XX,Y.YY in range 0.05–0.95\n   raw: $t4")
                if (coords4 != null) record("   raw output: $t4")
                record("")
            }

            // ── TESTS 5–10: Sales pipeline message quality per stage ──────────
            record("▶ Tests 5–10: Sales pipeline message generation (all 6 stages)")
            record("   Checks: no prompt leak, no bullets, no hashtags, ≤250 chars, not empty")
            record("")

            val stagePrompts = listOf(
                "NEW" to (
                    "You are texting Vitor on WhatsApp. Write one short friendly message " +
                    "asking how you can help. Sound human, casual, under 160 characters. WhatsApp message:"),
                "ENGAGED" to (
                    "You are texting Vitor on WhatsApp. They responded. Write one short " +
                    "question to understand their business needs. Sound curious, under 160 characters. WhatsApp message:"),
                "QUALIFIED" to (
                    "You are texting Vitor on WhatsApp. Write one short message explaining " +
                    "how your AI sales platform helps scale operations. Under 180 characters, no bullet points. WhatsApp message:"),
                "PRESENTING" to (
                    "You are texting Vitor on WhatsApp. Write a short pitch. Mention AI lead " +
                    "qualification, automated follow-ups, analytics, 499 per month, 30-day trial. " +
                    "Under 200 characters, no bullet points, no hashtags. WhatsApp message:"),
                "OBJECTION" to (
                    "You are texting Vitor on WhatsApp. They said price is too high. Write a short " +
                    "empathetic reply mentioning 3x ROI in 90 days and free trial. Under 180 characters. WhatsApp message:"),
                "CLOSING" to (
                    "You are texting Vitor on WhatsApp. Write a short closing message. Ask if ready " +
                    "to proceed, mention contract for digital signature today. Under 160 characters. WhatsApp message:")
            )

            for ((stageName, prompt) in stagePrompts) {
                val raw = MnnAidlClient.generateWithThinking(prompt, maxTokens = 200)
                val clean = raw.trim()
                    .removePrefix("WhatsApp message:").removePrefix("Message:")
                    .removePrefix("Reply:").trim()
                    .lines().firstOrNull { it.isNotBlank() } ?: ""

                val hasLeak    = Regex("under\\s*\\d+\\s*char", RegexOption.IGNORE_CASE).containsMatchIn(clean)
                val hasBullet  = Regex("^\\s*[-*•]", RegexOption.MULTILINE).containsMatchIn(clean)
                val hasHashtag = clean.contains("#")
                val tooLong    = clean.length > 250
                val tooShort   = clean.length < 20
                val isEmpty    = clean.isBlank()
                val pass       = !hasLeak && !hasBullet && !hasHashtag && !tooLong && !tooShort && !isEmpty

                record("  [$stageName] ${if (pass) "✅ PASS" else "❌ FAIL"} (${clean.length} chars)")
                record("    message: $clean")
                if (hasLeak)    record("    ⚠️  PROMPT LEAK — 'under X chars' in output")
                if (hasBullet)  record("    ⚠️  BULLET POINTS in output")
                if (hasHashtag) record("    ⚠️  HASHTAGS in output")
                if (tooLong)    record("    ⚠️  TOO LONG (${clean.length} > 250)")
                if (tooShort)   record("    ⚠️  TOO SHORT (${clean.length} < 20) — incomplete message")
                if (isEmpty)    record("    ⚠️  EMPTY — LLM returned nothing")
                record("")
            }

            finishTestRun(lines, "llm_test_report.txt", "LLM Tests")
        }
    }

    // ─── TEST WHATSAPP — LLM Agent Loop ──────────────────────────────────────
    //
    // The LLM thinks at every step. It sees the screen, reasons about the goal,
    // decides the next single action, and we execute it. No hardcoded steps.

    private fun runWhatsAppTests() {
        log("═══ WHATSAPP AGENT TEST ═══")
        scope.launch {
            val lines = mutableListOf<String>()
            val ts = java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.US).format(java.util.Date())
            fun record(msg: String) { log(msg); lines.add(msg) }

            record("=== WHATSAPP AGENT TEST REPORT ===")
            record("Timestamp: $ts")
            record("Device: ${android.os.Build.MODEL} (API ${android.os.Build.VERSION.SDK_INT})")
            record("Screen: ${screenW.toInt()}x${screenH.toInt()}")
            record("Mode: LLM Thinking Agent Loop — no hardcoded steps")
            record("")

            val ws = WhatsAppService.instance
            if (ws == null) {
                record("❌ ABORT — Accessibility service not connected.")
                finishTestRun(lines, "whatsapp_test_report.txt", "WhatsApp Tests")
                return@launch
            }

            // Goal for the agent
            val goal = "Open WhatsApp. Search for contact named 'Vitor Calvi'. " +
                       "Open the chat. Type the message 'Hello test'. Tap the send button. " +
                       "Confirm the message was sent. Then go back."

            record("Goal: $goal")
            record("")

            val reportFile = java.io.File(filesDir, "whatsapp_test_report.txt")
            fun flush() { try { reportFile.writeText(lines.joinToString("\n")) } catch (_: Exception) {} }
            record("📄 Live output → ${reportFile.absolutePath}")
            record("   adb: adb shell run-as com.mindsense.salesagent cat files/whatsapp_test_report.txt")
            record("")
            flush()

            // Agent loop — LLM decides every action
            var step = 0
            val maxSteps = 20
            var goalAchieved = false
            val history = mutableListOf<String>() // rolling context of what happened

            while (step < maxSteps && !goalAchieved) {
                step++
                record("─── Step $step/$maxSteps ───")

                val screenText = ws.getAllTextFromScreen().take(400)
                val historyCtx = history.takeLast(4).joinToString(" | ")

                // LLM thinks about current state and decides next action
                val thinking = MnnAidlClient.generateWithThinking(
                    """You are controlling an Android phone via accessibility.
Goal: $goal
Step: $step of $maxSteps
Current screen text: $screenText
Recent actions: $historyCtx

Decide the SINGLE next action. Output ONLY one of these formats (no explanation):
TAP:0.XX,0.YY
TYPE:the text to type
BACK:
DONE:goal achieved
FAIL:reason why stuck""",
                    maxTokens = 250
                )

                record("LLM decision: $thinking")

                val action = thinking.trim().lines()
                    .firstOrNull { it.matches(Regex("(TAP|TYPE|BACK|DONE|FAIL):.*", RegexOption.IGNORE_CASE)) }
                    ?: thinking.trim()

                var abortLoop = false
                when {
                    action.startsWith("DONE", ignoreCase = true) -> {
                        record("✅ AGENT DONE — ${action.substringAfter(":")}")
                        goalAchieved = true
                        history.add("Step $step: DONE")
                    }
                    action.startsWith("FAIL", ignoreCase = true) -> {
                        record("❌ AGENT FAIL — ${action.substringAfter(":")}")
                        record("⛔ Aborting — LLM declared failure. Fix and retry.")
                        history.add("Step $step: FAIL — ABORT")
                        abortLoop = true
                    }
                    action.startsWith("TAP", ignoreCase = true) -> {
                        val coords = action.substringAfter(":").trim()
                        val match = Regex("""(\d+\.?\d*),(\d+\.?\d*)""").find(coords)
                        if (match != null) {
                            var x = match.groupValues[1].toFloat()
                            var y = match.groupValues[2].toFloat()
                            if (x > 1f) x /= screenW
                            if (y > 1f) y /= screenH
                            if (x !in 0.05f..0.95f || y !in 0.05f..0.95f) {
                                record("  ❌ TAP coords out of range ($x,$y) — ABORTING")
                                history.add("Step $step: TAP out of range — ABORT")
                                abortLoop = true
                            } else {
                                record("  → TAP (${x},${y}) = (${(x*screenW).toInt()},${(y*screenH).toInt()}px)")
                                ws.tapAt(x * screenW, y * screenH)
                                history.add("Step $step: tapped $x,$y")
                                delay(1200)
                            }
                        } else {
                            record("  ❌ Could not parse TAP coords: '$coords' — ABORTING")
                            history.add("Step $step: TAP parse failed — ABORT")
                            abortLoop = true
                        }
                    }
                    action.startsWith("TYPE", ignoreCase = true) -> {
                        val text = action.substringAfter(":").trim()
                        record("  → TYPE '$text'")
                        ws.enterChatMessage(text)
                        history.add("Step $step: typed '$text'")
                        delay(800)
                    }
                    action.startsWith("BACK", ignoreCase = true) -> {
                        record("  → BACK")
                        ws.navigateBack()
                        history.add("Step $step: back")
                        delay(700)
                    }
                    else -> {
                        record("  ❌ Unrecognised action: '$action' — ABORTING")
                        history.add("Step $step: unknown — ABORT")
                        abortLoop = true
                    }
                }

                flush() // write after every step — survives app crash
                record("")
                if (abortLoop) break
            }

            if (!goalAchieved && step >= maxSteps) {
                record("❌ MAX STEPS ($maxSteps) reached without completing goal")
            }

            record("Total steps: $step")
            finishTestRun(lines, "whatsapp_test_report.txt", "WhatsApp Tests")
        }
    }

    // ─── Shared test runner finish ────────────────────────────────────────────

    private fun finishTestRun(lines: MutableList<String>, filename: String, label: String) {
        val passed = lines.count { it.trimStart().startsWith("✅") }
        val failed = lines.count { it.trimStart().startsWith("❌") }
        val total  = passed + failed
        val allOk  = failed == 0
        val summary = "=== RESULT: $passed/$total PASSED — $failed FAILED ==="
        log(summary); lines.add(summary)
        val verdict = if (allOk) "✅ All $label passed." else "❌ $failed test(s) failed — fix before running pipeline."
        log(verdict); lines.add(verdict)

        runOnUiThread {
            val toastMsg = if (allOk) "✅ $label: $passed/$total PASSED"
                           else "❌ $label: $passed/$total — $failed failed"
            android.widget.Toast.makeText(this@MainActivity, toastMsg, android.widget.Toast.LENGTH_LONG).show()
        }

        try {
            val file = java.io.File(filesDir, filename)
            file.writeText(lines.joinToString("\n"))
            log("📄 Saved → ${file.absolutePath}")
            log("   adb: adb shell run-as com.mindsense.salesagent cat files/$filename")
        } catch (e: Exception) {
            log("⚠️ Save failed: ${e.message}")
        }
        log("═══ $label COMPLETE ═══")
    }

    // ─── JS Script runner ─────────────────────────────────────────────────────

    private fun runJsScript(script: String) {
        log("=== Running Script ===")
        val html = """
            <html><body><script type="text/javascript">
            function magicClicker(d){ return Android.magicClicker(d); }
            function magicScraper(d){ return Android.magicScraper(d); }
            function speakText(t){ Android.speakText(t); }
            function delay(ms){ Android.delay(ms); }
            try{ $script }catch(e){ Android.log('JS error: '+e); }
            </script></body></html>
        """.trimIndent()
        webView.loadDataWithBaseURL(null, html, "text/html", "utf-8", null)
    }

    // ─── JS Bridge ────────────────────────────────────────────────────────────

    inner class JsBridge {

        @JavascriptInterface
        fun magicClicker(description: String): Boolean {
            log("magicClicker: $description")
            val bitmap = ScreenCaptureService.getLatestBitmap() ?: run {
                log("ERROR: ScreenCapture not ready"); return false
            }
            val future = bridgeExecutor.submit(Callable<Boolean> {
                runBlocking {
                    val response = withTimeoutOrNull(12_000L) {
                        MnnAidlClient.analyzeImage(
                            bitmap,
                            "Find '$description' in this screenshot. " +
                            "Reply with exactly two decimal numbers separated by a comma. " +
                            "Format: 0.XX,0.YY — nothing else. Example: 0.88,0.05"
                        )
                    } ?: run { log("magicClicker timeout"); return@runBlocking false }
                    log("coords raw: $response")
                    val numbers = Regex("""[0-9]*\.?[0-9]+""")
                        .findAll(response).map { it.value.toFloat() }
                        .filter { it in 0f..1f }.toList()
                    if (numbers.size < 2) { log("Parse failed: $response"); return@runBlocking false }
                    val metrics = DisplayMetrics()
                    @Suppress("DEPRECATION") windowManager.defaultDisplay.getRealMetrics(metrics)
                    WhatsAppService.instance?.tapAt(
                        numbers[0] * metrics.widthPixels,
                        numbers[1] * metrics.heightPixels
                    )
                    log("Tapped (${(numbers[0] * metrics.widthPixels).toInt()}, ${(numbers[1] * metrics.heightPixels).toInt()})")
                    true
                }
            })
            return try { future.get(15, TimeUnit.SECONDS) }
            catch (e: Exception) { log("magicClicker bridge timeout: $e"); false }
        }

        @JavascriptInterface
        fun magicScraper(description: String): String {
            log("magicScraper: $description")
            val bitmap = ScreenCaptureService.getLatestBitmap() ?: return "ERROR: not ready"
            val future = bridgeExecutor.submit(Callable<String> {
                runBlocking {
                    withTimeoutOrNull(12_000L) {
                        MnnAidlClient.analyzeImage(bitmap, description)
                    } ?: "ERROR: timeout"
                }
            })
            val result = try { future.get(15, TimeUnit.SECONDS) } catch (e: Exception) { "ERROR: bridge timeout" }
            log("scraped: $result")
            return result
        }

        @JavascriptInterface fun typeText(text: String) {
            log("typeText: $text"); WhatsAppService.instance?.enterTextInField(text)
        }

        @JavascriptInterface fun typeMessage(text: String) {
            log("typeMessage: $text"); WhatsAppService.instance?.sendMessage(text)
        }

        @JavascriptInterface fun navigateBack() {
            log("navigateBack"); WhatsAppService.instance?.navigateBack()
        }

        @JavascriptInterface fun classifyIntent(text: String): String {
            log("classifyIntent: $text")
            var result = ""
            runBlocking { result = MnnAidlClient.classify(text) }
            log("intent: $result")
            return result
        }

        @JavascriptInterface fun advanceLead(contactId: String, ordinal: Int) {
            log("advanceLead: $contactId → ordinal $ordinal")
            conversationManager.setLeadStateByOrdinal(contactId, ordinal)
            log("lead $contactId → ${conversationManager.getLeadState(contactId).name}")
        }

        @JavascriptInterface fun startPipeline(contactName: String) {
            log("startPipeline: $contactName")
            val intent = Intent(this@MainActivity, SalesAgentService::class.java).apply {
                putExtra(SalesAgentService.EXTRA_CONTACT_NAME, contactName)
            }
            startService(intent)
        }

        @JavascriptInterface fun getLeadState(contactId: String): String =
            conversationManager.getLeadState(contactId).name

        @JavascriptInterface fun clickElementByViewId(viewId: String): Boolean {
            val root = WhatsAppService.instance?.getRootNode() ?: return false
            val node = root.findAccessibilityNodeInfosByViewId(viewId)?.firstOrNull() ?: return false
            node.performAction(AccessibilityNodeInfo.ACTION_CLICK)
            log("clickElementByViewId: $viewId ✓")
            return true
        }

        @JavascriptInterface fun speakText(text: String) {
            log("speak: $text"); tts?.speak(text, android.speech.tts.TextToSpeech.QUEUE_ADD, null, null)
        }

        @JavascriptInterface fun delay(ms: Long) { Thread.sleep(ms) }

        @JavascriptInterface fun log(msg: String) { this@MainActivity.log(msg) }
    }

    override fun onDestroy() {
        tts?.shutdown()
        scope.cancel()
        bridgeExecutor.shutdown()
        super.onDestroy()
    }
}
