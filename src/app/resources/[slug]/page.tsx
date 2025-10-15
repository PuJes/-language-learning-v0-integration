import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { learningResources } from '@/lib/data/learning-resources'
import { ResourceDetailClient } from './resource-detail-client'
import { getLocalizedResourceBySlug } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'

const DEFAULT_LOCALE: Locale = 'zh'

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const resource = learningResources.find(item => item.slug === params.slug)
  if (!resource) {
    return {
      title: 'Resource Not Found | Wordora',
    }
  }

  return {
    title: `${resource.name.en} | Wordora`,
    description: resource.summary.en,
  }
}

export default function ResourceDetailPage({ params }: Params) {
  const resource = getLocalizedResourceBySlug(learningResources, params.slug, DEFAULT_LOCALE)

  if (!resource) {
    notFound()
  }

  return <ResourceDetailClient slug={params.slug} initialResource={resource} />
}
