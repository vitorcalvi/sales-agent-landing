export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Automate Your WhatsApp Sales Pipeline
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Send the right message to every lead at every stage — automatically.
            <br className="hidden md:block" />
            Pre-written sales scripts delivered through WhatsApp via Android automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary"
              download
            >
              Download APK
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-b from-transparent to-dark-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose Sales Agent?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Built for sales teams that want to scale WhatsApp outreach without sacrificing control.
          </p>

          <div className="features-grid">
            <FeatureCard
              title="Accessibility-Powered"
              body="Uses Android Accessibility Services to navigate WhatsApp, find contacts, and send messages — no WhatsApp API or business account required."
            />
            <FeatureCard
              title="6-Stage Pipeline"
              body="Every lead progresses through NEW → ENGAGED → QUALIFIED → PRESENTING → OBJECTION → CLOSING with a dedicated message template at each stage."
            />
            <FeatureCard
              title="Human-in-the-Loop"
              body="Review and approve each message before it sends. Full control over what goes out — automation handles the navigation, you control the content."
            />
            <FeatureCard
              title="Pipeline Tracking"
              body="Contact stage is saved on-device. Pick up any conversation where you left off, across sessions and app restarts."
            />
            <FeatureCard
              title="No WhatsApp Business Needed"
              body="Works with your personal WhatsApp. No API keys, no business account, no number restrictions — install the APK and you're ready."
            />
            <FeatureCard
              title="B2B Outreach Ready"
              body="Built for sales teams reaching HR professionals, decision-makers, and warm leads over WhatsApp at scale."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Three simple steps to automate your WhatsApp sales outreach.
          </p>

          <div className="max-w-3xl mx-auto">
            <StepCard
              number={1}
              title="Install & Setup"
              description="Download the APK, enable the Accessibility Service in Android Settings, and sign in with your Google account."
            />
            <StepCard
              number={2}
              title="Add Your Contacts"
              description="Enter the WhatsApp display names of your leads. The agent finds them automatically in your contact list."
            />
            <StepCard
              number={3}
              title="Run the Pipeline"
              description="The agent opens each chat, pastes the stage-appropriate message, and waits for your approval before sending."
            />
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Ready to Scale Your WhatsApp Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download the APK directly. No Play Store required.
              <br />
              Requires Android 9+ and WhatsApp installed.
            </p>
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary text-lg"
              download
            >
              Download APK
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass-card">
      <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-gray-300">{body}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
