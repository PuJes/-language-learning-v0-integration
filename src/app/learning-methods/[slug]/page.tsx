import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { learningMethods } from '@/lib/data/learning-methods'
import { getLocalizedMethodBySlug, getRelatedMethods } from '@/lib/utils/i18n-data'
import { METHOD_TYPE_LABELS, CHALLENGE_LABELS, LEVEL_LABELS } from '@/types/learning-methods'
import type { Locale } from '@/types/i18n'
import { MethodDetailClient } from './method-detail-client'
import { createSeoMetadata } from '@/lib/seo'

const DEFAULT_LOCALE: Locale = 'zh'

export async function generateStaticParams() {
  return learningMethods.map(method => ({
    slug: method.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const locale = DEFAULT_LOCALE
  const localizedMethod = getLocalizedMethodBySlug(learningMethods, slug, locale)
  const baseMethod = learningMethods.find(method => method.slug === slug)

  if (!localizedMethod || !baseMethod) {
    return createSeoMetadata({
      title: 'Learning Method Not Found',
      description: 'The learning method you are looking for could not be located.',
      path: `/learning-methods/${slug}`,
      locale: 'en',
      robots: {
        index: false,
        follow: false,
      },
    })
  }

  const keywordSet = new Set<string>([
    baseMethod.title.en,
    baseMethod.title.zh,
    METHOD_TYPE_LABELS[baseMethod.methodType].en,
    METHOD_TYPE_LABELS[baseMethod.methodType].zh,
    LEVEL_LABELS[baseMethod.level].en,
    LEVEL_LABELS[baseMethod.level].zh,
    ...baseMethod.challenges.map(challenge => CHALLENGE_LABELS[challenge].en),
    ...baseMethod.challenges.map(challenge => CHALLENGE_LABELS[challenge].zh),
    ...(baseMethod.seoKeywords ?? []),
    'language learning method',
    'Wordora learning strategy',
  ].filter(Boolean))

  const description =
    baseMethod.summary.en ?? localizedMethod.summary ?? 'Discover language learning strategies on Wordora.'

  return createSeoMetadata({
    title: baseMethod.title.en,
    description,
    path: `/learning-methods/${slug}`,
    locale: 'en',
    type: 'article',
    keywords: Array.from(keywordSet),
    publishedTime: baseMethod.publishDate,
    modifiedTime: baseMethod.lastUpdated,
    images: baseMethod.coverImage
      ? [
          {
            url: baseMethod.coverImage,
            alt: baseMethod.title.en,
          },
        ]
      : undefined,
    languageAlternates: {
      zh: `/learning-methods/${slug}?lang=zh`,
    },
  })
}

export default async function MethodDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const method = getLocalizedMethodBySlug(learningMethods, slug, DEFAULT_LOCALE)
  if (!method) {
    notFound()
  }

  const originalMethod = learningMethods.find(m => m.slug === slug)!
  const relatedMethods = getRelatedMethods(originalMethod, learningMethods, DEFAULT_LOCALE, 3)

  return (
    <MethodDetailClient
      slug={slug}
      initialMethod={method}
      initialRelatedMethods={relatedMethods}
    />
  )
}
