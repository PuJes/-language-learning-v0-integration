import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LanguageDetailPageClient from './LanguageDetailPageClient'
import { languages } from '@/lib/data/languages'
import { getLocalizedLanguageById } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'

const DEFAULT_LOCALE: Locale = 'zh'

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
  const language = getLocalizedLanguageById(languages, params.id, DEFAULT_LOCALE)

  if (!language) {
    notFound()
  }

  return <LanguageDetailPageClient initialLanguage={language} languageId={params.id} />
}
