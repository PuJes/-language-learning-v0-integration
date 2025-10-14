'use client'

import { METHOD_TYPE_LABELS, CHALLENGE_LABELS, LEVEL_LABELS } from '@/types/learning-methods'
import type { LocalizedMethodArticle } from '@/lib/utils/i18n-data'
import { useTranslation } from '@/hooks/useTranslation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Target } from 'lucide-react'

interface LearningMethodCardProps {
  method: LocalizedMethodArticle
}

export function LearningMethodCard({ method }: LearningMethodCardProps) {
  const { t, locale } = useTranslation()

  return (
    <Link href={`/learning-methods/${method.slug}`} className="h-full block">
      <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden flex-shrink-0 bg-muted">
          <Image
            src={method.coverImage}
            alt={method.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Method Type Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="default" className="gap-1 bg-primary/90 backdrop-blur-sm">
              <span>{METHOD_TYPE_LABELS[method.methodType].icon}</span>
              <span>{METHOD_TYPE_LABELS[method.methodType][locale]}</span>
            </Badge>
          </div>
          {/* Difficulty Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="gap-1 bg-background/90 backdrop-blur-sm">
              {[...Array(method.methodInfo.difficulty)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </Badge>
          </div>
        </div>

        <CardHeader className="flex-shrink-0 pb-3">
          <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
            {method.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col space-y-4 pt-0">
          {/* Summary */}
          <p className="text-sm text-muted-foreground line-clamp-3 min-h-[4.5rem]">
            {method.summary}
          </p>

          {/* Key Information */}
          <div className="space-y-2 text-sm">
            {/* Reading Time */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>{method.readingTime} {t.learningMethods.readingTime}</span>
            </div>

            {/* Learning Level */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-4 w-4 flex-shrink-0" />
              <span>{LEVEL_LABELS[method.level][locale]}</span>
            </div>
          </div>

          {/* Challenge Tags */}
          <div className="flex flex-wrap gap-2 min-h-[2rem]">
            {method.challenges.slice(0, 3).map(challenge => {
              const challengeMeta = CHALLENGE_LABELS[challenge as keyof typeof CHALLENGE_LABELS]
              if (!challengeMeta) return null
              return (
                <Badge key={challenge} variant="secondary" className="gap-1 text-xs">
                  <span>{challengeMeta.icon}</span>
                  <span>{challengeMeta[locale]}</span>
                </Badge>
              )
            })}
            {method.challenges.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{method.challenges.length - 3}
              </Badge>
            )}
          </div>

          {/* Expected Results */}
          <div className="mt-auto pt-4 border-t">
            <p className="text-xs text-muted-foreground italic line-clamp-2">
              💡 {method.methodInfo.expectedResults}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
