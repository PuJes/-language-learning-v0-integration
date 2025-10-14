import type { Metadata } from 'next'
import ComingSoonPageClient from './coming-soon-page-client'

export const metadata: Metadata = {
  title: 'Upcoming Features Preview',
  description: 'See what Wordora is building next and return to today’s language recommendations while we craft new experiences.',
}

export default function ComingSoonPage() {
  return <ComingSoonPageClient />
}
