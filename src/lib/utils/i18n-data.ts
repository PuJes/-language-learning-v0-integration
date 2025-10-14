/**
 * 双语数据访问辅助函数
 * 用于根据当前locale返回对应语言的数据
 */

import type { Locale } from '@/types/i18n'
import type { Language, BilingualText, BilingualArray } from '@/types'
import type { CultureArticle, TocItem } from '@/types/culture'
import type { LearningMethodArticle, TocItem as MethodTocItem, Tool, VideoResource } from '@/types/learning-methods'
import type { LearningResource, ResourceFiltersState, ResourceSortBy } from '@/types/learning-resources'

// Localized types (all BilingualText → string, BilingualArray → string[])
export type LocalizedLanguage = Omit<Language,
  'description' | 'speakers' | 'regions' | 'family' | 'script' | 'tags' | 'studyTime' | 'usage' | 'resources' |
  'culturalInfo' | 'metadata' | 'learningGuide' | 'learningTimeEstimate' | 'learningResources' |
  'careerOpportunities' | 'travelAdvantages' | 'writingSystem'
> & {
  description: string
  speakers: {
    native: number
    total: number
    countries: string[]
  }
  regions: string[]
  family: string
  script: string
  tags?: string[]
  studyTime?: string
  usage?: string[]
  resources?: string[]
  culturalInfo?: {
    history: string
    traditions: string[]
    festivals: string[]
    cuisine: string[]
    arts: string[]
    modernCulture: string[]
  }
  metadata?: {
    iso639_1: string
    family: string
    branch?: string
    writingSystem: string[]
  }
  learningGuide?: {
    learningPath: Array<{
      title: string
      description: string
      level: string
      estimatedHours: number
      skills: string[]
    }>
    learningMethods?: Array<{
      title: string
      description: string
      techniques: string[]
    }>
    learningTools?: Array<{
      category: string
      tools: string[]
    }>
  }
  learningTimeEstimate?: {
    beginner: string
    intermediate: string
    advanced: string
    totalHours: number
    basic?: number
    intermediateHours?: number
    advancedHours?: number
  }
  learningResources?: {
    apps: Array<{
      name: string
      description: string
      price: string
    }>
    books: Array<{
      title: string
      author: string
      level: string
    }>
    websites: Array<{
      name: string
      url: string
      description: string
    }>
  }
  careerOpportunities?: {
    industries: string[]
    averageSalary: string
    jobGrowth: string
    remoteWork: boolean
  }
  travelAdvantages?: {
    countries: string[]
    businessHubs: string[]
    culturalSites: string[]
  }
  writingSystem?: string[]
}

export type LocalizedTocItem = {
  id: string
  level: 2 | 3
  title: string
  children?: LocalizedTocItem[]
}

export type LocalizedCultureArticle = Omit<CultureArticle,
  'title' | 'summary' | 'content' | 'tableOfContents' | 'author' | 'metaDescription' | 'keywords'
> & {
  title: string
  summary: string
  content: string
  tableOfContents: LocalizedTocItem[]
  author?: string
  metaDescription: string
  keywords: string[]
}

/**
 * 获取本地化的文本
 */
export function getLocalizedText(text: BilingualText, locale: Locale): string {
  return text[locale]
}

/**
 * 获取本地化的数组
 */
export function getLocalizedArray(array: BilingualArray, locale: Locale): string[] {
  return array[locale]
}

/**
 * 将双语Language对象转换为单语Language对象
 */
