import { notFound } from 'next/navigation'
import { learningMethods } from '@/lib/data/learning-methods'
import { getLocalizedMethodBySlug, getRelatedMethods } from '@/lib/utils/i18n-data'
import { MethodDetailClient } from './method-detail-client'

export async function generateStaticParams() {
  return learningMethods.map(method => ({
    slug: method.slug,
  }))
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Default to Chinese locale (can be improved with cookie/header reading)
  const locale = 'zh'

  const method = getLocalizedMethodBySlug(learningMethods, slug, locale)
  if (!method) {
    notFound()
  }

  const originalMethod = learningMethods.find(m => m.slug === slug)!
  const relatedMethods = getRelatedMethods(originalMethod, learningMethods, locale, 3)

  return <MethodDetailClient method={method} relatedMethods={relatedMethods} />
}
