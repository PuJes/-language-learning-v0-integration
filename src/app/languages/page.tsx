import type { Metadata } from 'next'
import LanguageListPageClient from './language-list-page-client'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Language Library and Smart Filters'
const description =
  'Browse every language supported by Wordora and refine by region, difficulty, and learning focus to start your journey.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/languages',
    locale: 'en',
    keywords: [
      'language directory',
      'language filters',
      'Wordora language list',
      'language learning explorer',
    ],
    languageAlternates: {
      zh: '/languages?lang=zh',
    },
  })
}

export default function LanguageListPage() {
  return <LanguageListPageClient />
}
