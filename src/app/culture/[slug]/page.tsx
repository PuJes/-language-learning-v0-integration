import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CultureArticlePageClient from './CultureArticlePageClient'
import { cultureArticles } from '@/lib/data/culture-articles'

type CultureArticleParams = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CultureArticleParams): Promise<Metadata> {
  const article = cultureArticles.find(item => item.slug === params.slug)

  if (!article) {
    return {
      title: 'Culture Story Not Found',
      description: 'The cultural insight you are looking for is not available on Wordora yet.',
    }
  }

  return {
    title: `${article.title.en} Cultural Spotlight`,
    description: article.summary.en ?? 'Discover cultural perspectives connected to popular languages.',
  }
}

export default function CultureArticlePage({ params }: CultureArticleParams) {
  const articleExists = cultureArticles.some(item => item.slug === params.slug)

  if (!articleExists) {
    notFound()
  }

  return <CultureArticlePageClient slug={params.slug} />
}
