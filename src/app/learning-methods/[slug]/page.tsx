import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { learningMethods } from '@/lib/data/learning-methods'
import { getLocalizedMethodBySlug, getRelatedMethods } from '@/lib/utils/i18n-data'
import { METHOD_TYPE_LABELS, CHALLENGE_LABELS, LEVEL_LABELS } from '@/types/learning-methods'
import type { Locale } from '@/types/i18n'
import { MethodDetailClient } from './method-detail-client'

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
  const method = getLocalizedMethodBySlug(learningMethods, slug, locale)

  if (!method) {
    return {
      title: 'Learning Method Not Found',
      description: 'The learning method you are looking for could not be located.',
    }
  }

  const canonicalUrl = `https://easiestlanguage.site/learning-methods/${slug}`
  const keywordSet = new Set<string>([
    method.title,
    'Wordora',
    '语言学习方法',
    METHOD_TYPE_LABELS[method.methodType][locale],
    LEVEL_LABELS[method.level][locale],
    ...method.challenges.map(challenge => CHALLENGE_LABELS[challenge][locale]),
    ...(method.seoKeywords ?? []),
  ])

  const challengeLabels = method.challenges
    .map(challenge => CHALLENGE_LABELS[challenge][locale])
    .join('、')
  const description = [
    method.summary,
    `${LEVEL_LABELS[method.level][locale]}适用`,
    challengeLabels ? `聚焦 ${challengeLabels}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ')

  return {
    title: method.title,
    description,
    keywords: Array.from(keywordSet),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: method.title,
      description: method.summary,
      type: 'article',
      url: canonicalUrl,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      publishedTime: method.publishDate,
      modifiedTime: method.lastUpdated,
      images: method.coverImage
        ? [
            {
              url: method.coverImage,
              alt: method.title,
            },
          ]
        : undefined,
    },
  }
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
