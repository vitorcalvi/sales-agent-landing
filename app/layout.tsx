import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sales Agent - WhatsApp Automation',
  description: 'Automate your WhatsApp sales pipeline with Android Accessibility Services. Pre-written templates, human-in-the-loop approval, 6-stage pipeline.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#00ff88',
                      dark: {
                        bg: '#0C0E12',
                        card: 'rgba(20, 24, 30, 0.8)',
                        border: 'rgba(255, 255, 255, 0.1)',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-dark-bg">
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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold gradient-text">
          SalesAgent
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
      <a href="/en" className="lang-btn active">
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
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">
          &copy; {currentYear} MindSense. All rights reserved.
        </p>
        <div className="footer-links">
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
      </div>
    </footer>
  )
}
