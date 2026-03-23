export default function TermsPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>

        <div className="glass-card prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            Last updated: March 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            By downloading and using the Sales Agent application ("App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. License and Use</h2>
          <p className="text-gray-300 mb-4">
            Sales Agent grants you a limited, non-exclusive, non-transferable license to use the App for your internal business purposes, subject to these Terms. You may not:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Rent, lease, loan, or resell the App</li>
            <li>Copy or modify the App except as permitted by law</li>
            <li>Use the App for any unlawful purpose</li>
            <li>Violate WhatsApp's Terms of Service</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Subscription and Payments</h2>
          <p className="text-gray-300 mb-4">
            Sales Agent requires an active subscription. Payment terms are governed by Stripe's terms. All purchases are final unless otherwise required by law. Subscriptions auto-renew unless cancelled.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. WhatsApp Compliance</h2>
          <p className="text-gray-300 mb-4">
            The App uses Android Accessibility Services to interact with WhatsApp. You are responsible for ensuring your use of the App complies with WhatsApp's Terms of Service. We are not affiliated with WhatsApp or Meta.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. Disclaimer of Warranties</h2>
          <p className="text-gray-300 mb-4">
            THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. Termination</h2>
          <p className="text-gray-300 mb-4">
            We may terminate or suspend your access to the App at any time for violation of these Terms. Upon termination, you must cease all use of the App and delete all copies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. Changes to Terms</h2>
          <p className="text-gray-300 mb-4">
            We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. Governing Law</h2>
          <p className="text-gray-300 mb-4">
            These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-white">10. Contact</h2>
          <p className="text-gray-300 mb-4">
            Questions about these Terms? Contact us at:
          </p>
          <p className="text-gray-300">
            Email: <a href="mailto:support@mindsense.ai" className="text-primary">support@mindsense.ai</a>
          </p>
        </div>
      </div>
    </div>
  )
}
