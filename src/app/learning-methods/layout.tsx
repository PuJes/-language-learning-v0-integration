import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { learningMethods } from '@/lib/data/learning-methods'
import { METHOD_TYPE_LABELS } from '@/types/learning-methods'

const methodCount = learningMethods.length
const methodTypes = Array.from(new Set(learningMethods.map(method => METHOD_TYPE_LABELS[method.methodType].zh)))

export const metadata: Metadata = {
  title: 'Learning Methods Library',
  description: `收录 ${methodCount} 种语言学习方法，涵盖 ${methodTypes.join('、')} 等类别，帮你快速匹配最适合的学习策略。`,
}

export default function LearningMethodsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
