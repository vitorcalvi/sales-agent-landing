import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import './globals.css'
import { Navbar } from './components/Navbar'
import { JsonLd } from './components/JsonLd'
import { SkipLink } from './components/SkipLink'

const siteUrl = 'https://247sales.dyagnosys.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0C0E12',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '247 Sales Agent — High-Performance WhatsApp Outreach',
  description:
    'Enterprise-grade Android ecosystem to automate and scale high-touch sales conversations directly within WhatsApp. Native deliverability, deterministic logic, and account safety first.',
  openGraph: {
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description:
      'Automate and scale WhatsApp sales conversations with deterministic workflow automation.',
    url: siteUrl,
    siteName: '247 Sales Agent',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: '247 Sales Agent - WhatsApp Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description:
      'Automate and scale WhatsApp sales conversations with deterministic workflow automation.',
    images: ['/api/og'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-dark-bg text-white selection:bg-primary selection:text-dark-bg">
        <JsonLd />
        <SkipLink />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <div className="mb-8 flex flex-col items-center">
          <Link
            href="/"
            className="text-xl font-heading font-bold tracking-tighter flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-6 h-6 bg-primary rounded flex items-center justify-center text-dark-bg text-xs">
              247
            </span>
            <span>Sales Agent</span>
          </Link>
          <p className="text-gray-500 text-sm font-mono">Deterministic WhatsApp Automation</p>
        </div>

        <div className="footer-links mb-8">
          <a
            href="https://github.com/vitorcalvi/sales-agent-releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:contact@dyagnosys.com">Contact</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>

        <p className="text-gray-600 text-xs uppercase tracking-widest text-center">
          &copy; {currentYear} Mindsense Products. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
