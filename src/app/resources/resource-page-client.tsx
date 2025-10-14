'use client'

import { useMemo, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import type { LearningResource, ResourceFiltersState, ResourceSortBy } from '@/types/learning-resources'
import { ResourceCard } from '@/components/resource-card'
import { ResourceFilters } from '@/components/resource-filters'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Layers, Sparkles, HelpCircle, Globe, Star } from 'lucide-react'
import { getLocalizedResources, filterResources, sortResources, getResourceStats, getLocalizedLanguages, type LocalizedResource } from '@/lib/utils/i18n-data'
import { resourceCollections, resourceFaqs } from '@/lib/data/learning-resources'
import { languages as languageCatalog } from '@/lib/data/languages'
import Link from 'next/link'

interface ResourcePageClientProps {
  resources: LearningResource[]
}

export function ResourcePageClient({ resources }: ResourcePageClientProps) {
  const { t, locale } = useTranslation()

  const [filters, setFilters] = useState<ResourceFiltersState>({
    skillFocus: [],
    languages: [],
  })
  const [sortBy, setSortBy] = useState<ResourceSortBy>('updated')

  const allLocalizedResources = useMemo(
    () => getLocalizedResources(resources, locale),
    [resources, locale]
  )

  const stats = useMemo(() => getResourceStats(resources), [resources])

  const filteredResources = useMemo(() => {
    const filtered = filterResources(allLocalizedResources, filters)
    return sortResources(filtered, sortBy)
  }, [allLocalizedResources, filters, sortBy])

  const hasActiveFilters =
    Boolean(filters.category) ||
    Boolean(filters.proficiency && filters.proficiency !== 'all') ||
    Boolean(filters.price) ||
    filters.languages.length > 0 ||
    filters.skillFocus.length > 0 ||
    Boolean(filters.searchQuery)

  const activeFiltersCount =
    (filters.category ? 1 : 0) +
    (filters.proficiency && filters.proficiency !== 'all' ? 1 : 0) +
    (filters.price ? 1 : 0) +
    filters.languages.length +
    filters.skillFocus.length +
    (filters.searchQuery ? 1 : 0)

  const localizedLanguages = useMemo(() => getLocalizedLanguages(languageCatalog, locale), [locale])
  const languageLookup = useMemo(() => {
    const lookup: Record<string, string> = {}
    localizedLanguages.forEach(language => {
      lookup[language.id] = language.nameZh ?? language.nameEn ?? language.name
    })
    return lookup
  }, [localizedLanguages])

  const availableLanguageOptions = useMemo(() => {
    const available = new Set<string>()
    allLocalizedResources.forEach(resource => {
      resource.languages.forEach(lang => {
        if (lang !== 'all') available.add(lang)
      })
    })
    return Array.from(available).map(id => ({
      id,
      name: languageLookup[id] ?? id,
    }))
  }, [allLocalizedResources, languageLookup])

  const allLanguagesLabel = t.resources.allLanguages

  const languageLabels = useMemo(() => {
    const map: Record<string, string> = {}
    availableLanguageOptions.forEach(option => {
      map[option.id] = option.name
    })
    map.all = allLanguagesLabel
    return map
  }, [availableLanguageOptions, allLanguagesLabel])

  const localizedCollections = useMemo(() => {
    return resourceCollections.map(collection => ({
      id: collection.id,
      title: collection.title[locale],
      description: collection.description[locale],
      tag: collection.tag[locale],
      resources: collection.resourceIds
        .map(resourceId => allLocalizedResources.find(resource => resource.id === resourceId))
        .filter(Boolean) as LocalizedResource[],
    }))
  }, [allLocalizedResources, locale])

  const localizedFaqs = useMemo(
    () =>
      resourceFaqs.map(item => ({
        id: item.id,
        question: item.question[locale],
        answer: item.answer[locale],
      })),
    [locale]
  )

  return (
    <div className="min-h-screen bg-background" key={locale}>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/15 via-primary/5 to-background py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 text-primary-foreground">
              <Sparkles className="h-4 w-4" />
              {t.homepage.resources.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.resources.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.resources.pageSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>{stats.totalResources} {t.resources.stats.totalResources}</span>
              </span>
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>{stats.languagesCovered} {t.resources.stats.languagesCovered}</span>
              </span>
              <span className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span>{stats.categories} {t.resources.stats.categories}</span>
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span>{stats.updatedThisWeek} {t.resources.stats.updatedThisWeek}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Filters */}
        <ResourceFilters
          filters={filters}
          onFiltersChange={setFilters}
          onReset={() =>
            setFilters({
              skillFocus: [],
              languages: [],
              category: undefined,
              proficiency: undefined,
              price: undefined,
              searchQuery: undefined,
            })
          }
          sortBy={sortBy}
          onSortChange={setSortBy}
          hasActiveFilters={hasActiveFilters}
          languages={availableLanguageOptions}
          stats={stats}
          activeFiltersCount={activeFiltersCount}
        />

        {/* Results */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {t.resources.resourcesFound.replace('{count}', filteredResources.length.toString())}
            </h2>
          </div>

          {filteredResources.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center space-y-3">
                <HelpCircle className="mx-auto h-10 w-10 text-muted-foreground" />
                <p className="text-lg font-semibold">{t.resources.noResourcesFound}</p>
                <Button
                  variant="outline"
                  onClick={() =>
                    setFilters({
                      skillFocus: [],
                      languages: [],
                      category: undefined,
                      proficiency: undefined,
                      price: undefined,
                      searchQuery: undefined,
                    })
                  }
                >
                  {t.resources.reset}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} languageLabels={languageLabels} />
              ))}
            </div>
          )}
        </section>

        {/* Collections */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">{t.resources.featuredSectionTitle}</h2>
              <p className="text-sm text-muted-foreground">{t.resources.featuredSectionSubtitle}</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {localizedCollections.map(collection => (
              <Card key={collection.id} className="h-full flex flex-col">
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <Badge variant="secondary" className="w-fit">{collection.tag}</Badge>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{collection.title}</h3>
                    <p className="text-sm text-muted-foreground">{collection.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {collection.resources.slice(0, 4).map(resource => (
                      <li key={resource.id} className="flex items-center justify-between gap-2">
                        <span className="truncate">{resource.name}</span>
                        <Button asChild variant="link" className="h-auto p-0 text-xs">
                          <a href={resource.websiteUrl} target="_blank" rel="noopener noreferrer">
                            {t.resources.viewWebsite}
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">{t.resources.faqTitle}</h2>
              <p className="text-sm text-muted-foreground">{t.resources.faqSubtitle}</p>
            </div>
          </div>
          <div className="space-y-3">
            {localizedFaqs.map(item => (
              <details key={item.id} className="border rounded-lg p-4 bg-muted/30">
                <summary className="cursor-pointer text-sm font-semibold">{item.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
