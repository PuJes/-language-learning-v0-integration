import type { Metadata } from 'next'
import type { Locale } from '@/types/i18n'

const SITE_URL = 'https://easiestlanguage.site'

const DEFAULT_LOCALE: Locale = 'en'

const HREFLANG_MAP: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
}

const OG_LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
}

type OgImage = {
  url: string
  alt?: string
}

export type CreateMetadataOptions = {
  title: string
  description: string
  /**
   * Path that will be appended to the site url.
   * Accepts values with or without a leading slash.
   */
  path: string
  locale?: Locale
  type?: 'website' | 'article'
  images?: OgImage[]
  keywords?: string[]
  robots?: Metadata['robots']
  publishedTime?: string
  modifiedTime?: string
  languageAlternates?: Partial<Record<Locale, string>>
}

function getAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return new URL(normalizedPath, SITE_URL).toString()
}

function getOgImages(images?: OgImage[]) {
  const defaultImageUrl = getAbsoluteUrl('/wordora-icon.png')
  const fallbackImage = [{ url: defaultImageUrl, alt: 'Wordora logo' }]
  return (images && images.length > 0 ? images : fallbackImage).map(image => ({
    url: image.url.startsWith('http') ? image.url : getAbsoluteUrl(image.url),
    alt: image.alt,
  }))
}

function resolveAlternateUrl(url?: string) {
  if (!url) return undefined
  return url.startsWith('http') ? url : getAbsoluteUrl(url)
}

export function createSeoMetadata(options: CreateMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    locale = DEFAULT_LOCALE,
    type = 'website',
    images,
    keywords,
    robots,
    publishedTime,
    modifiedTime,
    languageAlternates,
  } = options

  const canonicalUrl = getAbsoluteUrl(path)
  const enAlternate = resolveAlternateUrl(languageAlternates?.en) ?? canonicalUrl
  const zhAlternate = resolveAlternateUrl(languageAlternates?.zh) ?? canonicalUrl

  const alternateLanguages: Record<string, string> = {
    [HREFLANG_MAP.en]: enAlternate,
    [HREFLANG_MAP.zh]: zhAlternate,
    'x-default': canonicalUrl,
  }

  const ogImages = getOgImages(images)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type,
      locale: OG_LOCALE_MAP[locale] ?? OG_LOCALE_MAP[DEFAULT_LOCALE],
      siteName: 'Wordora',
      images: ogImages,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map(image => image.url),
    },
    robots,
  }
}
