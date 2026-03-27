import Image from 'next/image'
import PricingTable from './PricingTable'
import { CONTENT, type Locale } from '@/lib/content'

interface HomePageContentProps {
  locale: Locale
}

export function HomePageContent({ locale }: HomePageContentProps) {
  const t = CONTENT[locale] as typeof CONTENT.en

  return (
    <div className="pt-24 overflow-x-hidden">
      <HeroSection t={t} />
      <BusinessCoreSection t={t} />
      <InterfaceSection t={t} />
      <FeaturesSection t={t} />
      <ModesSection t={t} />
      <PricingSection t={t} locale={locale} />
      <SecuritySection t={t} />
      <LicenseSection t={t} />
      <CtaSection t={t} />
    </div>
  )
}

function HeroSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="section py-32 md:py-48 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
      <div className="container mx-auto text-center relative z-10">
        <div className="badge animate-fade-in">{t.hero.badge}</div>
        <h1 className="text-6xl md:text-8xl font-heading mb-8 tracking-tighter leading-tight gradient-text">
          {t.hero.title} <br className="hidden md:block" />
          {t.hero.titleLine2} <br className="hidden md:block" />
          {t.hero.titleLine3}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 font-sans leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
            className="btn-primary"
            download
          >
            {t.hero.downloadApk}
          </a>
          <a href="#modes" className="btn-secondary">
            {t.hero.operatingModes}
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-6 font-mono uppercase tracking-widest">
          {t.hero.version}
        </p>
      </div>
    </section>
  )
}

function BusinessCoreSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="border-y border-dark-border py-24 bg-dark-surface-low/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">
            {t.businessCore.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            {t.businessCore.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.businessCore.pillars.map((pillar) => (
            <Pillar key={pillar.title} title={pillar.title} desc={pillar.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InterfaceSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">
            {t.interface.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            {t.interface.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
          {t.interface.screens.map((screen) => (
            <ScreenCard
              key={screen.image}
              screen={screen}
              isMain={'isMain' in screen ? screen.isMain : false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="section bg-dark-surface-low/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl mb-4 font-heading">{t.features.title}</h2>
            <p className="text-gray-400 text-lg">{t.features.subtitle}</p>
          </div>
          <div className="flex gap-4">
            {t.features.badges.map((badge) => (
              <div
                key={badge.label}
                className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block"
              >
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">
                  {badge.label}
                </div>
                <div className="text-xl font-heading text-center">{badge.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="features-grid">
          {t.features.items.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              body={feature.body}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModesSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section id="modes" className="section relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">{t.modes.title}</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">{t.modes.subtitle}</p>
        </div>
        <div className="overflow-x-auto mb-20">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">
                  {t.modes.headers.mode}
                </th>
                <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">
                  {t.modes.headers.useCase}
                </th>
                <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">
                  {t.modes.headers.impact}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.modes.items.map(
                (mode: { mode: string; useCase: string; impact: string; premium?: boolean }) => (
                  <tr
                    key={mode.mode}
                    className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors"
                  >
                    <td className="py-6 px-6 font-heading text-xl">
                      {mode.mode}
                      {mode.premium && (
                        <span className="text-xs text-primary ml-2 font-mono uppercase tracking-tighter">
                          (Premium)
                        </span>
                      )}
                    </td>
                    <td className="py-6 px-6 text-gray-400">{mode.useCase}</td>
                    <td className="py-6 px-6 text-white">{mode.impact}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function PricingSection({ t, locale }: { t: typeof CONTENT.en; locale: Locale }) {
  return (
    <PricingTable
      title={t.pricing.title}
      description={t.pricing.description}
      features={
        [...t.pricing.features] as Array<{
          name: string
          freeValue?: string
          premiumValue?: string
          isLocked?: boolean
          highlight?: boolean
        }>
      }
      monthlyPrice={t.pricing.monthlyPrice}
      yearlyPrice={t.pricing.yearlyPrice}
      trialDays={t.pricing.trialDays}
      locale={locale}
    />
  )
}

function SecuritySection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="section border-t border-dark-border bg-dark-surface-low/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">
            {t.security.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">{t.security.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.security.items.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-dark-bg border border-dark-border rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LicenseSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="py-12 border-t border-dark-border text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest bg-dark-bg">
      <div className="container mx-auto">{t.license}</div>
    </section>
  )
}

function CtaSection({ t }: { t: (typeof CONTENT)['en'] }) {
  return (
    <section className="section">
      <div className="container mx-auto text-center">
        <div className="bg-gradient-to-br from-dark-surface-low to-dark-bg p-12 md:p-24 rounded-[3rem] border border-dark-border relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
          <h2 className="text-5xl md:text-7xl mb-8 font-heading tracking-tighter leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary text-xl px-16 py-5"
              download
            >
              {t.cta.download}
            </a>
            <div className="text-gray-500 font-mono text-sm uppercase tracking-widest flex gap-8">
              <span key="badge-0">{t.cta.badges[0]}</span>
              <span key="badge-1">{t.cta.badges[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-left p-6 bg-dark-surface-low border border-dark-border rounded-2xl">
      <div className="text-primary font-mono text-xs uppercase tracking-widest mb-4">{title}</div>
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

function ScreenCard({ screen, isMain }: { screen: Record<string, unknown>; isMain?: boolean }) {
  return (
    <div className={`relative group ${isMain ? 'md:-mt-16' : ''}`}>
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
      <div
        className={`relative bg-dark-bg ${isMain ? 'border-primary/30' : 'border-dark-border'} border rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl ${isMain ? 'transform scale-105 z-10' : ''}`}
      >
        <Image
          src={screen.image as string}
          alt={screen.alt as string}
          width={1108}
          height={2264}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
          <span className="text-white font-heading text-xl">{screen.hoverText as string}</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <h3 className="text-xl font-heading text-white mb-2">{screen.title as string}</h3>
        <p className="text-sm text-gray-400">{screen.subtitle as string}</p>
      </div>
    </div>
  )
}
