// ILlmCallback.aidl - Streaming callback interface for LLM responses
package com.alibaba.mnnllm.android;

oneway interface ILlmCallback {
    void onToken(String token);
    void onComplete(String fullResponse);
    void onError(String errorMessage);
}
