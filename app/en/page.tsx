export default function HomePage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section py-32 md:py-48 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="badge animate-fade-in">Enterprise-Grade Android Ecosystem</div>
          <h1 className="text-6xl md:text-8xl font-heading mb-8 tracking-tighter leading-tight gradient-text">
            247 Sales Agent — <br className="hidden md:block" />
            High-Performance <br className="hidden md:block" />
            WhatsApp Outreach
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 font-sans leading-relaxed">
            An enterprise-grade Android ecosystem engineered to automate and scale high-touch sales conversations directly within WhatsApp and WhatsApp Business. 
            By combining <strong>deterministic UI automation</strong> with <strong>real-time accessibility parsing</strong>, it provides a reliable, high-conversion outreach engine that operates natively on your device.
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
            v1.0.8 • 247sales.dyagnosys.com • Secure Distribution
          </p>
        </div>
      </section>

      {/* Business Core: Why 247 Sales Agent? */}
      <section className="border-y border-dark-border py-24 bg-dark-surface-low/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Business Core: Why 247 Sales Agent?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Solving the "Outreach Paradox": how to send hundreds of messages daily without sacrificing personalization or risking account bans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Pillar 
              title="Native Deliverability" 
              desc="Unlike API-based solutions, we send from your personal or business account. This results in significantly higher open rates and authentic engagement."
            />
            <Pillar 
              title="Deterministic Logic" 
              desc="Replace the 'hallucination' risk of AI with a proven 6-stage sales pipeline. The agent ensures every lead receives the full sequence of hook, solution, and offer."
            />
            <Pillar 
              title="Cost Efficiency" 
              desc="Eliminate the per-message cost of the WhatsApp Business API. Once installed, you can scale your outreach with zero marginal cost."
            />
            <Pillar 
              title="Account Safety First" 
              desc="Includes 'Human-Mimicry': randomized delays (2-5s), home-screen resets between contacts, and natural typing simulation."
            />
          </div>
        </div>
      </section>

      {/* App Interface Showcase */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Enterprise Interface</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Designed for high-volume operations with a native Android experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
             {/* UI1 Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-dark-border rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl">
                 <img src="/UI1.png" alt="Dashboard" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Command Center</span>
                 </div>
              </div>
              <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Command Center</h3>
                 <p className="text-sm text-gray-400">Real-time stats & controls</p>
              </div>
            </div>

            {/* UI3 Screen (Main) */}
            <div className="relative group md:-mt-16">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-primary/30 rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl transform scale-105 z-10">
                 <img src="/UI3.png" alt="Sales Pipeline" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Sales Pipeline</span>
                 </div>
              </div>
               <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Script Engine</h3>
                 <p className="text-sm text-gray-400">Deterministic sales logic</p>
              </div>
            </div>

            {/* UI2 Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-dark-border rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl">
                 <img src="/UI2.png" alt="Execution" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Active Execution</span>
                 </div>
              </div>
               <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Execution Radar</h3>
                 <p className="text-sm text-gray-400">Live process monitoring</p>
              </div>
            </div>

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
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Extraction</div>
                <div className="text-xl font-heading text-center">Engine</div>
              </div>
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Crash</div>
                <div className="text-xl font-heading text-center">Resilience</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Group & Contact Extraction"
              body="Group Scraper captures unique member names. Home List Extraction scans conversations for follow-ups. Smart Filtering ignores admins and non-contacts."
              icon="🔍"
            />
            <FeatureCard
              title="VSL & Rich Media Previews"
              body="Uses built-in Jsoup to scrape CTA/VSL metadata. The automation waits for WhatsApp to generate rich previews before tapping send."
              icon="📹"
            />
            <FeatureCard
              title="Campaign Persistence"
              body="Batch Store persists lead status (SUCCESS, FAILED). Crash Resilience ensures campaigns resume exactly where they left off if interrupted."
              icon="🛡️"
            />
            <FeatureCard
              title="AI Script Generation"
              body="Leverages WhatsApp's native Meta AI to transform raw data into 3-message sequences following proven persuasion psychology."
              icon="🧠"
            />
            <FeatureCard
              title="Real-Time VSL Preview"
              body="View the entire message flow in a WhatsApp-native interface. Automatically optimizes link previews for maximum CTR."
              icon="👁️"
            />
            <FeatureCard
              title="Progress Dashboard"
              body="Real-time 'Radar' UI shows the current contact, total progress, and success/failure statistics for live campaign monitoring."
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

          <div className="overflow-x-auto mb-20">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Mode</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Use Case</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Single Send</td>
                  <td className="py-6 px-6 text-gray-400">High-value, custom leads.</td>
                  <td className="py-6 px-6 text-white">100% conversion focus on key accounts.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Batch Mode <span className="text-xs text-primary ml-2 font-mono uppercase tracking-tighter">(Premium)</span></td>
                  <td className="py-6 px-6 text-gray-400">Cold outreach to group members.</td>
                  <td className="py-6 px-6 text-white">Rapid list building and mass awareness.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">List Mode <span className="text-xs text-primary ml-2 font-mono uppercase tracking-tighter">(Premium)</span></td>
                  <td className="py-6 px-6 text-gray-400">Re-engaging custom imported lists.</td>
                  <td className="py-6 px-6 text-white">High-ROI follow-up campaigns.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Broadcast</td>
                  <td className="py-6 px-6 text-gray-400">Wide-net announcements.</td>
                  <td className="py-6 px-6 text-white">Instant notification to your entire network.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free vs Premium Section */}
      <section className="section bg-dark-surface-low/30 border-y border-dark-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Choose Your Scale</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Start with our generous free tier or unlock the full power with Premium.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Feature</th>
                  <th className="py-4 px-6 font-heading text-gray-400 uppercase text-sm tracking-widest">Free Tier</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest bg-primary/5">Premium Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Daily Contacts</td>
                  <td className="py-6 px-6 text-gray-400 font-mono">10 contacts/day</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Unlimited</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Daily Messages</td>
                  <td className="py-6 px-6 text-gray-400 font-mono">40 messages/day</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Unlimited</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Sales Pipeline</td>
                  <td className="py-6 px-6 text-gray-400">3 Basic Stages</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Full 6-Stage Engine</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">AI Scripting</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Locked</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Full Access</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">VSL Previews</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Locked</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Full Access</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Batch Scaling</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Locked</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Full Access</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Branding</td>
                  <td className="py-6 px-6 text-gray-400">Standard CTA</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">Professional CTA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">Experience it first</p>
            <div className="inline-block px-8 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-heading text-xl">
              7-Day Free Trial Included
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section border-t border-dark-border bg-dark-surface-low/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">The Technical Stack</h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Built for Reliability & Scale</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechItem 
              label="Android" 
              value="Kotlin, Jetpack Compose, Coroutines (Flow/StateFlow), Accessibility Service API" 
            />
            <TechItem 
              label="Automation" 
              value="WhatsAppAutomator (Deterministic Node-ID & Text-based interaction)" 
            />
            <TechItem 
              label="Security" 
              value="EncryptedSharedPreferences, HMAC-SHA256 Signed License Validation" 
            />
            <TechItem 
              label="Backend" 
              value="Next.js (TypeScript), PostgreSQL (Supabase), Stripe & Play Store Billing" 
            />
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-12 border-t border-dark-border text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest bg-dark-bg">
        <div className="container mx-auto">
          Proprietary Software. Developed and Maintained by Mindsense Products. All rights reserved. Unauthorized redistribution or reverse engineering is strictly prohibited.
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-surface-low to-dark-bg p-12 md:p-24 rounded-[3rem] border border-dark-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="text-5xl md:text-7xl mb-8 font-heading tracking-tighter leading-tight">Scale Your Outreach Today</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
              Download the 247 Sales Agent ecosystem. <br />
              Native deliverability. Zero per-message cost. Proven conversion.
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
      <div className="text-md font-heading text-white leading-relaxed">{value}</div>
    </div>
  )
}
