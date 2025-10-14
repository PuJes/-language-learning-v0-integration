'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Smartphone, Globe, Monitor } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface ToolRecommendationCardProps {
  tool: {
    name: string
    description: string
    url: string
    price: string
    platforms: string[]
    rating?: number
    difficulty?: number
  }
}

export function ToolRecommendationCard({ tool }: ToolRecommendationCardProps) {
  const { t } = useTranslation()

  const priceLabels: Record<string, string> = {
    free: t.learningMethods.free,
    freemium: t.learningMethods.freemium,
    paid: t.learningMethods.paid,
  }

  const platformIcons: Record<string, React.ReactNode> = {
    web: <Globe className="h-4 w-4" />,
    ios: <Smartphone className="h-4 w-4" />,
    android: <Smartphone className="h-4 w-4" />,
    desktop: <Monitor className="h-4 w-4" />,
  }

  const priceColors: Record<string, string> = {
    free: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    freemium: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    paid: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-1">{tool.name}</h4>
            <Badge className={priceColors[tool.price] || 'bg-gray-100 text-gray-800'}>
              {priceLabels[tool.price] || tool.price}
            </Badge>
          </div>
          {tool.rating && (
            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{tool.rating}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>

        <div className="flex flex-wrap gap-2">
          {tool.platforms.map(platform => (
            <Badge key={platform} variant="outline" className="gap-1">
              {platformIcons[platform]}
              <span className="capitalize">{platform}</span>
            </Badge>
          ))}
          {tool.difficulty && (
            <Badge variant="secondary" className="gap-1">
              <span>{t.learningMethods.difficulty}:</span>
              <span>{tool.difficulty}/5</span>
            </Badge>
          )}
        </div>

        <Button asChild variant="outline" size="sm" className="w-full group">
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            {t.learningMethods.visitWebsite}
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