export function localizeLanguage(language: Language, locale: Locale): LocalizedLanguage {
  return {
    ...language,
    description: getLocalizedText(language.description, locale),
    speakers: {
      ...language.speakers,
      countries: getLocalizedArray(language.speakers.countries, locale)
    },
    regions: getLocalizedArray(language.regions, locale),
    family: getLocalizedText(language.family, locale),
    script: getLocalizedText(language.script, locale),
    tags: language.tags ? getLocalizedArray(language.tags, locale) : undefined,
    studyTime: language.studyTime ? getLocalizedText(language.studyTime, locale) : undefined,
    usage: language.usage ? getLocalizedArray(language.usage, locale) : undefined,
    resources: language.resources ? getLocalizedArray(language.resources, locale) : undefined,

    // 详细文化信息
    culturalInfo: language.culturalInfo ? {
      history: getLocalizedText(language.culturalInfo.history, locale),
      traditions: getLocalizedArray(language.culturalInfo.traditions, locale),
      festivals: getLocalizedArray(language.culturalInfo.festivals, locale),
      cuisine: getLocalizedArray(language.culturalInfo.cuisine, locale),
      arts: getLocalizedArray(language.culturalInfo.arts, locale),
      modernCulture: getLocalizedArray(language.culturalInfo.modernCulture, locale)
    } : undefined,

    // 语言元数据
    metadata: language.metadata ? {
      ...language.metadata,
      family: getLocalizedText(language.metadata.family, locale),
      branch: language.metadata.branch ? getLocalizedText(language.metadata.branch, locale) : undefined,
      writingSystem: getLocalizedArray(language.metadata.writingSystem, locale)
    } : undefined,

    // 学习指导
    learningGuide: language.learningGuide ? {
      learningPath: language.learningGuide.learningPath.map(item => ({
        ...item,
        title: getLocalizedText(item.title, locale),
        description: getLocalizedText(item.description, locale),
        level: getLocalizedText(item.level, locale),
        skills: getLocalizedArray(item.skills, locale)
      })),
      learningMethods: language.learningGuide.learningMethods?.map(method => ({
        ...method,
        title: getLocalizedText(method.title, locale),
        description: getLocalizedText(method.description, locale),
        techniques: getLocalizedArray(method.techniques, locale)
      })),
      learningTools: language.learningGuide.learningTools?.map(tool => ({
        ...tool,
        category: getLocalizedText(tool.category, locale),
        tools: getLocalizedArray(tool.tools, locale)
      }))
    } : undefined,

    // 学习时间估算
    learningTimeEstimate: language.learningTimeEstimate ? {
      ...language.learningTimeEstimate,
      beginner: getLocalizedText(language.learningTimeEstimate.beginner, locale),
      intermediate: getLocalizedText(language.learningTimeEstimate.intermediate, locale),
      advanced: getLocalizedText(language.learningTimeEstimate.advanced, locale)
    } : undefined,

    // 学习资源
    learningResources: language.learningResources ? {
      apps: language.learningResources.apps.map(app => ({
        ...app,
        description: getLocalizedText(app.description, locale),
        price: getLocalizedText(app.price, locale)
      })),
      books: language.learningResources.books.map(book => ({
        ...book,
        level: getLocalizedText(book.level, locale)
      })),
      websites: language.learningResources.websites.map(website => ({
        ...website,
        description: getLocalizedText(website.description, locale)
      }))
    } : undefined,

    // 职业机会
    careerOpportunities: language.careerOpportunities ? {
      ...language.careerOpportunities,
      industries: getLocalizedArray(language.careerOpportunities.industries, locale),
      averageSalary: getLocalizedText(language.careerOpportunities.averageSalary, locale),
      jobGrowth: getLocalizedText(language.careerOpportunities.jobGrowth, locale)
    } : undefined,

    // 旅游优势
    travelAdvantages: language.travelAdvantages ? {
      countries: getLocalizedArray(language.travelAdvantages.countries, locale),
      businessHubs: getLocalizedArray(language.travelAdvantages.businessHubs, locale),
      culturalSites: getLocalizedArray(language.travelAdvantages.culturalSites, locale)
    } : undefined,

    // 兼容字段
    writingSystem: language.writingSystem ? getLocalizedArray(language.writingSystem, locale) : undefined
  }
}

/**
 * 将双语TocItem数组转换为单语TocItem数组
 */
function localizeTocItems(items: TocItem[], locale: Locale): LocalizedTocItem[] {
  return items.map(item => ({
    ...item,
    title: getLocalizedText(item.title, locale),
    children: item.children ? localizeTocItems(item.children, locale) : undefined
  }))
}

