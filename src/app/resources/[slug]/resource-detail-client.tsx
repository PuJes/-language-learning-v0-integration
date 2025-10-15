'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { learningResources } from '@/lib/data/learning-resources'
import { getLocalizedResourceBySlug, type LocalizedResource } from '@/lib/utils/i18n-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RESOURCE_CATEGORY_LABELS, SKILL_FOCUS_LABELS, PRICE_LABELS, PLATFORM_LABELS } from '@/types/learning-resources'
import { CalendarClock, ExternalLink, Download, Globe, Monitor, Smartphone, ArrowLeft, Star } from 'lucide-react'
import { ResourceReviews } from '@/components/resource-reviews'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface ResourceDetailClientProps {
  slug: string
  initialResource: LocalizedResource
}

const priceColorClasses: Record<string, string> = {
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
}

export function ResourceDetailClient({ slug, initialResource }: ResourceDetailClientProps) {
  const { t, locale } = useTranslation()
  const router = useRouter()
  const [resource, setResource] = useState<LocalizedResource>(initialResource)

  useEffect(() => {
    const localized = getLocalizedResourceBySlug(learningResources, slug, locale)
    if (localized) {
      setResource(localized)
    }
  }, [locale, slug])

  const platformIcons = useMemo(() => ({
    web: <Globe className="h-4 w-4" />,
    ios: <Smartphone className="h-4 w-4" />,
    android: <Smartphone className="h-4 w-4" />,
    desktop: <Monitor className="h-4 w-4" />,
  }), [])

  const categoryMeta = RESOURCE_CATEGORY_LABELS[resource.category]
  const priceMeta = PRICE_LABELS[resource.price]
  const supportedLanguagesLabel = resource.languages.includes('all')
    ? t.resources.allLanguages
    : resource.languages.join(', ')

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b bg-gradient-to-b from-primary/15 via-primary/5 to-background py-14 md:py-20">
        <div className="container mx-auto px-4 space-y-8">
          <div>
            <Button variant="ghost" size="sm" className="gap-2" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
              {t.common.back}
            </Button>
          </div>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <span>{categoryMeta.icon}</span>
                <span>{categoryMeta[locale]}</span>
              </Badge>
              <Badge className={cn('gap-1', priceColorClasses[priceMeta.color] ?? 'bg-primary/10 text-primary')}>
                {priceMeta[locale]}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{resource.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{resource.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                <span className="font-semibold text-foreground">
                  {resource.ratings?.average ? resource.ratings.average.toFixed(1) : '—'}
                </span>
                {resource.ratings?.basedOn && (
                  <span>
                    {t.resources.basedOnReviews.replace('{count}', resource.ratings.basedOn.toLocaleString())}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4" />
                <span>{t.resources.updatedAt}: {resource.updatedAt}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={resource.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {t.resources.viewWebsite}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {resource.downloadLinks && Object.values(resource.downloadLinks).length > 0 && (
                <Button asChild size="lg" variant="outline">
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
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-10">
        <section className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardContent className="space-y-6 p-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">{t.resources.highlights}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {resource.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t.resources.idealFor}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {resource.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {resource.limitations && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t.resources.limitations}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {resource.limitations.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {resource.tutorials && resource.tutorials.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t.resources.tutorials}</h3>
                  <ul className="space-y-2 text-sm">
                    {resource.tutorials.map((tutorial, index) => (
                      <li key={index}>
                        <a
                          href={tutorial.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {tutorial.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="h-fit">
            <CardContent className="space-y-4 p-6 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">{t.resources.platforms}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.platforms.map(platform => (
                    <Badge key={platform} variant="outline" className="gap-2">
                      {platformIcons[platform]}
                      <span>{PLATFORM_LABELS[platform][locale]}</span>
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.resources.supportedLanguages}</p>
                <p>{supportedLanguagesLabel}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t.resources.filterBySkill}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.skillFocus.map(skill => (
                    <Badge key={skill} variant="secondary" className="gap-1">
                      <span>{SKILL_FOCUS_LABELS[skill].icon}</span>
                      <span>{SKILL_FOCUS_LABELS[skill][locale]}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{t.resources.userReviews}</h2>
          <ResourceReviews resource={resource} />
        </section>
      </div>
    </div>
  )
}
