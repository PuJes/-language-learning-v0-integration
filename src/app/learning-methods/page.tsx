import type { Metadata } from 'next'
import LearningMethodsPageClient from './LearningMethodsPageClient'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Language Learning Methods Library'
const description =
  'Explore Wordora’s catalog of language learning methods, filter by difficulty, goal, or challenge, and discover strategies that fit your study style.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/learning-methods',
    locale: 'en',
    keywords: [
      'language learning methods',
      'study strategies',
      'learning challenges',
      'Wordora recommendations',
    ],
    languageAlternates: {
      zh: '/learning-methods?lang=zh',
    },
  })
}

export default function LearningMethodsPage() {
  return <LearningMethodsPageClient />
}