/**
 * 将双语CultureArticle对象转换为单语CultureArticle对象
 */
export function localizeCultureArticle(article: CultureArticle, locale: Locale): LocalizedCultureArticle {
  return {
    ...article,
    title: getLocalizedText(article.title, locale),
    summary: getLocalizedText(article.summary, locale),
    content: getLocalizedText(article.content, locale),
    tableOfContents: localizeTocItems(article.tableOfContents, locale),
    author: article.author ? getLocalizedText(article.author, locale) : undefined,
    metaDescription: getLocalizedText(article.metaDescription, locale),
    keywords: getLocalizedArray(article.keywords, locale)
  }
}

/**
 * 获取本地化的语言数组
 */
export function getLocalizedLanguages(languages: Language[], locale: Locale): LocalizedLanguage[] {
  return languages.map(lang => localizeLanguage(lang, locale))
}

/**
 * 获取本地化的文化文章数组
 */
export function getLocalizedArticles(articles: CultureArticle[], locale: Locale): LocalizedCultureArticle[] {
  return articles.map(article => localizeCultureArticle(article, locale))
}

/**
 * 获取单个本地化的语言
 */
export function getLocalizedLanguageById(
  languages: Language[],
  id: string,
  locale: Locale
): LocalizedLanguage | undefined {
  const language = languages.find(lang => lang.id === id)
  return language ? localizeLanguage(language, locale) : undefined
}

/**
 * 获取单个本地化的文章（通过ID）
 */
export function getLocalizedArticleById(
  articles: CultureArticle[],
  id: string,
  locale: Locale
): LocalizedCultureArticle | undefined {
  const article = articles.find(art => art.id === id)
  return article ? localizeCultureArticle(article, locale) : undefined
}

/**
 * 获取单个本地化的文章（通过slug）
 */
export function getLocalizedArticleBySlug(
  articles: CultureArticle[],
  slug: string,
  locale: Locale
): LocalizedCultureArticle | undefined {
  const article = articles.find(art => art.slug === slug)
  return article ? localizeCultureArticle(article, locale) : undefined
}

// ============================================
// Learning Methods Utilities
// ============================================

/**
 * Localized Learning Method Article type
 */
export type LocalizedMethodArticle = Omit<LearningMethodArticle,
  'title' | 'summary' | 'content' | 'author' | 'toc' | 'methodInfo' | 'recommendedTools' | 'videoTutorials'
> & {
  title: string
  summary: string
  content: string
  author?: string
  toc?: Array<{
    id: string
    title: string
    level: number
    children?: Array<{
      id: string
      title: string
      level: number
    }>
  }>
  methodInfo: {
    principle: string
    steps: string[]
    expectedResults: string
    difficulty: 1 | 2 | 3 | 4 | 5
  }
  recommendedTools?: Array<{
    name: string
    description: string
    url: string
    price: string
    platforms: string[]
    rating?: number
    difficulty?: number
  }>
  videoTutorials?: Array<{
    title: string
    url: string
    platform: string
    duration?: string
    thumbnail?: string
  }>
}

/**
 * 将双语LearningMethodArticle转换为单语
 */
function localizeMethodTocItems(items: MethodTocItem[], locale: Locale): LocalizedMethodArticle['toc'] {
  return items.map(item => ({
    id: item.id,
    title: getLocalizedText(item.title, locale),
    level: item.level,
    children: item.children ? localizeMethodTocItems(item.children, locale) as any : undefined
  }))
}

