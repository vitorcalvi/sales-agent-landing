// ILlmService.aidl - AIDL interface for on-device LLM inference service
package com.alibaba.mnnllm.android;

import com.alibaba.mnnllm.android.ILlmCallback;

interface ILlmService {
    // Model management
    boolean loadModel(String modelId, String configPath, String modelType);
    boolean isReady(String modelType);
    void resetContext(String modelType);
    String getLoadedTextModelId();
    String getLoadedVisionModelId();
    boolean selectModel(String modelId, String modelType);
    // Returns JSON array of discovered model IDs, e.g. ["Qwen3.5-2B-MNN","Qwen3-1.7B-MNN"]
    String getAvailableModelIds();
    
    // System prompt (call after loadModel, before generation)
    void setSystemPrompt(String systemPrompt, String modelType);

    // Text generation
    String generateSync(String prompt, int maxTokens, float temperature);
    void generateStream(String prompt, int maxTokens, float temperature, ILlmCallback callback);
    
    // Vision generation (image passed as file path to avoid AIDL marshaling limits)
    void generateWithImageStream(String prompt, String imageFilePath, int maxTokens, ILlmCallback callback);

    // Vision generation (image passed as raw JPEG bytes - avoids cross-process file access issues)
    void generateWithImageBytesStream(String prompt, in byte[] imageBytes, int maxTokens, ILlmCallback callback);
}
