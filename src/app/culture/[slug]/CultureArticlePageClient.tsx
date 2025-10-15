'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { REGION_LABELS, THEME_LABELS } from '@/types/culture'
import { cultureArticles } from '@/lib/data/culture-articles'
import { getLocalizedArticleBySlug } from '@/lib/utils/i18n-data'
import type { LocalizedCultureArticle } from '@/lib/utils/i18n-data'
import { ArticleTableOfContents, MobileArticleTableOfContents } from '@/components/article-table-of-contents'
import { LanguageLearningCTA } from '@/components/language-learning-cta'
import { RelatedArticles } from '@/components/related-articles'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { languages } from '@/lib/data/languages'

type CultureArticlePageClientProps = {
  initialArticle: LocalizedCultureArticle
  slug: string
}

export default function CultureArticlePageClient({ initialArticle, slug }: CultureArticlePageClientProps) {
  const { t, locale } = useTranslation()
  const [article, setArticle] = useState<LocalizedCultureArticle>(initialArticle)
  const [currentSection, setCurrentSection] = useState<string>('')

  useEffect(() => {
    const localizedArticle = getLocalizedArticleBySlug(cultureArticles, slug, locale)
    if (localizedArticle) {
      setArticle(localizedArticle)
    }
  }, [slug, locale])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    )

    // 观察所有H2和H3标题
    const headings = document.querySelectorAll('h2[id], h3[id]')
    headings.forEach(heading => observer.observe(heading))

    return () => observer.disconnect()
  }, [article])

  // 获取关联语言信息
  const relatedLanguages = article.relatedLanguages
    .map(langId => languages.find(l => l.id === langId))
    .filter(Boolean)


  return (
    <div className="min-h-screen bg-background">
      {/* 移动端目录 */}
      <MobileArticleTableOfContents
        items={article.tableOfContents}
        currentSection={currentSection}
      />

      {/* 面包屑导航 */}
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

      {/* 文章头部 */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 标题 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

          {/* 元信息 */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="gap-1">
              <span>🌍</span>
              <span>{REGION_LABELS[article.region][locale]}</span>
            </Badge>

            {relatedLanguages.map(lang => (
              <Badge key={lang!.id} variant="secondary" className="gap-1">
                <span>🗣️</span>
                <span>{locale === 'zh' ? lang!.name : lang!.nativeName}</span>
              </Badge>
            ))}

            <Badge variant="secondary" className="gap-1">
              <span>{THEME_LABELS[article.theme].icon}</span>
              <span>{THEME_LABELS[article.theme][locale]}</span>
            </Badge>

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

      {/* 封面图 */}
      <div className="w-full h-96 relative mb-12">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* 文章主体 */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 左侧大纲（桌面端） */}
            <aside className="hidden lg:block">
              <ArticleTableOfContents
                items={article.tableOfContents}
                currentSection={currentSection}
              />
            </aside>

            {/* 正文 */}
            <div className="lg:col-span-3">
              <article className="article-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children, ...props }) => {
                      const text = String(children)
                      const tocItem = article.tableOfContents.find(
                        item => item.title === text
                      )
                      return (
                        <h2 id={tocItem?.id} {...props}>
                          {children}
                        </h2>
                      )
                    },
                    h3: ({ children, _node, ...props }) => {
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
                    p: ({ children, _node, ...props }) => (
                      <p className="leading-relaxed text-base md:text-lg text-muted-foreground" {...props}>
                        {children}
                      </p>
                    ),
                    ul: ({ children, _node, ...props }) => (
                      <ul className="list-disc pl-6 space-y-2" {...props}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children, _node, ...props }) => (
                      <ol className="list-decimal pl-6 space-y-2" {...props}>
                        {children}
                      </ol>
                    ),
                    li: ({ children, _node, ...props }) => (
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

                {/* 语言学习CTA - 嵌入正文中段 */}
                {article.relatedLanguages.length > 0 && (
                  <LanguageLearningCTA
                    languageId={article.relatedLanguages[0]}
                    culturalContext={article.title.split('：')[0]}
                  />
                )}
              </article>

              {/* 相关文章推荐 */}
              <RelatedArticles currentArticleId={article.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
