'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useTranslation } from '@/hooks/useTranslation'
import { Filter, Search, X } from 'lucide-react'
import { RESOURCE_CATEGORY_LABELS, SKILL_FOCUS_LABELS, PRICE_LABELS, type ResourceFiltersState, type ResourceSortBy } from '@/types/learning-resources'
import { LEVEL_LABELS, type LearningLevel } from '@/types/learning-methods'
import type { ResourceStats } from '@/lib/utils/i18n-data'

interface LanguageOption {
  id: string
  name: string
}

interface ResourceFiltersProps {
  filters: ResourceFiltersState
  onFiltersChange: (filters: ResourceFiltersState) => void
  onReset: () => void
  sortBy: ResourceSortBy
  onSortChange: (value: ResourceSortBy) => void
  hasActiveFilters: boolean
  languages: LanguageOption[]
  stats: ResourceStats
  activeFiltersCount: number
}

export function ResourceFilters({
  filters,
  onFiltersChange,
  onReset,
  sortBy,
  onSortChange,
  hasActiveFilters,
  languages,
  stats,
  activeFiltersCount,
}: ResourceFiltersProps) {
  const { t, locale } = useTranslation()

  const handleCategoryChange = (value: string) => {
    onFiltersChange({
      ...filters,
      category: value === 'all' ? undefined : (value as ResourceFiltersState['category']),
    })
  }

  const handleLevelChange = (value: string) => {
    onFiltersChange({
      ...filters,
      proficiency: value === 'all' ? undefined : value as LearningLevel,
    })
  }

  const handlePriceChange = (value: string) => {
    onFiltersChange({
      ...filters,
      price: value === 'all' ? undefined : value as ResourceFiltersState['price'],
    })
  }

  const toggleSkill = (skill: string) => {
    const nextSkills = filters.skillFocus.includes(skill as any)
      ? filters.skillFocus.filter((existing) => existing !== skill)
      : [...filters.skillFocus, skill as any]
    onFiltersChange({
      ...filters,
      skillFocus: nextSkills,
    })
  }

  const toggleLanguage = (languageId: string) => {
    const nextLanguages = filters.languages.includes(languageId)
      ? filters.languages.filter((value) => value !== languageId)
      : [...filters.languages, languageId]
    onFiltersChange({
      ...filters,
      languages: nextLanguages,
    })
  }

  const removeFilterBadge = (type: 'category' | 'price' | 'level' | 'skill' | 'language' | 'search', value?: string) => {
    switch (type) {
      case 'category':
        onFiltersChange({ ...filters, category: undefined })
        break
      case 'price':
        onFiltersChange({ ...filters, price: undefined })
        break
      case 'level':
        onFiltersChange({ ...filters, proficiency: undefined })
        break
      case 'skill':
        if (!value) return
        onFiltersChange({
          ...filters,
          skillFocus: filters.skillFocus.filter((skill) => skill !== value),
        })
        break
      case 'language':
        if (!value) return
        onFiltersChange({
          ...filters,
          languages: filters.languages.filter((lang) => lang !== value),
        })
        break
      case 'search':
        onFiltersChange({ ...filters, searchQuery: undefined })
        break
    }
  }

  const priceOptions = Object.entries(PRICE_LABELS)
  const categoryOptions = Object.entries(RESOURCE_CATEGORY_LABELS)
  const levelOptions = Object.entries(LEVEL_LABELS)

  return (
    <section className="space-y-6 bg-muted/40 border rounded-xl p-6" aria-label={t.resources.filterByCategory}>
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Filter className="h-5 w-5 text-primary" />
          <span>{t.resources.filterByCategory}</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as ResourceSortBy)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={t.resources.sortBy} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updated">{t.resources.newest}</SelectItem>
              <SelectItem value="rating">{t.resources.highestRated}</SelectItem>
              <SelectItem value="tutorials">{t.resources.mostTutorials}</SelectItem>
            </SelectContent>
          </Select>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={onReset} className="gap-1">
              <X className="h-4 w-4" />
              {t.resources.clearAllFilters}
            </Button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-lg border bg-background p-4">
          <p className="text-xs uppercase text-muted-foreground tracking-wide">{t.resources.stats.totalResources}</p>
          <p className="text-2xl font-semibold mt-1">{stats.totalResources}</p>
        </div>
        <div className="rounded-lg border bg-background p-4">
          <p className="text-xs uppercase text-muted-foreground tracking-wide">{t.resources.stats.languagesCovered}</p>
          <p className="text-2xl font-semibold mt-1">{stats.languagesCovered}</p>
        </div>
        <div className="rounded-lg border bg-background p-4">
          <p className="text-xs uppercase text-muted-foreground tracking-wide">{t.resources.stats.categories}</p>
          <p className="text-2xl font-semibold mt-1">{stats.categories}</p>
        </div>
        <div className="rounded-lg border bg-background p-4">
          <p className="text-xs uppercase text-muted-foreground tracking-wide">{t.resources.stats.updatedThisWeek}</p>
          <p className="text-2xl font-semibold mt-1">{stats.updatedThisWeek}</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t.resources.searchPlaceholder}
          className="pl-9"
          value={filters.searchQuery ?? ''}
          onChange={(event) =>
            onFiltersChange({
              ...filters,
              searchQuery: event.currentTarget.value || undefined,
            })
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          {/* Category */}
          <div>
            <h4 className="text-sm font-semibold mb-2">{t.resources.filterByCategory}</h4>
            <Select value={filters.category ?? 'all'} onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder={t.resources.allCategories} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.resources.allCategories}</SelectItem>
                {categoryOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label.icon} {label[locale]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Skill focus */}
          <div>
            <h4 className="text-sm font-semibold mb-2">{t.resources.filterBySkill}</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(SKILL_FOCUS_LABELS).map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={filters.skillFocus.includes(key as any)}
                    onCheckedChange={() => toggleSkill(key)}
                  />
                  <span className="flex items-center gap-1">
                    <span>{label.icon}</span>
                    <span>{label[locale]}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {/* Learning Level */}
          <div>
            <h4 className="text-sm font-semibold mb-2">{t.resources.filterByLevel}</h4>
            <Select value={filters.proficiency ?? 'all'} onValueChange={handleLevelChange}>
              <SelectTrigger>
                <SelectValue placeholder={t.resources.allLevels} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.resources.allLevels}</SelectItem>
                {levelOptions
                  .filter(([value]) => value !== 'all')
                  .map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label[locale]}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <h4 className="text-sm font-semibold mb-2">{t.resources.filterByPrice}</h4>
            <Select value={filters.price ?? 'all'} onValueChange={handlePriceChange}>
              <SelectTrigger>
                <SelectValue placeholder={t.resources.allPrices} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.resources.allPrices}</SelectItem>
                {priceOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label[locale]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-sm font-semibold mb-2">{t.resources.filterByLanguage}</h4>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <label key={language.id} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={filters.languages.includes(language.id)}
                    onCheckedChange={() => toggleLanguage(language.id)}
                  />
                  <span>{language.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active filters */}
      {hasActiveFilters && (
        <div className="space-y-2">
          <p className="text-sm font-semibold">{t.resources.activeFilters}</p>
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <Badge variant="outline" className="gap-1">
                {RESOURCE_CATEGORY_LABELS[filters.category][locale]}
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('category')}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.proficiency && filters.proficiency !== 'all' && (
              <Badge variant="outline" className="gap-1">
                {LEVEL_LABELS[filters.proficiency][locale]}
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('level')}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.price && (
              <Badge variant="outline" className="gap-1">
                {PRICE_LABELS[filters.price][locale]}
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('price')}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.skillFocus.map((skill) => (
              <Badge key={skill} variant="outline" className="gap-1">
                {SKILL_FOCUS_LABELS[skill][locale]}
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('skill', skill)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {filters.languages.map((language) => (
              <Badge key={language} variant="outline" className="gap-1">
                {languages.find((option) => option.id === language)?.name ?? language}
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('language', language)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {filters.searchQuery && (
              <Badge variant="outline" className="gap-1">
                “{filters.searchQuery}”
                <button
                  type="button"
                  aria-label={t.resources.removeFilter}
                  onClick={() => removeFilterBadge('search')}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
