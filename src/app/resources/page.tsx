import type { Metadata } from 'next'
import { learningResources } from '@/lib/data/learning-resources'
import { ResourcePageClient } from './resource-page-client'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Learning Resources & Tools | Wordora'
const description =
  'Discover curated language learning apps, courses, communities, and tools with bilingual highlights and user insights.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/resources',
    locale: 'en',
    keywords: [
      'language learning resources',
      'language apps',
      'language tools',
      'Wordora resources',
    ],
    languageAlternates: {
      zh: '/resources?lang=zh',
    },
  })
}

export default function ResourcesPage() {
  return <ResourcePageClient resources={learningResources} />
}
