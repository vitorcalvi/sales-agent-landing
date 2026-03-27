import type { Metadata } from 'next'
import { HomePageContent } from '../components/HomePageContent'
import { METADATA } from '@/lib/content'

export const metadata: Metadata = {
  title: METADATA.pt.title,
  description: METADATA.pt.description,
  alternates: {
    canonical: 'https://247sales.dyagnosys.com/pt',
    languages: {
      en: 'https://247sales.dyagnosys.com/en',
      pt: 'https://247sales.dyagnosys.com/pt',
    },
  },
  openGraph: {
    title: METADATA.pt.ogTitle,
    description: METADATA.pt.ogDescription,
    url: 'https://247sales.dyagnosys.com/pt',
    siteName: '247 Sales Agent',
    locale: METADATA.pt.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '247 Sales Agent',
    description: METADATA.pt.ogDescription,
  },
}

export default function HomePage() {
  return <HomePageContent locale="pt" />
}
