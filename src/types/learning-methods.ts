import type { Locale } from './i18n'

// Bilingual text types
export interface BilingualText {
  zh: string
  en: string
}

export type BilingualArray = BilingualText[]

// Method type enumeration
export type MethodType =
  | 'vocabulary'    // 词汇记忆
  | 'listening'     // 听力训练
  | 'speaking'      // 口语练习
  | 'grammar'       // 语法学习
  | 'reading'       // 阅读理解
  | 'writing'       // 写作技巧
  | 'comprehensive' // 综合方法

// Learning challenge enumeration
export type LearningChallenge =
  | 'cant-remember-words'   // 记不住单词
  | 'poor-pronunciation'    // 发音不准
  | 'cant-understand'       // 听不懂
  | 'afraid-to-speak'       // 不敢说
  | 'grammar-confusion'     // 语法混乱
  | 'slow-reading'          // 阅读速度慢
  | 'cant-write'            // 写不出来
  | 'lack-motivation'       // 缺乏动力
  | 'no-practice-partner'   // 没有练习对象
  | 'no-environment'        // 缺少语言环境
  | 'limited-time'          // 时间有限

// Learning level
export type LearningLevel = 'beginner' | 'intermediate' | 'advanced' | 'all'

// Tool interface
export interface Tool {
  name: string
  description: BilingualText
  url: string
  price: 'free' | 'freemium' | 'paid'
  platforms: ('web' | 'ios' | 'android' | 'desktop')[]
  rating?: number  // 1-5
  difficulty?: 1 | 2 | 3 | 4 | 5
}

// Video resource interface
export interface VideoResource {
  title: BilingualText
  url: string
  platform: 'youtube' | 'bilibili' | 'other'
  duration?: string  // e.g., "12:30"
  thumbnail?: string
}

// Table of contents item
export interface TocItem {
  id: string
  title: BilingualText
  level: number  // h2=2, h3=3
  children?: TocItem[]
}

// Learning method article interface
export interface LearningMethodArticle {
  // Basic information
  id: string
  slug: string
  title: BilingualText
  summary: BilingualText
  coverImage: string
  publishDate: string
  lastUpdated?: string
  author?: BilingualText
  readingTime: number  // minutes

  // Classification
  methodType: MethodType
  challenges: LearningChallenge[]  // Multiple challenges can be addressed
  level: LearningLevel

  // Language applicability
  relatedLanguages: string[]  // Language ID array, ['all'] means universal
  bestFor?: string[]          // Particularly suitable for which languages

  // Content
  content: BilingualText      // Markdown format
  toc?: TocItem[]            // Table of contents structure

  // Method metadata
  methodInfo: {
    principle: BilingualText        // Method principle
    steps: BilingualArray           // Implementation steps
    expectedResults: BilingualText  // Expected results (e.g., "500+ vocabulary after 4 weeks")
    difficulty: 1 | 2 | 3 | 4 | 5  // Implementation difficulty
  }

  // Recommended tools/resources
  recommendedTools?: Tool[]
  videoTutorials?: VideoResource[]

  // SEO
  seoKeywords?: string[]
  featured?: boolean

  // Statistics (future features)
  views?: number
  likes?: number
  effectiveness?: number  // User-rated effectiveness
}

// Method type labels
export const METHOD_TYPE_LABELS: Record<MethodType, { zh: string; en: string; icon: string }> = {
  vocabulary: { zh: '词汇记忆', en: 'Vocabulary', icon: '📚' },
  listening: { zh: '听力训练', en: 'Listening', icon: '👂' },
  speaking: { zh: '口语练习', en: 'Speaking', icon: '🗣️' },
  grammar: { zh: '语法学习', en: 'Grammar', icon: '📝' },
  reading: { zh: '阅读理解', en: 'Reading', icon: '📖' },
  writing: { zh: '写作技巧', en: 'Writing', icon: '✍️' },
  comprehensive: { zh: '综合方法', en: 'Comprehensive', icon: '🎯' },
}

// Learning challenge labels
export const CHALLENGE_LABELS: Record<LearningChallenge, { zh: string; en: string; icon: string }> = {
  'cant-remember-words': { zh: '记不住单词', en: "Can't Remember Words", icon: '🧠' },
  'poor-pronunciation': { zh: '发音不准', en: 'Poor Pronunciation', icon: '🎤' },
  'cant-understand': { zh: '听不懂', en: "Can't Understand", icon: '❓' },
  'afraid-to-speak': { zh: '不敢说', en: 'Afraid to Speak', icon: '😰' },
  'grammar-confusion': { zh: '语法混乱', en: 'Grammar Confusion', icon: '🤔' },
  'slow-reading': { zh: '阅读速度慢', en: 'Slow Reading', icon: '🐌' },
  'cant-write': { zh: '写不出来', en: "Can't Write", icon: '📄' },
  'lack-motivation': { zh: '缺乏动力', en: 'Lack of Motivation', icon: '😴' },
  'no-practice-partner': { zh: '没有练习对象', en: 'No Practice Partner', icon: '👥' },
  'no-environment': { zh: '缺少语言环境', en: 'No Immersion Environment', icon: '🌍' },
  'limited-time': { zh: '时间有限', en: 'Limited Time', icon: '⏰' },
}

// Learning level labels
export const LEVEL_LABELS: Record<LearningLevel, { zh: string; en: string }> = {
  beginner: { zh: '初学者', en: 'Beginner' },
  intermediate: { zh: '中级', en: 'Intermediate' },
  advanced: { zh: '高级', en: 'Advanced' },
  all: { zh: '全阶段', en: 'All Levels' },
}

// Helper function to get label in current locale
export function getMethodTypeLabel(type: MethodType, locale: Locale): string {
  return METHOD_TYPE_LABELS[type][locale]
}

export function getChallengeLabel(challenge: LearningChallenge, locale: Locale): string {
  return CHALLENGE_LABELS[challenge][locale]
}

export function getLevelLabel(level: LearningLevel, locale: Locale): string {
  return LEVEL_LABELS[level][locale]
}
