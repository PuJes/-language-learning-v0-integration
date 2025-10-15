import CulturePageClient from './culture-page-client'
import type { Metadata } from 'next'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Cultural Insights and Spotlight Stories'
const description =
  'Dive into curated cultural articles aligned with each language to deepen your understanding before you learn.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/culture',
    locale: 'en',
    keywords: [
      'language culture',
      'cultural insights',
      'language learning culture',
      'Wordora cultural stories',
    ],
    languageAlternates: {
      zh: '/culture?lang=zh',
    },
  })
}

export default function CulturePage() {
  return <CulturePageClient />
}
