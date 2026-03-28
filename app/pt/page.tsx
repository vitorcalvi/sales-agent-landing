import type { Metadata } from 'next'
import { HomePageContent } from '../components/HomePageContent'
import { METADATA } from '@/lib/content'

const siteUrl = 'https://247sales.dyagnosys.com'

export const metadata: Metadata = {
  title: METADATA.pt.title,
  description: METADATA.pt.description,
  alternates: {
    canonical: `${siteUrl}/pt/`,
    languages: {
      en: `${siteUrl}/en/`,
      pt: `${siteUrl}/pt/`,
    },
  },
  openGraph: {
    title: METADATA.pt.ogTitle,
    description: METADATA.pt.ogDescription,
    url: `${siteUrl}/pt/`,
    siteName: '247 Sales Agent',
    locale: METADATA.pt.locale,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/og/`,
        width: 1200,
        height: 630,
        alt: '247 Sales Agent - Plataforma de Automação de WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.pt.ogTitle,
    description: METADATA.pt.ogDescription,
    images: [`${siteUrl}/api/og/`],
  },
}

export default function HomePage() {
  return <HomePageContent locale="pt" />
}
