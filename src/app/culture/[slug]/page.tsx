import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CultureArticlePageClient from './CultureArticlePageClient'
import { cultureArticles } from '@/lib/data/culture-articles'
import { getLocalizedArticleBySlug } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'
import { createSeoMetadata } from '@/lib/seo'

const DEFAULT_LOCALE: Locale = 'zh'

type CultureArticleParams = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CultureArticleParams): Promise<Metadata> {
  const { slug } = params
  const article = cultureArticles.find(item => item.slug === slug)

  if (!article) {
    return createSeoMetadata({
      title: 'Culture Story Not Found',
      description: 'The cultural insight you are looking for is not available on Wordora yet.',
      path: `/culture/${slug}`,
      locale: 'en',
      robots: {
        index: false,
        follow: false,
      },
    })
  }

  const description =
    article.metaDescription?.en ?? article.summary.en ?? 'Discover cultural perspectives connected to popular languages.'

  return createSeoMetadata({
    title: `${article.title.en} Cultural Spotlight`,
    description,
    path: `/culture/${slug}`,
    locale: 'en',
    type: 'article',
    keywords: article.keywords?.en ?? undefined,
    publishedTime: article.publishDate,
    images: article.coverImage
      ? [
          {
            url: article.coverImage,
            alt: article.title.en,
          },
        ]
      : undefined,
    languageAlternates: {
      zh: `/culture/${slug}?lang=zh`,
    },
  })
}

export default function CultureArticlePage({ params }: CultureArticleParams) {
  const article = getLocalizedArticleBySlug(cultureArticles, params.slug, DEFAULT_LOCALE)

  if (!article) {
    notFound()
  }

  const baseArticle = cultureArticles.find(item => item.slug === params.slug)
  const authorName =
    typeof baseArticle?.author === 'string'
      ? baseArticle.author
      : baseArticle?.author?.en ?? baseArticle?.author?.zh ?? 'Wordora Editorial Team'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: baseArticle?.title.en ?? article.title,
    description:
      baseArticle?.metaDescription?.en ?? baseArticle?.summary.en ?? article.summary,
    image: baseArticle?.coverImage,
    datePublished: baseArticle?.publishDate,
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://easiestlanguage.site/culture/${params.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CultureArticlePageClient initialArticle={article} slug={params.slug} />
    </>
  )
}
