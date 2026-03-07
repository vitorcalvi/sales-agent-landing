package com.mindsense.salesagent.whatsapp

import android.accessibilityservice.AccessibilityService
import android.accessibilityservice.GestureDescription
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.graphics.Path
import android.os.Bundle
import android.os.SystemClock
import android.util.Log
import android.view.accessibility.AccessibilityEvent
import android.view.accessibility.AccessibilityNodeInfo
import com.mindsense.salesagent.agent.SalesAgentService
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import java.util.LinkedList
import java.util.Locale

class WhatsAppService : AccessibilityService() {

    companion object {
        private const val TAG = "WhatsAppService"
        private const val WHATSAPP_PACKAGE = "com.whatsapp"
        private const val THROTTLE_MS = 2000L

        @Volatile
        var instance: WhatsAppService? = null
    }

    private val serviceScope = CoroutineScope(Dispatchers.IO + SupervisorJob())

    private var lastProcessedTime = 0L
    private var lastProcessedContactId = ""

    override fun onServiceConnected() {
        super.onServiceConnected()
        instance = this
        Log.i(TAG, "Accessibility service connected")
    }

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        if (event == null) return
        if (event.packageName?.toString() != WHATSAPP_PACKAGE) return
        if (event.eventType != AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED &&
            event.eventType != AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED
        ) return

        val now = SystemClock.elapsedRealtime()
        if (now - lastProcessedTime < THROTTLE_MS) return

        val root = rootInActiveWindow ?: return
        val contactName = extractContactName(root) ?: return
        val contactId = contactName.lowercase(Locale.US).replace(Regex("[^a-z0-9]"), "_")
        if (contactId == lastProcessedContactId) return

        val lastMessage = getLastIncomingMessage(root) ?: return
        lastProcessedTime = now
        lastProcessedContactId = contactId

