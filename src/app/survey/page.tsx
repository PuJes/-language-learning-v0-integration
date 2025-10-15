import type { Metadata } from 'next'
import LanguageSurveyPage from '../../../v0-components/LanguageSurveyPage'
import { createSeoMetadata } from '@/lib/seo'

const path = '/survey'
const languageAlternates = {
  zh: `${path}?lang=zh`,
}

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title: 'Language Learning Survey',
    description:
      'Answer a quick set of questions about your goals, motivations, and time commitment so we can recommend the most fitting language and study plan.',
    path,
    locale: 'en',
    keywords: [
      'language learning survey',
      'Wordora assessment',
      'language recommendation quiz',
      'language placement survey',
    ],
    robots: {
      index: false,
      follow: false,
    },
    languageAlternates,
  })
}

export default function SurveyRoute() {
  return <LanguageSurveyPage />
}