export function localizeMethodArticle(method: LearningMethodArticle, locale: Locale): LocalizedMethodArticle {
  return {
    ...method,
    title: getLocalizedText(method.title, locale),
    summary: getLocalizedText(method.summary, locale),
    content: getLocalizedText(method.content, locale),
    author: method.author ? getLocalizedText(method.author, locale) : undefined,
    toc: method.toc ? localizeMethodTocItems(method.toc, locale) : undefined,
    methodInfo: {
      principle: getLocalizedText(method.methodInfo.principle, locale),
      steps: getLocalizedArray(method.methodInfo.steps, locale),
      expectedResults: getLocalizedText(method.methodInfo.expectedResults, locale),
      difficulty: method.methodInfo.difficulty
    },
    recommendedTools: method.recommendedTools?.map(tool => ({
      name: tool.name,
      description: getLocalizedText(tool.description, locale),
      url: tool.url,
      price: tool.price,
      platforms: tool.platforms,
      rating: tool.rating,
      difficulty: tool.difficulty
    })),
    videoTutorials: method.videoTutorials?.map(video => ({
      title: getLocalizedText(video.title, locale),
      url: video.url,
      platform: video.platform,
      duration: video.duration,
      thumbnail: video.thumbnail
    }))
  }
}

/**
 * 获取本地化的学习方法数组
 */
export function getLocalizedMethods(
  methods: LearningMethodArticle[],
  locale: Locale
): LocalizedMethodArticle[] {
  return methods.map(method => localizeMethodArticle(method, locale))
}

/**
 * 获取单个本地化的学习方法(通过slug)
 */
export function getLocalizedMethodBySlug(
  methods: LearningMethodArticle[],
  slug: string,
  locale: Locale
): LocalizedMethodArticle | undefined {
  const method = methods.find(m => m.slug === slug)
  return method ? localizeMethodArticle(method, locale) : undefined
}

/**
 * 获取相关学习方法推荐
 */
