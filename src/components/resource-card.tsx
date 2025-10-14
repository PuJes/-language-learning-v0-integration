'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { LocalizedResource } from '@/lib/utils/i18n-data'
import { RESOURCE_CATEGORY_LABELS, SKILL_FOCUS_LABELS, PRICE_LABELS, PLATFORM_LABELS, type Platform } from '@/types/learning-resources'
import { CalendarClock, Download, ExternalLink, Globe, Monitor, Smartphone, Star } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ResourceCardProps {
  resource: LocalizedResource
  languageLabels: Record<string, string>
}

const platformIcons: Record<Platform, ReactNode> = {
  web: <Globe className="h-3.5 w-3.5" />,
  ios: <Smartphone className="h-3.5 w-3.5" />,
  android: <Smartphone className="h-3.5 w-3.5" />,
  desktop: <Monitor className="h-3.5 w-3.5" />,
}

export function ResourceCard({ resource, languageLabels }: ResourceCardProps) {
  const { t, locale } = useTranslation()

  const categoryMeta = RESOURCE_CATEGORY_LABELS[resource.category]
  const priceMeta = PRICE_LABELS[resource.price]
  const priceClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  }

  return (
    <Card
      className={cn(
        'flex h-full flex-col border transition-all hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
        resource.featured && 'border-primary/50'
      )}
    >
      <Link
        href={`/resources/${resource.slug}`}
        className="flex flex-1 flex-col rounded-lg focus:outline-none focus-visible:ring-0"
      >
        <CardHeader className="space-y-2 px-4 pt-4 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1 text-xs">
              <span>{categoryMeta.icon}</span>
              <span>{categoryMeta[locale]}</span>
            </Badge>
            <Badge className={cn('gap-1 text-xs', priceClasses[priceMeta.color])}>
              {priceMeta[locale]}
            </Badge>
            {resource.featured && (
              <Badge variant="default" className="gap-1 bg-primary text-primary-foreground text-xs">
                ⭐ {t.resources.featured}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
            {resource.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {resource.summary}
          </p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-3 px-4 pb-4">
          {resource.highlights.length > 0 && (
            <div className="space-y-1">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t.resources.highlights}
              </h4>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {resource.highlights.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {resource.skillFocus.map(skill => {
              const meta = SKILL_FOCUS_LABELS[skill]
              return (
                <Badge key={skill} variant="outline" className="gap-1 text-[11px]">
                  <span>{meta.icon}</span>
                  <span>{meta[locale]}</span>
                </Badge>
              )
            })}
          </div>

          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <Globe className="h-3.5 w-3.5" />
              <span className="font-medium">{t.resources.supportedLanguages}:</span>
              <span className="font-medium text-foreground">
                {resource.languages.includes('all')
                  ? t.resources.allLanguages
                  : resource.languages
                      .map(lang => languageLabels[lang] ?? lang)
                      .join(locale === 'zh' ? '、' : ', ')}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Smartphone className="h-3.5 w-3.5" />
              <span className="font-medium">{t.resources.platforms}:</span>
              <div className="flex flex-wrap gap-1">
                {resource.platforms.map(platform => (
                  <Badge key={platform} variant="secondary" className="gap-1 text-[11px]">
                    {platformIcons[platform]}
                    <span>{PLATFORM_LABELS[platform][locale]}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            {resource.ratings?.average ? (
              <>
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                <span className="font-semibold text-foreground">{resource.ratings.average.toFixed(1)}</span>
                {resource.ratings.basedOn && (
                  <span className="text-muted-foreground">
                    {t.resources.basedOnReviews.replace('{count}', resource.ratings.basedOn.toLocaleString())}
                  </span>
                )}
              </>
            ) : (
              <span className="text-muted-foreground">{t.resources.noReviewsYet}</span>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="flex flex-col gap-3 px-4 pb-4 pt-3">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
          <CalendarClock className="h-3.5 w-3.5" />
          <span>{t.resources.updatedAt}: {resource.updatedAt}</span>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Button asChild size="sm" className="flex-1" variant="default">
            <a href={resource.websiteUrl} target="_blank" rel="noopener noreferrer">
              {t.resources.viewWebsite}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          {resource.downloadLinks && Object.keys(resource.downloadLinks).length > 0 && (
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a
                href={Object.values(resource.downloadLinks)[0] ?? resource.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.resources.download}
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
