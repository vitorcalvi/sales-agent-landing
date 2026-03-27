'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  return (
    <nav className="navbar-glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-heading font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded flex items-center justify-center text-dark-bg text-sm">247</span>
          <span className="gradient-text">Sales Agent</span>
        </Link>
        <div className="flex items-center gap-6">
          <LangSwitcher />
        </div>
      </div>
    </nav>
  )
}

function LangSwitcher() {
  const pathname = usePathname()
  
  return (
    <div className="lang-switcher">
      <Link
        href="/en"
        className={`lang-btn ${pathname?.includes('/en') ? 'active' : ''}`}
      >
        EN
      </Link>
      <Link
        href="/pt"
        className={`lang-btn ${pathname?.includes('/pt') ? 'active' : ''}`}
      >
        PT
      </Link>
    </div>
  )
}
