import type { Metadata } from 'next'
import { HomePageContent } from '../components/HomePageContent'
import { METADATA } from '@/lib/content'

const siteUrl = 'https://247.dyagnosys.com'

export const metadata: Metadata = {
  title: METADATA.en.title,
  description: METADATA.en.description,
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      en: `${siteUrl}/en`,
      pt: `${siteUrl}/pt`,
    },
  },
  openGraph: {
    title: METADATA.en.ogTitle,
    description: METADATA.en.ogDescription,
    url: `${siteUrl}/en`,
    siteName: '247 Sales Agent',
    locale: METADATA.en.locale,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/og/`,
        width: 1200,
        height: 630,
        alt: '247 Sales Agent - WhatsApp Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.en.ogTitle,
    description: METADATA.en.ogDescription,
    images: [`${siteUrl}/api/og/`],
  },
}

export default function HomePage() {
  return <HomePageContent locale="en" />
}
