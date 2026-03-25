import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '247 Sales Agent — High-Performance WhatsApp Outreach',
  description: 'Enterprise-grade Android ecosystem to automate and scale high-touch sales conversations directly within WhatsApp. Native deliverability, deterministic logic, and account safety first.',
  openGraph: {
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description: 'Automate and scale WhatsApp sales conversations with deterministic workflow automation and accessibility-driven UI control.',
    url: 'https://247sales.dyagnosys.com',
    siteName: '247 Sales Agent',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description: 'Enterprise-grade Android ecosystem to automate and scale high-touch sales conversations directly within WhatsApp.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#91FFB0',
                      dark: {
                        bg: '#0C0E12',
                        surface: {
                          low: '#111318',
                          high: '#1D2025',
                        },
                        border: 'rgba(255, 255, 255, 0.08)',
                      }
                    },
                    fontFamily: {
                      sans: ['Inter', 'sans-serif'],
                      heading: ['Space Grotesk', 'sans-serif'],
                      mono: ['DM Mono', 'monospace'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-dark-bg text-white selection:bg-primary selection:text-dark-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded flex items-center justify-center text-dark-bg text-sm">247</span>
          <span className="gradient-text">Sales Agent</span>
        </a>
        <div className="flex items-center gap-6">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  )
}

function LangSwitcher() {
  return (
    <div className="lang-switcher">
      <a href="/en" className="lang-btn">
        EN
      </a>
      <a href="/pt" className="lang-btn">
        PT
      </a>
    </div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <div className="mb-8">
           <a href="/" className="text-xl font-heading font-bold tracking-tighter flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-6 bg-primary rounded flex items-center justify-center text-dark-bg text-xs">247</span>
            <span>Sales Agent</span>
          </a>
          <p className="text-gray-500 text-sm font-mono">
            Deterministic WhatsApp Automation
          </p>
        </div>
        
        <div className="footer-links mb-8">
          <a href="https://github.com/vitorcalvi/sales-agent-releases" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:support@mindsense.ai">
            Contact
          </a>
          <a href="/privacy">
            Privacy
          </a>
          <a href="/terms">
            Terms
          </a>
        </div>

        <p className="text-gray-600 text-xs uppercase tracking-widest">
          &copy; {currentYear} Mindsense Products. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
