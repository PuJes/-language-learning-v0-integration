import type { Metadata } from 'next'
import LanguageRecommendationPage from '../../../v0-components/LanguageRecommendationPage'
import { createSeoMetadata } from '@/lib/seo'

const path = '/recommendation'
const languageAlternates = {
  zh: `${path}?lang=zh`,
}

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title: 'Personalized Language Recommendations',
    description:
      'Review tailored language suggestions based on your completed learning survey. Each recommendation highlights cultural insights, difficulty, and next steps to keep your momentum going.',
    path,
    locale: 'en',
    keywords: [
      'language recommendations',
      'Wordora survey results',
      'personalized language matches',
      'language learning plan',
    ],
    robots: {
      index: false,
      follow: false,
    },
    languageAlternates,
  })
}

export default function RecommendationRoute() {
  return <LanguageRecommendationPage />
}
