import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cultureArticles } from '@/lib/data/culture-articles'
import { getLocalizedArticleBySlug } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'
import { createSeoMetadata } from '@/lib/seo'
import { getTranslations } from '@/locales'
import { REGION_LABELS, THEME_LABELS } from '@/types/culture'
import { languages } from '@/lib/data/languages'
import { MobileArticleTableOfContents, ArticleTableOfContents } from '@/components/article-table-of-contents'
import { LanguageLearningCTA } from '@/components/language-learning-cta'
import { RelatedArticles } from '@/components/related-articles'

const DEFAULT_LOCALE: Locale = 'en'

type CultureArticleParams = {
  params: {
    slug: string
  }
  searchParams?: {
    lang?: string
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

export default function CultureArticlePage({ params, searchParams }: CultureArticleParams) {
  const locale: Locale =
    searchParams?.lang === 'zh' || searchParams?.lang === 'en'
      ? (searchParams.lang as Locale)
      : DEFAULT_LOCALE

  const article = getLocalizedArticleBySlug(cultureArticles, params.slug, locale)

  if (!article) {
    notFound()
  }

  const t = getTranslations(locale)

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
    inLanguage: locale === 'zh' ? 'zh' : 'en',
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://easiestlanguage.site/culture/${params.slug}`,
    },
  }

  const relatedLanguages = article.relatedLanguages
    .map(langId => languages.find(lang => lang.id === langId))
    .filter((lang): lang is typeof languages[number] => Boolean(lang))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <MobileArticleTableOfContents items={article.tableOfContents} />

        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                {t.culture.home}
              </Link>
              <span>/</span>
              <Link href="/culture" className="hover:text-primary">
                {t.culture.cultureNavigation}
              </Link>
              <span>/</span>
              <span className="text-foreground">{REGION_LABELS[article.region][locale]}</span>
              <span>/</span>
              <span className="text-foreground truncate max-w-xs">{article.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1 rounded-md border px-3 py-1 text-sm text-muted-foreground">
                <span>🌍</span>
                <span>{REGION_LABELS[article.region][locale]}</span>
              </span>

              {relatedLanguages.map(lang => {
                const languageName =
                  locale === 'zh'
                    ? lang.nameZh ?? lang.name
                    : lang.nativeName ?? lang.name
                return (
                  <span key={lang.id} className="inline-flex items-center gap-1 rounded-md border px-3 py-1 text-sm text-muted-foreground">
                    <span>🗣️</span>
                    <span>{languageName}</span>
                  </span>
                )
              })}

              <span className="inline-flex items-center gap-1 rounded-md border px-3 py-1 text-sm text-muted-foreground">
                <span>{THEME_LABELS[article.theme].icon}</span>
                <span>{THEME_LABELS[article.theme][locale]}</span>
              </span>

              <span className="text-sm text-muted-foreground">
                {new Date(article.publishDate).toLocaleDateString(
                  locale === 'zh' ? 'zh-CN' : 'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-96 relative mb-12">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="hidden lg:block">
                <ArticleTableOfContents items={article.tableOfContents} />
              </aside>

              <div className="lg:col-span-3">
                <article className="article-content">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children, ...props }) => {
                        const text = String(children)
                        const tocItem = article.tableOfContents.find(item => item.title === text)
                        return (
                          <h2 id={tocItem?.id} {...props}>
                            {children}
                          </h2>
                        )
                      },
                      h3: ({ children, ...props }) => {
                        const text = String(children)
                        let id = ''
                        article.tableOfContents.forEach(item => {
                          if (item.children) {
                            const child = item.children.find(c => c.title === text)
                            if (child) id = child.id
                          }
                        })
                        return (
                          <h3 id={id || undefined} {...props}>
                            {children}
                          </h3>
                        )
                      },
                      p: ({ children, ...props }) => (
                        <p className="leading-relaxed text-base md:text-lg text-muted-foreground" {...props}>
                          {children}
                        </p>
                      ),
                      ul: ({ children, ...props }) => (
                        <ul className="list-disc pl-6 space-y-2" {...props}>
                          {children}
                        </ul>
                      ),
                      ol: ({ children, ...props }) => (
                        <ol className="list-decimal pl-6 space-y-2" {...props}>
                          {children}
                        </ol>
                      ),
                      li: ({ children, ...props }) => (
                        <li className="text-muted-foreground" {...props}>
                          {children}
                        </li>
                      ),
                      strong: ({ children, ...props }) => (
                        <strong className="font-semibold text-foreground" {...props}>
                          {children}
                        </strong>
                      ),
                      blockquote: ({ children, ...props }) => (
                        <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground" {...props}>
                          {children}
                        </blockquote>
                      ),
                      table: ({ children, ...props }) => (
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-border text-sm" {...props}>
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children, ...props }) => (
                        <thead className="bg-muted" {...props}>
                          {children}
                        </thead>
                      ),
                      tbody: ({ children, ...props }) => (
                        <tbody {...props}>
                          {children}
                        </tbody>
                      ),
                      tr: ({ children, ...props }) => (
                        <tr className="border-b border-border" {...props}>
                          {children}
                        </tr>
                      ),
                      td: ({ children, ...props }) => (
                        <td className="px-4 py-2 align-top text-muted-foreground" {...props}>
                          {children}
                        </td>
                      ),
                      th: ({ children, ...props }) => (
                        <th className="px-4 py-2 text-left font-semibold text-foreground" {...props}>
                          {children}
                        </th>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>

                  {article.relatedLanguages.length > 0 && (
                    <LanguageLearningCTA
                      languageId={article.relatedLanguages[0]}
                      culturalContext={article.title.split(/：|:/)[0]}
                    />
                  )}
                </article>

                <RelatedArticles currentArticleId={article.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
