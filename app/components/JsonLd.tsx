import Script from 'next/script'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '247 Sales Agent',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android',
  offers: {
    '@type': 'Offer',
    price: '9.99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
  description:
    'Enterprise-grade Android ecosystem for WhatsApp sales automation. Native deliverability, deterministic logic, zero per-message cost.',
  publisher: {
    '@type': 'Organization',
    name: 'Mindsense Products',
    url: 'https://247.dyagnosys.com',
  },
}

export function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      // Structured data requires dangerouslySetInnerHTML - standard pattern for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