        Log.i(TAG, "Event: contact=$contactName msg=$lastMessage")
        serviceScope.launch {
            SalesAgentService.instance?.onWhatsAppMessage(contactId, contactName, lastMessage)
        }
    }

    fun tapAt(x: Float, y: Float) {
        val path = Path().apply { moveTo(x, y) }
        val stroke = GestureDescription.StrokeDescription(path, 0L, 100L)
        dispatchGesture(GestureDescription.Builder().addStroke(stroke).build(), null, null)
    }

    fun enterTextInField(text: String) {
        val root = rootInActiveWindow ?: return
        val editText = findFirstEditText(root) ?: return
        editText.performAction(AccessibilityNodeInfo.ACTION_FOCUS)
        val args = Bundle().apply {
            putString(AccessibilityNodeInfo.ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE, text)
        }
        editText.performAction(AccessibilityNodeInfo.ACTION_SET_TEXT, args)
    }

    fun sendMessage(text: String): Boolean {
        enterTextInField(text)
        Thread.sleep(400)
        val root = rootInActiveWindow ?: return false
        val sendBtn =
            root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send_btn")?.firstOrNull()
                ?: findNodeByContentDesc(root, "send")
        return if (sendBtn != null) {
            sendBtn.performAction(AccessibilityNodeInfo.ACTION_CLICK)
            true
        } else {
            Log.w(TAG, "Send button not found")
            false
        }
    }

    fun waitForText(text: String, timeoutMs: Long = 5000L, pollMs: Long = 300L): Boolean {
        val deadline = SystemClock.elapsedRealtime() + timeoutMs
        while (SystemClock.elapsedRealtime() < deadline) {
            if (isTextPresentOnScreen(text)) return true
            Thread.sleep(pollMs)
        }
        return false
    }

    fun waitForEditText(timeoutMs: Long = 4000L, pollMs: Long = 300L): Boolean {
        val deadline = SystemClock.elapsedRealtime() + timeoutMs
        while (SystemClock.elapsedRealtime() < deadline) {
            val root = rootInActiveWindow
            if (root != null && findFirstEditText(root) != null) return true
            Thread.sleep(pollMs)
        }
        return false
    }

    /**
     * Waits for the WhatsApp chat message input box to appear.
     * Uses WhatsApp-specific resource IDs — NOT generic EditText search.
     * This correctly distinguishes "chat is open" from "search box is open".
     */
    fun waitForChatInput(timeoutMs: Long = 8000L, pollMs: Long = 300L): Boolean {
        val chatInputIds = listOf(
            "com.whatsapp:id/entry",
            "com.whatsapp:id/message_input_text_container",
            "com.whatsapp:id/conversation_entry"
        )
        val deadline = SystemClock.elapsedRealtime() + timeoutMs
        while (SystemClock.elapsedRealtime() < deadline) {
            val root = rootInActiveWindow
            if (root != null) {
                for (id in chatInputIds) {
                    if (root.findAccessibilityNodeInfosByViewId(id)?.isNotEmpty() == true) {
                        Log.i(TAG, "Chat input found: $id")
                        return true
                    }
                }
            }
            Thread.sleep(pollMs)
        }
        Log.w(TAG, "Chat input not found after ${timeoutMs}ms")
        return false
    }

    /** Public accessor for SalesAgentService to read the accessibility tree. */
    fun getRootNode() = rootInActiveWindow

    /**
     * Types text into the WhatsApp chat message input.
     * Uses clipboard paste — more reliable than ACTION_SET_TEXT because
     * it properly triggers WhatsApp's text change listener (shows send button).
     */
    fun enterChatMessage(text: String) {
        val root = rootInActiveWindow ?: return

        // Find the chat input field by WhatsApp-specific IDs
        val chatInput =
            root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/entry")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/conversation_entry")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/message_input_text_container")?.firstOrNull()
                ?: findFirstEditText(root)

        if (chatInput == null) {
            Log.e(TAG, "Chat input field not found")
            return
        }

        // Step 1: focus the field
        chatInput.performAction(AccessibilityNodeInfo.ACTION_FOCUS)

        // Step 2: put text on clipboard
        val clipboard = applicationContext.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
        clipboard.setPrimaryClip(ClipData.newPlainText("msg", text))

        // Step 3: paste — this triggers WhatsApp's text change listener properly
        chatInput.performAction(AccessibilityNodeInfo.ACTION_PASTE)

        // Step 4: fallback — if paste didn't set text, try ACTION_SET_TEXT
        val currentText = chatInput.text?.toString() ?: ""
        if (currentText.isBlank()) {
            Log.w(TAG, "Paste produced no text — falling back to ACTION_SET_TEXT")
            val args = Bundle().apply {
                putString(AccessibilityNodeInfo.ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE, text)
            }
            chatInput.performAction(AccessibilityNodeInfo.ACTION_SET_TEXT, args)
        }

        Log.i(TAG, "enterChatMessage: typed '${text.take(40)}…'")
    }

    suspend fun sendMessageSuspending(text: String): Boolean {
        enterChatMessage(text)

        // Wait for send button to appear — confirms WhatsApp recognised the text
        val sendVisible = waitForSendButton(timeoutMs = 3000)
        if (!sendVisible) {
            Log.w(TAG, "Send button did not appear after typing — text may not have registered")
        }

        delay(300)
        val root = rootInActiveWindow ?: return false
        val sendBtn =
            root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send_btn")?.firstOrNull()
                ?: findNodeByContentDesc(root, "send")

        return if (sendBtn != null && sendBtn.isEnabled) {
            sendBtn.performAction(AccessibilityNodeInfo.ACTION_CLICK)
            Log.i(TAG, "Message sent ✓")
            true
        } else {
            Log.w(TAG, "Send button not found or not enabled")
            false
        }
    }

    fun openWhatsApp() {
        val intent = packageManager.getLaunchIntentForPackage("com.whatsapp")
            ?: packageManager.getLaunchIntentForPackage("com.whatsapp.w4b")
            ?: return
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        applicationContext.startActivity(intent)
    }

    /** Waits for WhatsApp home/chat list to be the active window. */
    fun waitForWhatsAppHome(timeoutMs: Long = 5000L): Boolean {
        val deadline = SystemClock.elapsedRealtime() + timeoutMs
        while (SystemClock.elapsedRealtime() < deadline) {
            val root = rootInActiveWindow
            if (root?.packageName?.toString() == WHATSAPP_PACKAGE) {
                // Check for search icon — confirms we're on home screen
                val hasSearch =
                    root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/menuitem_search")?.isNotEmpty() == true ||
                    root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/search_btn")?.isNotEmpty() == true ||
                    findNodeByContentDesc(root, "search") != null
                if (hasSearch) return true
            }
            Thread.sleep(300)
        }
        return false
    }

    fun openSearch() {
        val root = rootInActiveWindow ?: return
        val searchBtn =
            root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/menuitem_search")?.firstOrNull()
                ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/search_btn")?.firstOrNull()
                ?: findNodeByContentDesc(root, "search")
        searchBtn?.performAction(AccessibilityNodeInfo.ACTION_CLICK)
    }

    /**
     * Taps the first chat in search results.
     * Collects ALL clickable rows in the accessibility tree, filters to those
     * containing the contact name, and taps the first one — prioritising Chats over Contacts.
     */
    fun tapContactResult(contactName: String) {
        val root = rootInActiveWindow ?: return

        // Collect all clickable rows that contain contactName text
        val clickableRows = mutableListOf<AccessibilityNodeInfo>()
        collectClickableRows(root, contactName, clickableRows)

        if (clickableRows.isNotEmpty()) {
            Log.i(TAG, "Found ${clickableRows.size} clickable rows for '$contactName' — tapping first")
            clickableRows[0].performAction(AccessibilityNodeInfo.ACTION_CLICK)
            return
        }

        // Last resort: tap any node with the text
        Log.w(TAG, "No clickable rows found — falling back to raw text search")
        val nodes = root.findAccessibilityNodeInfosByText(contactName)
        nodes?.firstOrNull()?.performAction(AccessibilityNodeInfo.ACTION_CLICK)
    }

    private fun collectClickableRows(
        node: AccessibilityNodeInfo,
        contactName: String,
        out: MutableList<AccessibilityNodeInfo>
    ) {
        if (node.isClickable && nodeContainsText(node, contactName)) {
            out.add(node)
            return // don't recurse into already-matched clickable nodes
        }
        for (i in 0 until node.childCount) {
            collectClickableRows(node.getChild(i) ?: continue, contactName, out)
        }
    }

    private fun nodeContainsText(node: AccessibilityNodeInfo, text: String): Boolean {
        if (node.text?.toString()?.contains(text, ignoreCase = true) == true) return true
        for (i in 0 until node.childCount) {
            if (nodeContainsText(node.getChild(i) ?: continue, text)) return true
        }
        return false
    }

    private fun findFirstClickable(node: AccessibilityNodeInfo): AccessibilityNodeInfo? {
        if (node.isClickable) return node
        for (i in 0 until node.childCount) {
            val found = findFirstClickable(node.getChild(i) ?: continue)
            if (found != null) return found
        }
        return null
    }

    /** Waits for the WhatsApp send button to appear (confirms text was accepted). */
    fun waitForSendButton(timeoutMs: Long = 3000L): Boolean {
        val deadline = SystemClock.elapsedRealtime() + timeoutMs
        while (SystemClock.elapsedRealtime() < deadline) {
            val root = rootInActiveWindow
            if (root != null) {
                val btn = root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send")?.firstOrNull()
                    ?: root.findAccessibilityNodeInfosByViewId("com.whatsapp:id/send_btn")?.firstOrNull()
                    ?: findNodeByContentDesc(root, "send")
                if (btn != null) return true
            }
            Thread.sleep(200)
        }
        return false
    }

    fun navigateBack() {
        performGlobalAction(GLOBAL_ACTION_BACK)
    }

    fun getAllTextFromScreen(): String {
        val root = rootInActiveWindow ?: return ""
        val sb = StringBuilder()
        collectAllText(root, sb)
        return sb.toString()
    }

    fun isTextPresentOnScreen(text: String): Boolean {
        val root = rootInActiveWindow ?: return false
        return root.findAccessibilityNodeInfosByText(text)?.isNotEmpty() == true
    }

    private fun extractContactName(root: AccessibilityNodeInfo): String? {
        val ids = listOf(
            "com.whatsapp:id/conversation_contact_name",
            "com.whatsapp:id/toolbar_title",
            "com.whatsapp:id/contact_name"
        )
        for (id in ids) {
            val node = root.findAccessibilityNodeInfosByViewId(id)?.firstOrNull()
            if (node?.text?.isNotBlank() == true) return node.text.toString()
        }
        return findContactNameBfs(root)
    }

    private fun findContactNameBfs(root: AccessibilityNodeInfo, maxDepth: Int = 12): String? {
        data class Entry(val node: AccessibilityNodeInfo, val depth: Int)
        val queue: LinkedList<Entry> = LinkedList()
        queue.add(Entry(root, 0))
        while (queue.isNotEmpty()) {
            val (node, depth) = queue.poll() ?: continue
            if (node.className?.contains("TextView") == true &&
                node.text?.isNotBlank() == true &&
                node.viewIdResourceName?.contains("title") == true
            ) return node.text.toString()
            if (depth < maxDepth) {
                for (i in 0 until node.childCount) {
                    node.getChild(i)?.let { queue.add(Entry(it, depth + 1)) }
                }
            }
        }
        return null
    }

    private fun getLastIncomingMessage(root: AccessibilityNodeInfo): String? {
        val messages = mutableListOf<String>()
        collectMessages(root, messages)
        return messages.lastOrNull()?.takeIf { it.isNotBlank() }
    }

    private fun collectMessages(
        node: AccessibilityNodeInfo,
        out: MutableList<String>,
        depth: Int = 0,
        maxDepth: Int = 15
    ) {
        if (depth > maxDepth) return
        val id = node.viewIdResourceName
        if (id?.contains("message_text") == true || id?.contains("message_body") == true) {
            node.text?.toString()?.takeIf { it.isNotBlank() }?.let { out.add(it) }
        }
        for (i in 0 until node.childCount) {
            node.getChild(i)?.let { collectMessages(it, out, depth + 1, maxDepth) }
        }
    }

    private fun findFirstEditText(node: AccessibilityNodeInfo): AccessibilityNodeInfo? {
        if (node.className?.contains("EditText") == true) return node
        for (i in 0 until node.childCount) {
            val found = findFirstEditText(node.getChild(i) ?: continue)
            if (found != null) return found
        }
        return null
    }

    private fun findNodeByContentDesc(node: AccessibilityNodeInfo, desc: String): AccessibilityNodeInfo? {
        if (node.contentDescription?.toString()?.contains(desc, ignoreCase = true) == true) return node
        for (i in 0 until node.childCount) {
            val found = findNodeByContentDesc(node.getChild(i) ?: continue, desc)
            if (found != null) return found
        }
        return null
    }

    private fun collectAllText(node: AccessibilityNodeInfo, sb: StringBuilder) {
        node.text?.takeIf { it.isNotBlank() }?.let { sb.appendLine(it) }
        for (i in 0 until node.childCount) {
            node.getChild(i)?.let { collectAllText(it, sb) }
        }
    }

    override fun onInterrupt() {
        Log.w(TAG, "Service interrupted")
    }

    override fun onDestroy() {
        serviceScope.cancel()
        instance = null
        super.onDestroy()
    }
}
