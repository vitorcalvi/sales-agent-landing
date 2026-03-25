export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto max-w-4xl">
        <div className="badge">Updated March 2026</div>
        <h1 className="text-5xl md:text-6xl font-heading mb-12 tracking-tighter gradient-text">Terms of Service</h1>

        <div className="glass-card font-sans leading-relaxed">
          <p className="text-gray-400 mb-8 font-mono text-sm uppercase tracking-widest">
            Last updated: March 25, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-400 mb-4">
              By downloading and using the 247 Sales Agent application ("App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">2. License and Use</h2>
            <p className="text-gray-400 mb-4">
              Mindsense Products grants you a limited, non-exclusive, non-transferable license to use the App for your internal business purposes, subject to these Terms. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-4">
              <li>Reverse engineer, decompile, or disassemble the App.</li>
              <li>Rent, lease, loan, or resell the App.</li>
              <li>Copy or modify the App except as permitted by law.</li>
              <li>Use the App for any unlawful purpose.</li>
              <li>Violate WhatsApp's Terms of Service.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">3. Subscription and Payments</h2>
            <p className="text-gray-400 mb-4">
              247 Sales Agent requires an active subscription. Payment terms are governed by Stripe and Google Play Store's respective terms. All purchases are final unless otherwise required by law. Subscriptions auto-renew unless cancelled through the appropriate platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">4. WhatsApp Compliance</h2>
            <p className="text-gray-400 mb-4">
              The App uses Android Accessibility Services to interact with WhatsApp. You are solely responsible for ensuring your use of the App complies with WhatsApp's Terms of Service. We are not affiliated with, endorsed by, or in any way officially connected with WhatsApp or Meta Platforms, Inc.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">5. Disclaimer of Warranties</h2>
            <p className="text-gray-400 mb-4 font-mono text-sm bg-dark-bg p-6 rounded-lg border border-dark-border">
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">6. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO LOST PROFITS, DATA LOSS, ACCOUNT BANS, OR BUSINESS INTERRUPTION.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">7. Governing Law</h2>
            <p className="text-gray-400 mb-4">
              These Terms shall be governed by the laws of Brazil, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading mb-4 text-white">8. Contact</h2>
            <p className="text-gray-400 mb-4">
              Questions about these Terms? Contact us at:
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
