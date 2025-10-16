import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import type { Root, Heading } from 'mdast'
import { cultureArticles, getRelatedArticles } from '@/lib/data/culture-articles'
import { getLocalizedArticleBySlug, getLocalizedArticles } from '@/lib/utils/i18n-data'
import type { Locale } from '@/types/i18n'
import { createSeoMetadata } from '@/lib/seo'
import { getTranslations } from '@/locales'
import { REGION_LABELS, THEME_LABELS } from '@/types/culture'
import { languages } from '@/lib/data/languages'
import { MobileArticleTableOfContents, ArticleTableOfContents } from '@/components/article-table-of-contents'

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

export default async function CultureArticlePage({ params, searchParams }: CultureArticleParams) {
  const locale: Locale =
    searchParams?.lang === 'zh' || searchParams?.lang === 'en'
      ? (searchParams.lang as Locale)
      : DEFAULT_LOCALE

  const article = getLocalizedArticleBySlug(cultureArticles, params.slug, locale)

  if (!article) {
    notFound()
  }

  const t = getTranslations(locale)
  const cultureCopy = t.culture

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

  const relatedArticles = getLocalizedArticles(
    getRelatedArticles(article.id, 3),
    locale
  )

  const primaryLanguage = relatedLanguages[0]
  const primaryLanguageName = primaryLanguage
    ? locale === 'zh'
      ? primaryLanguage.nameZh ?? primaryLanguage.name
      : primaryLanguage.nativeName ?? primaryLanguage.name
    : undefined

  const ctaBenefits = primaryLanguageName
    ? [
        cultureCopy.understandCulture.replace('{language}', primaryLanguageName),
        cultureCopy.readOriginalWorks.replace('{language}', primaryLanguageName),
        cultureCopy.communicateWithNatives,
      ]
    : []

  const cultureContext = article.title.split(/：|:/)[0]

  const headingIdMap = new Map<string, string>()
  article.tableOfContents.forEach(item => {
    headingIdMap.set(item.title, item.id)
    item.children?.forEach(child => {
      headingIdMap.set(child.title, child.id)
    })
  })

  const processor = remark()
    .use(remarkGfm)
    .use(() => (tree: Root) => {
      visit<Heading>(tree, 'heading', node => {
        const text = toString(node)
        const id = headingIdMap.get(text)
        if (!id) return
        node.data = node.data ?? {}
        node.data.hProperties = node.data.hProperties ?? {}
        node.data.hProperties.id = id
      })
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })

  const articleHtml = (await processor.process(article.content)).toString()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <MobileArticleTableOfContents
          items={article.tableOfContents}
          title={cultureCopy.tableOfContents}
        />

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
                <ArticleTableOfContents
                  items={article.tableOfContents}
                  title={cultureCopy.tableOfContents}
                />
              </aside>

              <div className="lg:col-span-3">
                <article className="article-content">
                  <div
                    className="space-y-6"
                    dangerouslySetInnerHTML={{ __html: articleHtml }}
                  />

                  {primaryLanguage && primaryLanguageName && (
                    <section className="my-12">
                      <div className="rounded-lg border bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">💡</span>
                          <h3 className="text-xl font-semibold">
                            {cultureCopy.wantToExplore.replace(
                              '{culture}',
                              cultureContext || (locale === 'zh' ? '这种文化' : 'this culture')
                            )}
                          </h3>
                        </div>

                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            {cultureCopy.learningWillAllow.replace('{language}', primaryLanguageName)}
                          </p>
                          <ul className="space-y-2">
                            {ctaBenefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary mt-1">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={`/languages/${primaryLanguage.id}`} className="inline-flex">
                          <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5">
                            {cultureCopy.viewLanguageDetails.replace('{language}', primaryLanguageName)}
                          </span>
                        </Link>
                      </div>
                    </section>
                  )}
                </article>

                {relatedArticles.length > 0 && (
                  <section className="mt-16 space-y-6">
                    <h2 className="text-2xl font-bold">{cultureCopy.relatedArticles}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {relatedArticles.map(related => {
                        const relatedLanguageNames = related.relatedLanguages
                          .map(langId => {
                            const lang = languages.find(l => l.id === langId)
                            if (!lang) return null
                            return locale === 'zh' ? lang.nameZh ?? lang.name : lang.nativeName ?? lang.name
                          })
                          .filter((value): value is string => Boolean(value))

                        return (
                          <Link
                            key={related.id}
                            href={`/culture/${related.slug}`}
                            className="rounded-lg border bg-card hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
                          >
                            <div className="relative h-40 w-full">
                              <Image
                                src={related.coverImage}
                                alt={related.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 p-5 space-y-4">
                              <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                                {related.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-3">
                                {related.summary}
                              </p>
                              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-1 rounded-md border px-2 py-1">
                                  <span>🌍</span>
                                  <span>{REGION_LABELS[related.region][locale]}</span>
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-md border px-2 py-1">
                                  <span>{THEME_LABELS[related.theme].icon}</span>
                                  <span>{THEME_LABELS[related.theme][locale]}</span>
                                </span>
                                {relatedLanguageNames.map(name => (
                                  <span
                                    key={name}
                                    className="inline-flex items-center gap-1 rounded-md border px-2 py-1"
                                  >
                                    <span>🗣️</span>
                                    <span>{name}</span>
                                  </span>
                                ))}
                              </div>
                              <time
                                className="block text-xs text-muted-foreground"
                                dateTime={related.publishDate}
                              >
                                {new Date(related.publishDate).toLocaleDateString(
                                  locale === 'zh' ? 'zh-CN' : 'en-US',
                                  {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  }
                                )}
                              </time>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
