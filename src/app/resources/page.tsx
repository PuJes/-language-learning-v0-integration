import type { Metadata } from 'next'
import { learningResources } from '@/lib/data/learning-resources'
import { ResourcePageClient } from './resource-page-client'

export const metadata: Metadata = {
  title: 'Learning Resources & Tools | Wordora',
  description: 'Discover curated language learning apps, courses, communities, and tools with bilingual highlights and user insights.',
}

export default function ResourcesPage() {
  return <ResourcePageClient resources={learningResources} />
}
