import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LanguageDetailPageClient from './LanguageDetailPageClient'
import { languages } from '@/lib/data/languages'

type LanguageParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: LanguageParams): Promise<Metadata> {
  const language = languages.find(lang => lang.id === params.id)

  if (!language) {
    return {
      title: 'Language Not Found',
      description: 'The language you are looking for is not available on Wordora yet.',
    }
  }

  const englishName = language.nameEn ?? language.name
  const description = language.description?.en ?? 'Explore language insights, culture, and learning tips with Wordora.'

  return {
    title: `${englishName} Language Guide`,
    description,
  }
}

export default function LanguageDetailPage({ params }: LanguageParams) {
  const languageExists = languages.some(lang => lang.id === params.id)

  if (!languageExists) {
    notFound()
  }

  return <LanguageDetailPageClient languageId={params.id} />
}
