import { NextRequest } from 'next/server'

const VITOR_URL = process.env.VITOR_COS_URL ?? 'http://localhost:8080'
const VITOR_KEY = process.env.VITOR_COS_KEY ?? ''

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const message = body?.message

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  if (message.length > 2000) {
    return new Response(JSON.stringify({ error: 'message too long' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const upstream = await fetch(`${VITOR_URL}/chat/stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': VITOR_KEY,
      },
      body: JSON.stringify({ content: message.trim(), channel: 'web' }),
    })

    if (!upstream.ok || !upstream.body) {
      return new Response(JSON.stringify({ error: 'upstream unavailable' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(upstream.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
