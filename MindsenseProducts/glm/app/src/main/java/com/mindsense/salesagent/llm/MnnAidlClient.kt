package com.mindsense.salesagent.llm

import android.graphics.Bitmap
import android.util.Log
import com.alibaba.mnnllm.android.ILlmCallback
import com.mindsense.salesagent.App
import kotlinx.coroutines.suspendCancellableCoroutine
import java.io.ByteArrayOutputStream
import kotlin.coroutines.resume

object MnnAidlClient {
    private const val TAG = "MnnAidlClient"

    suspend fun analyzeImage(bitmap: Bitmap, prompt: String): String {
        val service = App.llmService ?: return "ERROR: Service not connected"
        val out = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.JPEG, 80, out)
        val imageBytes = out.toByteArray()

        // Prefix with /no_think so LlmBoundService.buildVisionPrompt() disables thinking mode.
        // Vision calls don't need reasoning — we want fast, direct coordinate/description output.
        val noThinkPrompt = if (prompt.startsWith("/no_think")) prompt else "/no_think $prompt"

        return suspendCancellableCoroutine { cont ->
            try {
                service.generateWithImageBytesStream(
                    noThinkPrompt, imageBytes, 512,
                    object : ILlmCallback.Stub() {
                        override fun onToken(token: String?) {}
                        override fun onComplete(response: String?) {
                            // Vision model also outputs <think> blocks — strip them
                            val raw = response ?: ""
                            val clean = raw
                                .replace(Regex("<think>[\\s\\S]*?</think>", RegexOption.IGNORE_CASE), "")
                                .trim()
                            if (cont.isActive) cont.resume(clean)
                        }

                        override fun onError(errorMessage: String?) {
                            Log.e(TAG, "Vision error: $errorMessage")
                            if (cont.isActive) cont.resume("ERROR: $errorMessage")
                        }
                    }
                )
            } catch (e: Exception) {
                Log.e(TAG, "AIDL call failed", e)
                if (cont.isActive) cont.resume("ERROR: ${e.message}")
            }
        }
    }

    /** Text generation — for sales message crafting and reasoning. */
    suspend fun generate(prompt: String, maxTokens: Int = 512, temperature: Float = 0.7f): String {
        val service = App.llmService ?: return "ERROR: Service not connected"
        val response = service.generateSync(prompt, maxTokens, temperature) ?: ""
        return if (response.startsWith("ERROR:")) "" else response
    }

    /**
     * Streaming generate with thinking — uses Qwen3.5-2B-MNN's <think> capability.
     * Strips the <think>...</think> block and returns only the final answer.
     */
    suspend fun generateWithThinking(prompt: String, maxTokens: Int = 1024): String {
        val service = App.llmService ?: return "ERROR: Service not connected"
        return suspendCancellableCoroutine { cont ->
            try {
                service.generateStream(prompt, maxTokens, 0.6f,
                    object : ILlmCallback.Stub() {
                        override fun onToken(token: String?) {}
                        override fun onComplete(response: String?) {
                            val full = response ?: ""
                            // Strip <think>...</think> block — return only the answer
                            val answer = full
                                .replace(Regex("<think>[\\s\\S]*?</think>", RegexOption.IGNORE_CASE), "")
                                .trim()
                            if (cont.isActive) cont.resume(answer)
                        }
                        override fun onError(errorMessage: String?) {
                            if (cont.isActive) cont.resume("ERROR: $errorMessage")
                        }
                    }
                )
            } catch (e: Exception) {
                if (cont.isActive) cont.resume("ERROR: ${e.message}")
            }
        }
    }

    suspend fun classify(text: String): String {
        return generate(
            "Classify the intent of this WhatsApp message into one word " +
            "(GREETING, QUESTION, OBJECTION, INTEREST, CONFIRMATION, or OTHER):\n\"$text\"\nIntent:"
        ).trim().uppercase()
    }
}
