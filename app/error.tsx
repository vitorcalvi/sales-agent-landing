'use client'

import Link from 'next/link'
import { useEffect } from 'react'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Unexpected application error:', error)
  }, [error])

  return (
    <div className="pt-32 pb-24 min-h-[70vh]">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="badge">Unexpected error</div>
        <h1 className="text-5xl md:text-6xl font-heading mb-6 tracking-tighter gradient-text">
          Something went wrong
        </h1>
        <p className="text-gray-400 text-lg mb-10 font-sans leading-relaxed">
          We could not load this page right now. You can try again or return to the home page.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="btn-primary cursor-pointer"
          >
            Try again
          </button>
          <Link href="/pt" className="btn-secondary">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  )
}
