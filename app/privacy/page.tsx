export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto max-w-4xl">
        <div className="badge">Updated March 2026</div>
        <h1 className="text-5xl md:text-6xl font-heading mb-12 tracking-tighter gradient-text">Privacy Policy</h1>

        <div className="glass-card font-sans leading-relaxed">
          <p className="text-gray-400 mb-8 font-mono text-sm uppercase tracking-widest">
            Last updated: March 25, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-400 mb-4">
              Mindsense Products ("we", "our", or "us") operates the 247 Sales Agent application. This Privacy Policy explains how we collect, use, and protect your information when you use our Android application and associated services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">2. Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              247 Sales Agent operates primarily on your device and does not collect personal information through the app itself. However, we use third-party services that may collect data:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-4">
              <li><strong className="text-white">Google Sign-In:</strong> Used for authentication and account management.</li>
              <li><strong className="text-white">License Validation:</strong> We verify your subscription status through our backend service.</li>
              <li><strong className="text-white">Stripe & Google Play Billing:</strong> For payment processing and subscription management.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">3. How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-4">
              <li>Authenticating your access to the application.</li>
              <li>Validating your license subscription and trial status.</li>
              <li>Processing payments and managing active subscriptions.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">4. Data Storage and Security</h2>
            <p className="text-gray-400 mb-4">
              Your contact data, sales scripts, and pipeline state are stored <strong className="text-white">locally on your device</strong>. We do not access, transmit, or store this data on our servers. All communications with our backend services (licensing and auth) use industry-standard HTTPS encryption.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">5. Accessibility Services</h2>
            <p className="text-gray-400 mb-4">
              247 Sales Agent uses Android Accessibility Services to automate interactions with the WhatsApp UI. This service is used exclusively to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-4">
              <li>Identify chat interface elements.</li>
              <li>Input text into message fields.</li>
              <li>Click navigation buttons within WhatsApp.</li>
            </ul>
            <p className="text-gray-400">
              We <strong className="text-white">never</strong> collect, store, or transmit any data captured through the Accessibility Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">6. Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-400">
              Email: <a href="mailto:support@mindsense.ai" className="text-primary hover:underline">support@mindsense.ai</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
