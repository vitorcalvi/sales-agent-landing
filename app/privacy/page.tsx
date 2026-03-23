export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>

        <div className="glass-card prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            Last updated: March 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Introduction</h2>
          <p className="text-gray-300 mb-4">
            MindSense ("we", "our", or "us") operates the Sales Agent application. This Privacy Policy explains how we collect, use, and protect your information when you use our Android application.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Information We Collect</h2>
          <p className="text-gray-300 mb-4">
            Sales Agent operates primarily on your device and does not collect personal information through the app itself. However, we use third-party services that may collect data:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Google Sign-In for authentication</li>
            <li>License validation through our backend service</li>
            <li>Stripe for payment processing and subscription management</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the collected information for:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Authenticating your access to the application</li>
            <li>Validating your license subscription</li>
            <li>Processing payments and managing subscriptions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Data Storage and Security</h2>
          <p className="text-gray-300 mb-4">
            Your contact data and pipeline state are stored locally on your device using Android's SharedPreferences. We do not access or store this data on our servers. All communications with our backend services use HTTPS encryption.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Third-Party Services</h2>
          <p className="text-gray-300 mb-4">
            Our app integrates with the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Google (for authentication)</li>
            <li>Stripe (for payments)</li>
            <li>Vercel (for hosting our license validation endpoint)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Your Rights</h2>
          <p className="text-gray-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Access any personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:support@mindsense.ai" className="text-primary">support@mindsense.ai</a>
          </p>
        </div>
      </div>
    </div>
  )
}
