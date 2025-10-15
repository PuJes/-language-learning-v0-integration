import type { Metadata } from 'next'
import HomePageClient from './home-page-client'
import { createSeoMetadata } from '@/lib/seo'

const title = 'Discover Your Ideal Language Learning Path'
const description =
  'Explore personalized language recommendations, cultural insights, and tailored study methods powered by Wordora.'

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title,
    description,
    path: '/',
    keywords: [
      'language learning platform',
      'AI language recommendations',
      'Wordora language app',
      'personalized study plan',
    ],
    languageAlternates: {
      zh: '/?lang=zh',
    },
  })
}

export default function HomePage() {
  return <HomePageClient />
}
