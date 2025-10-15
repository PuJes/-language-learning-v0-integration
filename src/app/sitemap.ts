import type { MetadataRoute } from 'next'
import { languages } from '@/lib/data/languages'
import { cultureArticles } from '@/lib/data/culture-articles'
import { learningMethods } from '@/lib/data/learning-methods'
import { learningResources } from '@/lib/data/learning-resources'

const BASE_URL =
  process.env.SITE_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://easiestlanguage.site'

const parseDate = (value?: string) => {
  if (!value) {
    return null
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return null
  }

  return date
}

const getLatestDate = (values: Array<string | undefined>, fallback: Date) => {
  const timestamps = values
    .map(parseDate)
    .filter((date): date is Date => Boolean(date))
    .map(date => date.getTime())

  if (timestamps.length === 0) {
    return fallback
  }

  return new Date(Math.max(...timestamps))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const languageRoutes = languages.map(language => ({
    url: `${BASE_URL}/languages/${language.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const cultureArticleRoutes = cultureArticles.map(article => ({
    url: `${BASE_URL}/culture/${article.slug}`,
    lastModified: parseDate(article.publishDate) ?? now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const learningMethodRoutes = learningMethods.map(method => ({
    url: `${BASE_URL}/learning-methods/${method.slug}`,
    lastModified:
      parseDate(method.lastUpdated) ??
      parseDate(method.publishDate) ??
      now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const learningResourceRoutes = learningResources.map(resource => ({
    url: `${BASE_URL}/resources/${resource.slug}`,
    lastModified: parseDate(resource.updatedAt) ?? now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const latestCultureUpdate = getLatestDate(
    cultureArticles.map(article => article.publishDate),
    now
  )

  const latestMethodUpdate = getLatestDate(
    learningMethods.map(method => method.lastUpdated ?? method.publishDate),
    now
  )

  const latestResourceUpdate = getLatestDate(
    learningResources.map(resource => resource.updatedAt),
    now
  )

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/languages`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/culture`,
      lastModified: latestCultureUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learning-methods`,
      lastModified: latestMethodUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: latestResourceUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/survey`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/recommendation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/coming-soon`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    ...languageRoutes,
    ...cultureArticleRoutes,
    ...learningMethodRoutes,
    ...learningResourceRoutes,
  ]
}
