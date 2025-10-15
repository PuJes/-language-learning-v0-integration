import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LanguageDetailPageClient from './LanguageDetailPageClient'
import { languages } from '@/lib/data/languages'
import { getLocalizedLanguageById } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'
import { createSeoMetadata } from '@/lib/seo'

const DEFAULT_LOCALE: Locale = 'zh'

type LanguageParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: LanguageParams): Promise<Metadata> {
  const { id } = params
  const language = languages.find(lang => lang.id === id)

  if (!language) {
    return createSeoMetadata({
      title: 'Language Not Found',
      description: 'The language you are looking for is not available on Wordora yet.',
      path: `/languages/${id}`,
      locale: 'en',
      robots: {
        index: false,
        follow: false,
      },
    })
  }

  const englishName = language.nameEn ?? language.name
  const description =
    language.description?.en ?? 'Explore language insights, culture, and learning tips with Wordora.'

  const keywords = new Set<string>([
    englishName,
    language.nameZh ?? englishName,
    language.family?.en ?? '',
    ...(language.tags?.en ?? []),
    'language profile',
    'language learning tips',
    'Wordora language guide',
  ].filter(Boolean))

  return createSeoMetadata({
    title: `${englishName} Language Guide`,
    description,
    path: `/languages/${id}`,
    locale: 'en',
    type: 'article',
    keywords: Array.from(keywords),
    languageAlternates: {
      zh: `/languages/${id}?lang=zh`,
    },
  })
}

export default function LanguageDetailPage({ params }: LanguageParams) {
  const language = getLocalizedLanguageById(languages, params.id, DEFAULT_LOCALE)

  if (!language) {
    notFound()
  }

  const baseLanguage = languages.find(lang => lang.id === params.id)
  const englishName = baseLanguage?.nameEn ?? baseLanguage?.name ?? params.id
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Language',
    name: englishName,
    alternateName: [baseLanguage?.nameZh, baseLanguage?.nativeName].filter(Boolean),
    description:
      baseLanguage?.description?.en ?? baseLanguage?.description?.zh ?? 'Language overview on Wordora.',
    identifier: baseLanguage?.code
      ? [
          {
            '@type': 'PropertyValue',
            propertyID: 'ISO 639-1',
            value: baseLanguage.code,
          },
        ]
      : undefined,
    numberOfSpeakers: baseLanguage?.speakers?.total,
    areaServed: baseLanguage?.speakers?.countries?.en ?? [],
    sameAs: baseLanguage?.wikipediaUrl ? [baseLanguage.wikipediaUrl] : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LanguageDetailPageClient initialLanguage={language} languageId={params.id} />
    </>
  )
}