export function getRelatedMethods(
  currentMethod: LearningMethodArticle,
  allMethods: LearningMethodArticle[],
  locale: Locale,
  limit: number = 3
): LocalizedMethodArticle[] {
  const related = allMethods
    .filter(m => m.id !== currentMethod.id)
    .map(m => {
      let score = 0
      // 优先级1: 相同方法类型 (权重: 3)
      if (m.methodType === currentMethod.methodType) score += 3

      // 优先级2: 解决相同痛点 (权重: 2 * 共享痛点数)
      const sharedChallenges = m.challenges.filter(c =>
        currentMethod.challenges.includes(c)
      )
      score += sharedChallenges.length * 2

      // 优先级3: 相同学习阶段 (权重: 1)
      if (m.level === currentMethod.level || m.level === 'all' || currentMethod.level === 'all') {
        score += 1
      }

      return { method: m, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.method)

  return getLocalizedMethods(related, locale)
}

// ============================================
// Learning Resources Utilities
// ============================================

/**
 * Localized Learning Resource type
 */
export type LocalizedResource = Omit<LearningResource,
  'name' | 'summary' | 'description' | 'highlights' | 'idealFor' | 'limitations' | 'tutorials' | 'userFeedback'
> & {
  name: string
  summary: string
  description: string
  highlights: string[]
  idealFor: string[]
  limitations?: string[]
  tutorials?: Array<{
    title: string
    url: string
    type: string
  }>
  userFeedback?: {
    averageUserRating?: number
    totalUserRatings?: number
    reviews?: Array<{
      id: string
      userName: string
      locale: Locale
      rating: number
      title?: string
      content: string
      createdAt: string
      updatedAt?: string
    }>
  }
}

/**
 * 将双语LearningResource转换为单语
 */
export function localizeResource(resource: LearningResource, locale: Locale): LocalizedResource {
  return {
    ...resource,
    name: getLocalizedText(resource.name, locale),
    summary: getLocalizedText(resource.summary, locale),
    description: getLocalizedText(resource.description, locale),
    highlights: getLocalizedArray(resource.highlights, locale),
    idealFor: getLocalizedArray(resource.idealFor, locale),
    limitations: resource.limitations ? getLocalizedArray(resource.limitations, locale) : undefined,
    tutorials: resource.tutorials?.map(tutorial => ({
      title: getLocalizedText(tutorial.title, locale),
      url: tutorial.url,
      type: tutorial.type
    })),
    userFeedback: resource.userFeedback
  }
}

/**
 * 获取本地化的学习资源数组
 */
export function getLocalizedResources(
  resources: LearningResource[],
  locale: Locale,
  options?: {
    filters?: Partial<ResourceFiltersState>
    sortBy?: ResourceSortBy
  }
): LocalizedResource[] {
  const localized = resources.map(resource => localizeResource(resource, locale))
  const filtered = options?.filters ? filterResources(localized, options.filters) : localized
  return options?.sortBy ? sortResources(filtered, options.sortBy) : filtered
}

/**
 * 获取单个本地化的学习资源(通过slug)
 */
export function getLocalizedResourceBySlug(
  resources: LearningResource[],
  slug: string,
  locale: Locale
): LocalizedResource | undefined {
  const resource = resources.find(r => r.slug === slug)
  return resource ? localizeResource(resource, locale) : undefined
}

/**
 * 过滤学习资源
 */
export function filterResources(
  resources: LocalizedResource[],
  filters: Partial<ResourceFiltersState>
): LocalizedResource[] {
  return resources.filter(resource => {
    const {
      category,
      skillFocus,
      proficiency,
      languages,
      price,
      searchQuery
    } = filters

    // Category filter
    if (category && resource.category !== category) {
      return false
    }

    // Skill focus filter (multi-select, OR logic)
    if (skillFocus && skillFocus.length > 0) {
      const hasMatchingSkill = skillFocus.some(skill => resource.skillFocus.includes(skill))
      if (!hasMatchingSkill) return false
    }

    // Proficiency level filter
    if (proficiency && proficiency !== 'all') {
      if (resource.proficiency !== 'all' && resource.proficiency !== proficiency) {
        return false
      }
    }

    // Languages filter (multi-select, OR logic)
    if (languages && languages.length > 0) {
      const hasMatchingLanguage = languages.some(lang =>
        lang === 'all' ||
        resource.languages.includes(lang) ||
        resource.languages.includes('all')
      )
      if (!hasMatchingLanguage) return false
    }

    // Price filter
    if (price && resource.price !== price) {
      return false
    }

    // Search query filter (searches in name, summary, tags)
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      const searchableText = [
        resource.name.toLowerCase(),
        resource.summary.toLowerCase(),
        resource.description.toLowerCase(),
        ...resource.tags.map(t => t.toLowerCase())
      ].join(' ')

      if (!searchableText.includes(query)) return false
    }

    return true
  })
}

/**
 * 资源排序
 */
export function sortResources(
  resources: LocalizedResource[],
  sortBy: ResourceSortBy
): LocalizedResource[] {
  const sorted = [...resources]

  switch (sortBy) {
    case 'rating':
      sorted.sort((a, b) => (b.ratings?.average ?? 0) - (a.ratings?.average ?? 0))
      break
    case 'tutorials':
      sorted.sort((a, b) => (b.tutorials?.length ?? 0) - (a.tutorials?.length ?? 0))
      break
    case 'updated':
    default:
      sorted.sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime()
        const dateB = new Date(b.updatedAt).getTime()
        const safeA = Number.isNaN(dateA) ? 0 : dateA
        const safeB = Number.isNaN(dateB) ? 0 : dateB
        return safeB - safeA
      })
      break
  }

  return sorted
}

export interface ResourceStats {
  totalResources: number
  languagesCovered: number
  categories: number
  updatedThisWeek: number
}

export function getResourceStats(resources: LearningResource[]): ResourceStats {
  const totalResources = resources.length
  const languages = new Set<string>()
  const categories = new Set<string>()
  const now = Date.now()
  const oneWeekMs = 7 * 24 * 60 * 60 * 1000

  let updatedThisWeek = 0

  resources.forEach(resource => {
    resource.languages.forEach(lang => {
      if (lang !== 'all') {
        languages.add(lang)
      }
    })
    categories.add(resource.category)

    const updatedAt = new Date(resource.updatedAt).getTime()
    if (!Number.isNaN(updatedAt) && now - updatedAt <= oneWeekMs) {
      updatedThisWeek += 1
    }
  })

  return {
    totalResources,
    languagesCovered: languages.size,
    categories: categories.size,
    updatedThisWeek
  }
}
