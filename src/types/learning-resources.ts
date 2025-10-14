import type { Locale } from './i18n'
import type { LearningLevel } from './learning-methods'
import type { BilingualText, BilingualArray } from './index'

// Resource category enumeration
export type ResourceCategory =
  | 'app'          // Mobile/Web applications
  | 'course'       // Online courses/platforms
  | 'podcast'      // Audio content
  | 'youtube'      // Video channels
  | 'book'         // E-books/textbooks
  | 'community'    // Language exchange/forums
  | 'extension'    // Browser extensions/plugins

// Skill focus enumeration
export type SkillFocus =
  | 'listening'
  | 'speaking'
  | 'reading'
  | 'writing'
  | 'vocabulary'
  | 'grammar'
  | 'culture'
  | 'test-prep'    // Test preparation

// Pricing model enumeration
export type PriceType = 'free' | 'freemium' | 'paid' | 'subscription'

// Supported platforms
export type Platform = 'web' | 'ios' | 'android' | 'desktop'
export type InstallablePlatform = Exclude<Platform, 'web'>

// User review interface
export interface UserReview {
  id: string
  userName: string
  locale: Locale
  rating: number  // 1-5
  title?: string
  content: string
  createdAt: string
  updatedAt?: string
}

// Tutorial interface
export interface Tutorial {
  title: BilingualText
  url: string
  type: 'article' | 'video' | 'webinar'
}

// Learning resource interface
export interface LearningResource {
  id: string
  slug: string
  name: BilingualText
  summary: BilingualText
  category: ResourceCategory
  skillFocus: SkillFocus[]
  languages: string[]  // Supported or target languages
  proficiency: LearningLevel  // Suitable proficiency level
  platforms: Platform[]
  price: PriceType
  tags: string[]
  websiteUrl: string
  downloadLinks?: Partial<Record<InstallablePlatform, string>>

  // Ratings
  ratings?: {
    average: number          // 1-5
    basedOn?: number         // Number of ratings
    sources?: string[]       // Third-party review sources
  }

  // User feedback
  userFeedback?: {
    averageUserRating?: number      // Real-time user rating (1-5)
    totalUserRatings?: number
    reviews?: UserReview[]
  }

  // Detailed description
  description: BilingualText  // Markdown format
  highlights: BilingualArray  // 3-5 key highlights
  idealFor: BilingualArray    // Target audience
  limitations?: BilingualArray // Known limitations

  // Tutorials
  tutorials?: Tutorial[]

  // Metadata
  updatedAt: string
  featured?: boolean
}

// Filter state for resource listing
export interface ResourceFiltersState {
  category?: ResourceCategory
  skillFocus: SkillFocus[]
  languages: string[]
  proficiency?: LearningLevel
  price?: PriceType
  searchQuery?: string
}

export type ResourceSortBy = 'updated' | 'rating' | 'tutorials'

// Resource category labels
export const RESOURCE_CATEGORY_LABELS: Record<ResourceCategory, { zh: string; en: string; icon: string }> = {
  app: { zh: '应用程序', en: 'App', icon: '📱' },
  course: { zh: '在线课程', en: 'Course', icon: '🎓' },
  podcast: { zh: '播客', en: 'Podcast', icon: '🎙️' },
  youtube: { zh: '视频频道', en: 'YouTube', icon: '📺' },
  book: { zh: '书籍资源', en: 'Book', icon: '📚' },
  community: { zh: '社区交流', en: 'Community', icon: '👥' },
  extension: { zh: '浏览器扩展', en: 'Extension', icon: '🔌' },
}

// Skill focus labels
export const SKILL_FOCUS_LABELS: Record<SkillFocus, { zh: string; en: string; icon: string }> = {
  listening: { zh: '听力', en: 'Listening', icon: '👂' },
  speaking: { zh: '口语', en: 'Speaking', icon: '🗣️' },
  reading: { zh: '阅读', en: 'Reading', icon: '📖' },
  writing: { zh: '写作', en: 'Writing', icon: '✍️' },
  vocabulary: { zh: '词汇', en: 'Vocabulary', icon: '📝' },
  grammar: { zh: '语法', en: 'Grammar', icon: '📐' },
  culture: { zh: '文化', en: 'Culture', icon: '🌍' },
  'test-prep': { zh: '考试准备', en: 'Test Prep', icon: '📋' },
}

// Price labels
export const PRICE_LABELS: Record<PriceType, { zh: string; en: string; color: string }> = {
  free: { zh: '免费', en: 'Free', color: 'green' },
  freemium: { zh: '部分免费', en: 'Freemium', color: 'blue' },
  paid: { zh: '付费', en: 'Paid', color: 'orange' },
  subscription: { zh: '订阅制', en: 'Subscription', color: 'purple' },
}

// Platform labels
export const PLATFORM_LABELS: Record<Platform, { zh: string; en: string; icon: string }> = {
  web: { zh: '网页版', en: 'Web', icon: '🌐' },
  ios: { zh: 'iOS', en: 'iOS', icon: '🍎' },
  android: { zh: 'Android', en: 'Android', icon: '🤖' },
  desktop: { zh: '桌面版', en: 'Desktop', icon: '💻' },
}

// Helper functions to get labels in current locale
export function getResourceCategoryLabel(category: ResourceCategory, locale: Locale): string {
  return RESOURCE_CATEGORY_LABELS[category][locale]
}

export function getSkillFocusLabel(skill: SkillFocus, locale: Locale): string {
  return SKILL_FOCUS_LABELS[skill][locale]
}

export function getPriceLabel(price: PriceType, locale: Locale): string {
  return PRICE_LABELS[price][locale]
}

export function getPlatformLabel(platform: Platform, locale: Locale): string {
  return PLATFORM_LABELS[platform][locale]
}
