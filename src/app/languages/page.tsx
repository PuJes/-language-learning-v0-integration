import type { Metadata } from 'next'
import LanguageListPageClient from './language-list-page-client'

export const metadata: Metadata = {
  title: 'Language Library and Smart Filters',
  description: 'Browse every language supported by Wordora and refine by region, difficulty, and learning focus to start your journey.',
}

export default function LanguageListPage() {
  return <LanguageListPageClient />
}
