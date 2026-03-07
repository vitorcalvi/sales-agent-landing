/*
 * This file is auto-generated.  DO NOT MODIFY.
 */
package com.alibaba.mnnllm.android;
public interface ILlmService extends android.os.IInterface
{
  /** Default implementation for ILlmService. */
  public static class Default implements com.alibaba.mnnllm.android.ILlmService
  {
    // Model management
    @Override public boolean loadModel(java.lang.String modelId, java.lang.String configPath, java.lang.String modelType) throws android.os.RemoteException
    {
      return false;
    }
    @Override public boolean isReady(java.lang.String modelType) throws android.os.RemoteException
    {
      return false;
    }
    @Override public void resetContext(java.lang.String modelType) throws android.os.RemoteException
    {
    }
    @Override public java.lang.String getLoadedTextModelId() throws android.os.RemoteException
    {
      return null;
    }
    @Override public java.lang.String getLoadedVisionModelId() throws android.os.RemoteException
    {
      return null;
    }
    @Override public boolean selectModel(java.lang.String modelId, java.lang.String modelType) throws android.os.RemoteException
    {
      return false;
    }
    // Returns JSON array of discovered model IDs, e.g. ["Qwen3.5-2B-MNN","Qwen3-1.7B-MNN"]
    @Override public java.lang.String getAvailableModelIds() throws android.os.RemoteException
    {
      return null;
    }
    // System prompt (call after loadModel, before generation)
    @Override public void setSystemPrompt(java.lang.String systemPrompt, java.lang.String modelType) throws android.os.RemoteException
    {
    }
    // Text generation
    @Override public java.lang.String generateSync(java.lang.String prompt, int maxTokens, float temperature) throws android.os.RemoteException
    {
      return null;
    }
    @Override public void generateStream(java.lang.String prompt, int maxTokens, float temperature, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
    {
    }
    // Vision generation (image passed as file path to avoid AIDL marshaling limits)
    @Override public void generateWithImageStream(java.lang.String prompt, java.lang.String imageFilePath, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
    {
    }
    // Vision generation (image passed as raw JPEG bytes - avoids cross-process file access issues)
    @Override public void generateWithImageBytesStream(java.lang.String prompt, byte[] imageBytes, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
    {
    }
    @Override
    public android.os.IBinder asBinder() {
      return null;
    }
  }
  /** Local-side IPC implementation stub class. */
  public static abstract class Stub extends android.os.Binder implements com.alibaba.mnnllm.android.ILlmService
  {
    /** Construct the stub at attach it to the interface. */
    public Stub()
    {
      this.attachInterface(this, DESCRIPTOR);
    }
    /**
     * Cast an IBinder object into an com.alibaba.mnnllm.android.ILlmService interface,
     * generating a proxy if needed.
     */
    public static com.alibaba.mnnllm.android.ILlmService asInterface(android.os.IBinder obj)
    {
      if ((obj==null)) {
        return null;
      }
      android.os.IInterface iin = obj.queryLocalInterface(DESCRIPTOR);
      if (((iin!=null)&&(iin instanceof com.alibaba.mnnllm.android.ILlmService))) {
        return ((com.alibaba.mnnllm.android.ILlmService)iin);
      }
      return new com.alibaba.mnnllm.android.ILlmService.Stub.Proxy(obj);
    }
    @Override public android.os.IBinder asBinder()
    {
      return this;
    }
    @Override public boolean onTransact(int code, android.os.Parcel data, android.os.Parcel reply, int flags) throws android.os.RemoteException
    {
      java.lang.String descriptor = DESCRIPTOR;
      if (code >= android.os.IBinder.FIRST_CALL_TRANSACTION && code <= android.os.IBinder.LAST_CALL_TRANSACTION) {
        data.enforceInterface(descriptor);
      }
      switch (code)
      {
        case INTERFACE_TRANSACTION:
        {
          reply.writeString(descriptor);
          return true;
        }
      }
      switch (code)
      {
        case TRANSACTION_loadModel:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          java.lang.String _arg1;
          _arg1 = data.readString();
          java.lang.String _arg2;
          _arg2 = data.readString();
          boolean _result = this.loadModel(_arg0, _arg1, _arg2);
          reply.writeNoException();
          reply.writeInt(((_result)?(1):(0)));
          break;
        }
        case TRANSACTION_isReady:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          boolean _result = this.isReady(_arg0);
          reply.writeNoException();
          reply.writeInt(((_result)?(1):(0)));
          break;
        }
        case TRANSACTION_resetContext:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          this.resetContext(_arg0);
          reply.writeNoException();
          break;
        }
        case TRANSACTION_getLoadedTextModelId:
        {
          java.lang.String _result = this.getLoadedTextModelId();
          reply.writeNoException();
          reply.writeString(_result);
          break;
        }
        case TRANSACTION_getLoadedVisionModelId:
        {
          java.lang.String _result = this.getLoadedVisionModelId();
          reply.writeNoException();
          reply.writeString(_result);
          break;
        }
        case TRANSACTION_selectModel:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          java.lang.String _arg1;
          _arg1 = data.readString();
          boolean _result = this.selectModel(_arg0, _arg1);
          reply.writeNoException();
          reply.writeInt(((_result)?(1):(0)));
          break;
        }
        case TRANSACTION_getAvailableModelIds:
        {
          java.lang.String _result = this.getAvailableModelIds();
          reply.writeNoException();
          reply.writeString(_result);
          break;
        }
        case TRANSACTION_setSystemPrompt:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          java.lang.String _arg1;
          _arg1 = data.readString();
          this.setSystemPrompt(_arg0, _arg1);
          reply.writeNoException();
          break;
        }
        case TRANSACTION_generateSync:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          int _arg1;
          _arg1 = data.readInt();
          float _arg2;
          _arg2 = data.readFloat();
          java.lang.String _result = this.generateSync(_arg0, _arg1, _arg2);
          reply.writeNoException();
          reply.writeString(_result);
          break;
        }
        case TRANSACTION_generateStream:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          int _arg1;
          _arg1 = data.readInt();
          float _arg2;
          _arg2 = data.readFloat();
          com.alibaba.mnnllm.android.ILlmCallback _arg3;
          _arg3 = com.alibaba.mnnllm.android.ILlmCallback.Stub.asInterface(data.readStrongBinder());
          this.generateStream(_arg0, _arg1, _arg2, _arg3);
          reply.writeNoException();
          break;
        }
        case TRANSACTION_generateWithImageStream:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          java.lang.String _arg1;
          _arg1 = data.readString();
          int _arg2;
          _arg2 = data.readInt();
          com.alibaba.mnnllm.android.ILlmCallback _arg3;
          _arg3 = com.alibaba.mnnllm.android.ILlmCallback.Stub.asInterface(data.readStrongBinder());
          this.generateWithImageStream(_arg0, _arg1, _arg2, _arg3);
          reply.writeNoException();
          break;
        }
        case TRANSACTION_generateWithImageBytesStream:
        {
          java.lang.String _arg0;
          _arg0 = data.readString();
          byte[] _arg1;
          _arg1 = data.createByteArray();
          int _arg2;
          _arg2 = data.readInt();
          com.alibaba.mnnllm.android.ILlmCallback _arg3;
          _arg3 = com.alibaba.mnnllm.android.ILlmCallback.Stub.asInterface(data.readStrongBinder());
          this.generateWithImageBytesStream(_arg0, _arg1, _arg2, _arg3);
          reply.writeNoException();
          break;
        }
        default:
        {
          return super.onTransact(code, data, reply, flags);
        }
      }
      return true;
    }
    private static class Proxy implements com.alibaba.mnnllm.android.ILlmService
    {
      private android.os.IBinder mRemote;
      Proxy(android.os.IBinder remote)
      {
        mRemote = remote;
      }
      @Override public android.os.IBinder asBinder()
      {
        return mRemote;
      }
      public java.lang.String getInterfaceDescriptor()
      {
        return DESCRIPTOR;
      }
      // Model management
      @Override public boolean loadModel(java.lang.String modelId, java.lang.String configPath, java.lang.String modelType) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        boolean _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(modelId);
          _data.writeString(configPath);
          _data.writeString(modelType);
          boolean _status = mRemote.transact(Stub.TRANSACTION_loadModel, _data, _reply, 0);
          _reply.readException();
          _result = (0!=_reply.readInt());
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      @Override public boolean isReady(java.lang.String modelType) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        boolean _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(modelType);
          boolean _status = mRemote.transact(Stub.TRANSACTION_isReady, _data, _reply, 0);
          _reply.readException();
          _result = (0!=_reply.readInt());
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      @Override public void resetContext(java.lang.String modelType) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(modelType);
          boolean _status = mRemote.transact(Stub.TRANSACTION_resetContext, _data, _reply, 0);
          _reply.readException();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
      }
      @Override public java.lang.String getLoadedTextModelId() throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        java.lang.String _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          boolean _status = mRemote.transact(Stub.TRANSACTION_getLoadedTextModelId, _data, _reply, 0);
          _reply.readException();
          _result = _reply.readString();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      @Override public java.lang.String getLoadedVisionModelId() throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        java.lang.String _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          boolean _status = mRemote.transact(Stub.TRANSACTION_getLoadedVisionModelId, _data, _reply, 0);
          _reply.readException();
          _result = _reply.readString();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      @Override public boolean selectModel(java.lang.String modelId, java.lang.String modelType) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        boolean _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(modelId);
          _data.writeString(modelType);
          boolean _status = mRemote.transact(Stub.TRANSACTION_selectModel, _data, _reply, 0);
          _reply.readException();
          _result = (0!=_reply.readInt());
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      // Returns JSON array of discovered model IDs, e.g. ["Qwen3.5-2B-MNN","Qwen3-1.7B-MNN"]
      @Override public java.lang.String getAvailableModelIds() throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        java.lang.String _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          boolean _status = mRemote.transact(Stub.TRANSACTION_getAvailableModelIds, _data, _reply, 0);
          _reply.readException();
          _result = _reply.readString();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      // System prompt (call after loadModel, before generation)
      @Override public void setSystemPrompt(java.lang.String systemPrompt, java.lang.String modelType) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(systemPrompt);
          _data.writeString(modelType);
          boolean _status = mRemote.transact(Stub.TRANSACTION_setSystemPrompt, _data, _reply, 0);
          _reply.readException();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
      }
      // Text generation
      @Override public java.lang.String generateSync(java.lang.String prompt, int maxTokens, float temperature) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        java.lang.String _result;
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(prompt);
          _data.writeInt(maxTokens);
          _data.writeFloat(temperature);
          boolean _status = mRemote.transact(Stub.TRANSACTION_generateSync, _data, _reply, 0);
          _reply.readException();
          _result = _reply.readString();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
        return _result;
      }
      @Override public void generateStream(java.lang.String prompt, int maxTokens, float temperature, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(prompt);
          _data.writeInt(maxTokens);
          _data.writeFloat(temperature);
          _data.writeStrongInterface(callback);
          boolean _status = mRemote.transact(Stub.TRANSACTION_generateStream, _data, _reply, 0);
          _reply.readException();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
      }
      // Vision generation (image passed as file path to avoid AIDL marshaling limits)
      @Override public void generateWithImageStream(java.lang.String prompt, java.lang.String imageFilePath, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(prompt);
          _data.writeString(imageFilePath);
          _data.writeInt(maxTokens);
          _data.writeStrongInterface(callback);
          boolean _status = mRemote.transact(Stub.TRANSACTION_generateWithImageStream, _data, _reply, 0);
          _reply.readException();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
      }
      // Vision generation (image passed as raw JPEG bytes - avoids cross-process file access issues)
      @Override public void generateWithImageBytesStream(java.lang.String prompt, byte[] imageBytes, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeString(prompt);
          _data.writeByteArray(imageBytes);
          _data.writeInt(maxTokens);
          _data.writeStrongInterface(callback);
          boolean _status = mRemote.transact(Stub.TRANSACTION_generateWithImageBytesStream, _data, _reply, 0);
          _reply.readException();
        }
        finally {
          _reply.recycle();
          _data.recycle();
        }
      }
    }
    static final int TRANSACTION_loadModel = (android.os.IBinder.FIRST_CALL_TRANSACTION + 0);
    static final int TRANSACTION_isReady = (android.os.IBinder.FIRST_CALL_TRANSACTION + 1);
    static final int TRANSACTION_resetContext = (android.os.IBinder.FIRST_CALL_TRANSACTION + 2);
    static final int TRANSACTION_getLoadedTextModelId = (android.os.IBinder.FIRST_CALL_TRANSACTION + 3);
    static final int TRANSACTION_getLoadedVisionModelId = (android.os.IBinder.FIRST_CALL_TRANSACTION + 4);
    static final int TRANSACTION_selectModel = (android.os.IBinder.FIRST_CALL_TRANSACTION + 5);
    static final int TRANSACTION_getAvailableModelIds = (android.os.IBinder.FIRST_CALL_TRANSACTION + 6);
    static final int TRANSACTION_setSystemPrompt = (android.os.IBinder.FIRST_CALL_TRANSACTION + 7);
    static final int TRANSACTION_generateSync = (android.os.IBinder.FIRST_CALL_TRANSACTION + 8);
    static final int TRANSACTION_generateStream = (android.os.IBinder.FIRST_CALL_TRANSACTION + 9);
    static final int TRANSACTION_generateWithImageStream = (android.os.IBinder.FIRST_CALL_TRANSACTION + 10);
    static final int TRANSACTION_generateWithImageBytesStream = (android.os.IBinder.FIRST_CALL_TRANSACTION + 11);
  }
  public static final java.lang.String DESCRIPTOR = "com.alibaba.mnnllm.android.ILlmService";
  // Model management
  public boolean loadModel(java.lang.String modelId, java.lang.String configPath, java.lang.String modelType) throws android.os.RemoteException;
  public boolean isReady(java.lang.String modelType) throws android.os.RemoteException;
  public void resetContext(java.lang.String modelType) throws android.os.RemoteException;
  public java.lang.String getLoadedTextModelId() throws android.os.RemoteException;
  public java.lang.String getLoadedVisionModelId() throws android.os.RemoteException;
  public boolean selectModel(java.lang.String modelId, java.lang.String modelType) throws android.os.RemoteException;
  // Returns JSON array of discovered model IDs, e.g. ["Qwen3.5-2B-MNN","Qwen3-1.7B-MNN"]
  public java.lang.String getAvailableModelIds() throws android.os.RemoteException;
  // System prompt (call after loadModel, before generation)
  public void setSystemPrompt(java.lang.String systemPrompt, java.lang.String modelType) throws android.os.RemoteException;
  // Text generation
  public java.lang.String generateSync(java.lang.String prompt, int maxTokens, float temperature) throws android.os.RemoteException;
  public void generateStream(java.lang.String prompt, int maxTokens, float temperature, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException;
  // Vision generation (image passed as file path to avoid AIDL marshaling limits)
  public void generateWithImageStream(java.lang.String prompt, java.lang.String imageFilePath, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException;
  // Vision generation (image passed as raw JPEG bytes - avoids cross-process file access issues)
  public void generateWithImageBytesStream(java.lang.String prompt, byte[] imageBytes, int maxTokens, com.alibaba.mnnllm.android.ILlmCallback callback) throws android.os.RemoteException;
}
