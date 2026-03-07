# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in the Android SDK tools.
# For more details, see
#   https://developer.android.com/build/shrink-code

# Keep AIDL generated classes
-keep class com.alibaba.mnnllm.android.** { *; }

# Keep Kotlin coroutines
-keepclassmembers class kotlinx.coroutines.** {
    volatile <fields>;
}
