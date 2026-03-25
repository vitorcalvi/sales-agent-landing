export default function HomePage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section py-32 md:py-48">
        <div className="container mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
          
          <div className="badge animate-fade-in">Enterprise-Grade Android Ecosystem</div>
          <h1 className="text-6xl md:text-8xl font-heading mb-8 tracking-tighter leading-tight gradient-text">
            High-Performance <br className="hidden md:block" />
            WhatsApp Outreach
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-sans">
            Automate and scale high-touch sales conversations directly within WhatsApp. <br className="hidden md:block" />
            Deterministic UI automation and real-time accessibility parsing for a native outreach engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary"
              download
            >
              Download Latest APK
            </a>
            <a href="#modes" className="btn-secondary">
              Operating Modes
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 font-mono uppercase tracking-widest">
            v1.0.8 • 247sales.dyagnosys.com • Secure
          </p>
        </div>
      </section>

      {/* Business Core: Why 247 Sales Agent? */}
      <section className="border-y border-dark-border py-24 bg-dark-surface-low/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Why 247 Sales Agent?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Built to solve the "Outreach Paradox": scale messages without sacrificing personalization or account health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Pillar 
              title="Native Deliverability" 
              desc="Sends from your personal or business account. Higher open rates and authentic engagement compared to API solutions."
            />
            <Pillar 
              title="Deterministic Logic" 
              desc="Proven 6-stage sales pipeline. You define the hook, solution, and CTA; the agent ensures lead sequence execution."
            />
            <Pillar 
              title="Cost Efficiency" 
              desc="Eliminate per-message costs of the WhatsApp Business API. Scale your outreach with zero marginal cost."
            />
            <Pillar 
              title="Account Safety" 
              desc="Human-mimicry features: randomized delays (2-5s), resets, and natural typing to stay below detection thresholds."
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive Features */}
      <section className="section bg-dark-surface-low/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl mb-4 font-heading">Deep-Dive Features</h2>
              <p className="text-gray-400 text-lg">
                Engineered for large-scale operations and high-conversion assets.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Scraper</div>
                <div className="text-xl font-heading text-center">Jsoup Engine</div>
              </div>
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">State</div>
                <div className="text-xl font-heading text-center">Persistence</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Intelligent Extraction"
              body="Group Scraper captures unique member names. Home List Extraction scans conversations for follow-ups. Smart Filtering ignores admins."
              icon="🔍"
            />
            <FeatureCard
              title="VSL & Rich Media Previews"
              body="Built-in scraping for metadata. Waits for thumbnails before sending. Automated fallback to plain-text on slow networks."
              icon="📹"
            />
            <FeatureCard
              title="Campaign Persistence"
              body="Batch Store persists lead status (SUCCESS, FAILED). Crash Resilience resumes campaigns exactly where they left off."
              icon="🛡️"
            />
            <FeatureCard
              title="Dynamic Personalization"
              body="Personalization Engine replaces {to} with lead names extracted from profiles. Template Vault for multiple sales scripts."
              icon="👤"
            />
            <FeatureCard
              title="Accessibility Monitor"
              body="Specialized background listener ensures the engine is 'ready to fire' with real-time visual alerts and Radar UI."
              icon="📡"
            />
            <FeatureCard
              title="Professional Utilities"
              body="Usage Guard monitors daily limits (e.g., 50/day) to protect account health and manage premium quotas."
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Operating Modes Section */}
      <section id="modes" className="section relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">Multi-Mode Execution</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Versatile operating modes designed to handle every sales scenario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ModeCard
              title="Single Send"
              tag="High-Value Accounts"
              body="100% conversion focus. Performs the full sequence immediately for key leads."
            />
            <ModeCard
              title="Batch Mode"
              tag="Cold Outreach"
              body="Rapid list building from WhatsApp groups. Sequentially pitch every member automatically."
            />
            <ModeCard
              title="List Mode"
              tag="Re-engagement"
              body="Import custom lists. High-ROI follow-up campaigns iterating through your own lead database."
            />
            <ModeCard
              title="Broadcast"
              tag="Wide Announcements"
              body="Instant notifications to your entire network. Automates sending to multiple contacts simultaneously."
            />
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section border-t border-dark-border bg-dark-surface-low/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">The Technical Stack</h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Built for Reliability & Security</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechItem label="Android" value="Kotlin / Compose" />
            <TechItem label="Automation" value="Accessibility API" />
            <TechItem label="Security" value="HMAC-SHA256" />
            <TechItem label="Backend" value="Next.js / Supabase" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-surface-low to-dark-bg p-12 md:p-24 rounded-[3rem] border border-dark-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="text-5xl md:text-7xl mb-8 font-heading tracking-tighter">Scale Your Outreach Today</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
              Download the 247 Sales Agent. <br />
              Deterministic automation. Zero-API friction. Authentic native delivery.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
                className="btn-primary text-xl px-16 py-5"
                download
              >
                Download Release APK
              </a>
              <div className="text-gray-500 font-mono text-sm uppercase tracking-widest flex gap-8">
                <span>Free Trial</span>
                <span>•</span>
                <span>Secure Licensing</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-gray-600 text-xs font-mono max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed">
            Proprietary Software. Developed and Maintained by Mindsense Products. All rights reserved. Unauthorized redistribution or reverse engineering is strictly prohibited.
          </div>
        </div>
      </section>
    </div>
  )
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-left p-6 bg-dark-surface-low border border-dark-border rounded-2xl">
      <div className="text-primary font-mono text-xs uppercase tracking-widest mb-4">// {title}</div>
      <h3 className="text-2xl font-heading mb-4 text-white">{title}</h3>
      <p className="text-gray-400 font-sans leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function ModeCard({ title, tag, body }: { title: string; tag: string; body: string }) {
  return (
    <div className="p-8 md:p-10 bg-dark-surface-low border border-dark-border rounded-2xl hover:border-primary/40 transition-all group">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-heading group-hover:text-primary transition-colors">{title}</h3>
        <span className="text-[10px] font-mono border border-primary/30 text-primary px-2 py-1 rounded uppercase tracking-tighter">
          {tag}
        </span>
      </div>
      <p className="text-gray-400 text-lg font-sans leading-relaxed">{body}</p>
    </div>
  )
}

function FeatureCard({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <div className="glass-card group hover:bg-dark-surface-high transition-colors">
      <div className="text-3xl mb-6">{icon}</div>
      <h3 className="text-2xl font-heading mb-4 text-white">{title}</h3>
      <p className="text-gray-400 font-sans leading-relaxed text-sm">{body}</p>
    </div>
  )
}

function TechItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-heading text-white">{value}</div>
    </div>
  )
}
