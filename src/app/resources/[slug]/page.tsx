import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { learningResources } from '@/lib/data/learning-resources'
import { ResourceDetailClient } from './resource-detail-client'
import { getLocalizedResourceBySlug } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'
import { createSeoMetadata } from '@/lib/seo'

const DEFAULT_LOCALE: Locale = 'zh'

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const { slug } = params
  const resource = learningResources.find(item => item.slug === slug)

  if (!resource) {
    return createSeoMetadata({
      title: 'Resource Not Found | Wordora',
      description: 'The resource you are looking for is unavailable. Explore more learning tools on Wordora.',
      path: `/resources/${slug}`,
      locale: 'en',
      robots: {
        index: false,
        follow: false,
      },
    })
  }

  const keywords = new Set<string>([
    resource.name.en,
    resource.category,
    ...resource.tags,
    'language learning resource',
    'Wordora resource guide',
  ])

  return createSeoMetadata({
    title: `${resource.name.en} | Wordora`,
    description: resource.summary.en,
    path: `/resources/${slug}`,
    locale: 'en',
    type: 'article',
    keywords: Array.from(keywords),
    modifiedTime: resource.updatedAt,
    languageAlternates: {
      zh: `/resources/${slug}?lang=zh`,
    },
  })
}

export default function ResourceDetailPage({ params }: Params) {
  const resource = getLocalizedResourceBySlug(learningResources, params.slug, DEFAULT_LOCALE)

  if (!resource) {
    notFound()
  }

  return <ResourceDetailClient slug={params.slug} initialResource={resource} />
}
