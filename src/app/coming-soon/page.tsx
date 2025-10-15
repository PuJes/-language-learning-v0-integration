import type { Metadata } from 'next'
import ComingSoonPageClient from './coming-soon-page-client'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Upcoming Features Preview'
const description =
  'See what Wordora is building next and return to today’s language recommendations while we craft new experiences.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/coming-soon',
    locale: 'en',
    keywords: ['Wordora roadmap', 'upcoming language features', 'language app updates'],
    languageAlternates: {
      zh: '/coming-soon?lang=zh',
    },
  })
}

export default function ComingSoonPage() {
  return <ComingSoonPageClient />
}
