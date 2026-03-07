package com.mindsense.salesagent

import android.app.Application
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.os.Handler
import android.os.IBinder
import android.os.Looper
import android.util.Log
import com.alibaba.mnnllm.android.ILlmService

class App : Application() {

    companion object {
        private const val TAG = "App"

        @Volatile
        var llmService: ILlmService? = null
            private set

        @Volatile
        var isLlmConnected = false
            private set

        // Guards against re-launching MNN Chat on every call
        @Volatile var isBindingInProgress = false
        @Volatile var mnnLaunched = false

        /**
         * Call between pipeline stages to free RAM and prevent LMKD kills.
         * Resets both text and vision model contexts.
         */
        fun releaseModels() {
            llmService?.resetContext("text")
            llmService?.resetContext("vision")
            Log.i(TAG, "Models reset — RAM freed")
        }
    }

    private val serviceConnection = object : ServiceConnection {
        override fun onServiceConnected(name: ComponentName?, binder: IBinder?) {
            llmService = ILlmService.Stub.asInterface(binder)
            isLlmConnected = true
            isBindingInProgress = false
            Log.i(TAG, "MNN LLM Service connected ✓")
        }

        override fun onServiceDisconnected(name: ComponentName?) {
            llmService = null
            isLlmConnected = false
            isBindingInProgress = false
            // Don't re-launch MNN app on disconnect — just re-bind
            Log.w(TAG, "MNN LLM Service disconnected — re-binding...")
            Handler(Looper.getMainLooper()).postDelayed({ doBindService() }, 2000)
        }
    }

    override fun onCreate() {
        super.onCreate()
        bindLlmService()
    }

    fun bindLlmService() {
        // Guard: never bind more than once at a time and never re-launch MNN app if already connected
        if (isLlmConnected) { Log.d(TAG, "Already connected — skip bind"); return }
        if (isBindingInProgress) { Log.d(TAG, "Bind already in progress — skip"); return }
        isBindingInProgress = true

        val mnnInstalled = try {
            packageManager.getPackageInfo("com.alibaba.mnnllm.android", 0); true
        } catch (e: Exception) { false }

        if (!mnnInstalled) {
            Log.e(TAG, "MNN LLM app not installed — cannot bind")
            isBindingInProgress = false
            return
        }

        // Launch MNN app ONCE to start its service process, then bind
        val launchIntent = packageManager.getLaunchIntentForPackage("com.alibaba.mnnllm.android")
        if (launchIntent != null && !mnnLaunched) {
            mnnLaunched = true
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_SINGLE_TOP)
            startActivity(launchIntent)
            Log.i(TAG, "MNN app launched once — binding in 3s...")
            Handler(Looper.getMainLooper()).postDelayed({ doBindService() }, 3000)
        } else {
            doBindService()
        }
    }

    private fun doBindService() {
        // Action stays as original — only the package (applicationId) changes
        val intent = Intent("com.alibaba.mnnllm.LLM_SERVICE").apply {
            setPackage("com.alibaba.mnnllm.android")
        }
        try {
            val bound = bindService(intent, serviceConnection, Context.BIND_AUTO_CREATE)
            if (bound) {
                Log.i(TAG, "bindService OK — waiting for onServiceConnected...")
            } else {
                Log.e(TAG, "bindService returned false — retrying in 5s")
                Handler(Looper.getMainLooper()).postDelayed({ doBindService() }, 5000)
            }
        } catch (e: Exception) {
            Log.e(TAG, "bindService exception: ${e.message} — retrying in 5s")
            Handler(Looper.getMainLooper()).postDelayed({ doBindService() }, 5000)
        }
    }
}
