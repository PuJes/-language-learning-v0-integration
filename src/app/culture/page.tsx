import type { Metadata } from 'next'
import CulturePageClient from './culture-page-client'

export const metadata: Metadata = {
  title: 'Cultural Insights and Spotlight Stories',
  description: 'Dive into curated cultural articles aligned with each language to deepen your understanding before you learn.',
}

export default function CulturePage() {
  return <CulturePageClient />
}
