'use client'

import { useState, useMemo } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { LearningMethodCard } from '@/components/learning-method-card'
import { learningMethods } from '@/lib/data/learning-methods'
import { METHOD_TYPE_LABELS, CHALLENGE_LABELS, LEVEL_LABELS, type MethodType, type LearningChallenge, type LearningLevel } from '@/types/learning-methods'
import { getLocalizedMethods } from '@/lib/utils/i18n-data'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Filter, X } from 'lucide-react'

export default function LearningMethodsPage() {
  const { t, locale } = useTranslation()

  // Filter states
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'newest' | 'readTime'>('newest')

  const localizedMethods = useMemo(() => getLocalizedMethods(learningMethods, locale), [locale])

  // Filter logic
  const filteredMethods = useMemo(() => {
    return localizedMethods.filter(method => {
      if (selectedType !== 'all' && method.methodType !== selectedType) return false
      if (selectedChallenges.length > 0 && !selectedChallenges.some(c => method.challenges.includes(c as LearningChallenge))) return false
      if (selectedLevel !== 'all' && method.level !== selectedLevel && method.level !== 'all') return false
      if (selectedLanguage !== 'all' && !method.relatedLanguages.includes(selectedLanguage) && !method.relatedLanguages.includes('all')) return false
      return true
    }).sort((a, b) => {
      if (sortBy === 'readTime') return a.readingTime - b.readingTime
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    })
  }, [localizedMethods, selectedType, selectedChallenges, selectedLevel, selectedLanguage, sortBy])

  // Reset filters
  const resetFilters = () => {
    setSelectedType('all')
    setSelectedChallenges([])
    setSelectedLevel('all')
    setSelectedLanguage('all')
  }

  // Toggle challenge
  const toggleChallenge = (challenge: string) => {
    setSelectedChallenges(prev =>
      prev.includes(challenge) ? prev.filter(c => c !== challenge) : [...prev, challenge]
    )
  }

  const hasActiveFilters = selectedType !== 'all' || selectedChallenges.length > 0 || selectedLevel !== 'all' || selectedLanguage !== 'all'

  return (
    <div className="min-h-screen bg-background" key={locale}>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge className="mb-2">
              <BookOpen className="h-3 w-3 mr-1" />
              {t.learningMethods.pageTitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t.learningMethods.pageTitle}</h1>
            <p className="text-xl text-muted-foreground">{t.learningMethods.pageSubtitle}</p>
            <div className="flex gap-6 justify-center text-sm text-muted-foreground pt-4">
              <span className="flex items-center gap-2">
                📚 {learningMethods.length} 个方法
              </span>
              <span className="flex items-center gap-2">
                🎯 解决 10+ 个学习痛点
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-8 space-y-6 bg-muted/30 p-6 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="text-lg font-semibold">筛选方法</h2>
              {hasActiveFilters && (
                <Badge variant="secondary">{filteredMethods.length} 个结果</Badge>
              )}
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as any)}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t.learningMethods.newest}</SelectItem>
                  <SelectItem value="readTime">{t.learningMethods.readTime}</SelectItem>
                </SelectContent>
              </Select>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  <X className="h-4 w-4 mr-1" />
                  {t.learningMethods.reset}
                </Button>
              )}
            </div>
          </div>

          {/* Main Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Method Type */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t.learningMethods.filterByType}</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.learningMethods.allTypes}</SelectItem>
                  {Object.entries(METHOD_TYPE_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label.icon} {label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Learning Level */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t.learningMethods.filterByLevel}</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.learningMethods.allLevels}</SelectItem>
                  {Object.entries(LEVEL_LABELS).filter(([key]) => key !== 'all').map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Language (simplified) */}
            <div>
              <label className="text-sm font-medium mb-2 block">{t.learningMethods.filterByLanguage}</label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.learningMethods.allLanguages}</SelectItem>
                  <SelectItem value="japanese">日语 / Japanese</SelectItem>
                  <SelectItem value="korean">韩语 / Korean</SelectItem>
                  <SelectItem value="french">法语 / French</SelectItem>
                  <SelectItem value="chinese">中文 / Chinese</SelectItem>
                  <SelectItem value="spanish">西班牙语 / Spanish</SelectItem>
                  <SelectItem value="english">英语 / English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Challenge Multi-select */}
          <div>
            <label className="text-sm font-medium mb-3 block">{t.learningMethods.filterByChallenge}</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(CHALLENGE_LABELS).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={selectedChallenges.includes(key)}
                    onCheckedChange={() => toggleChallenge(key)}
                  />
                  <label
                    htmlFor={key}
                    className="text-sm cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                  >
                    <span>{label.icon}</span>
                    <span>{label[locale]}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {t.learningMethods.methodsFound.replace('{count}', filteredMethods.length.toString())}
        </div>

        {/* Methods Grid */}
        {filteredMethods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMethods.map(method => (
              <LearningMethodCard key={method.id} method={method} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed">
            <p className="text-muted-foreground text-lg mb-4">{t.learningMethods.noMethodsFound}</p>
            <Button variant="outline" onClick={resetFilters}>
              <X className="h-4 w-4 mr-2" />
              {t.learningMethods.reset}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
