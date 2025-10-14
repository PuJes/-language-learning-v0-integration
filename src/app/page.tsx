import type { Metadata } from 'next'
import HomePageClient from './home-page-client'

export const metadata: Metadata = {
  title: 'Discover Your Ideal Language Learning Path',
  description: 'Explore personalized language recommendations, cultural insights, and tailored study methods powered by Wordora.',
}

export default function HomePage() {
  return <HomePageClient />
}
