import type { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const brandColors = {
  primary: '#91FFB0',
  darkBg: '#0C0E12',
  surface: '#111318',
  border: 'rgba(255, 255, 255, 0.08)',
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || '247 Sales Agent'
  const description = searchParams.get('description') || 'High-Performance WhatsApp Outreach'

  const response = new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: brandColors.darkBg,
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Border glow effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `2px solid ${brandColors.primary}`,
            borderRadius: '16px',
            opacity: 0.3,
          }}
        />

        {/* Logo Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: brandColors.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: brandColors.darkBg,
                fontFamily: 'Inter',
              }}
            >
              247
            </span>
          </div>
          <span
            style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Inter',
              letterSpacing: '-0.02em',
            }}
          >
            Sales Agent
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? '52px' : '64px',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Inter',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            {title.length > 100 ? `${title.slice(0, 97)}...` : title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '28px',
              color: brandColors.primary,
              fontFamily: 'Inter',
              margin: 0,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            {description.length > 150 ? `${description.slice(0, 147)}...` : description}
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `1px solid ${brandColors.border}`,
            paddingTop: '32px',
            marginTop: '48px',
          }}
        >
          <span
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              fontFamily: 'Inter',
            }}
          >
            247.dyagnosys.com
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: brandColors.primary,
              }}
            />
            <span
              style={{
                fontSize: '22px',
                color: '#9ca3af',
                fontFamily: 'Inter',
              }}
            >
              WhatsApp Automation
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )

  response.headers.set('Content-Type', 'image/png')
  response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=3600')
  response.headers.set('CDN-Cache-Control', 'public, max-age=3600')

  return response
}
