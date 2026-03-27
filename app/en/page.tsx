import type { Metadata } from 'next'
import { HomePageContent } from '../components/HomePageContent'
import { METADATA } from '@/lib/content'

export const metadata: Metadata = {
  title: METADATA.en.title,
  description: METADATA.en.description,
  alternates: {
    canonical: 'https://247sales.dyagnosys.com/en',
    languages: {
      en: 'https://247sales.dyagnosys.com/en',
      pt: 'https://247sales.dyagnosys.com/pt',
    },
  },
  openGraph: {
    title: METADATA.en.ogTitle,
    description: METADATA.en.ogDescription,
    url: 'https://247sales.dyagnosys.com/en',
    siteName: '247 Sales Agent',
    locale: METADATA.en.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '247 Sales Agent',
    description: METADATA.en.ogDescription,
  },
}

export default function HomePage() {
  return <HomePageContent locale="en" />
}
