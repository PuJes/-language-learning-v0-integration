'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/hooks/useTranslation'
import type { LocalizedResource } from '@/lib/utils/i18n-data'
import { Star, UserCircle2 } from 'lucide-react'

interface ResourceReviewsProps {
  resource: LocalizedResource
}

export function ResourceReviews({ resource }: ResourceReviewsProps) {
  const { t } = useTranslation()

  const reviews = resource.userFeedback?.reviews ?? []
  const averageRating = resource.userFeedback?.averageUserRating ?? resource.ratings?.average
  const totalRatings = resource.userFeedback?.totalUserRatings ?? resource.ratings?.basedOn

  return (
    <Card>
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <CardTitle>{t.resources.userReviews}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {totalRatings
              ? t.resources.basedOnReviews.replace('{count}', totalRatings.toLocaleString())
              : t.resources.noReviewsYet}
          </p>
        </div>
        <Button variant="outline" className="gap-2" disabled>
          {t.resources.submitReview}
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Summary */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Star className="h-8 w-8 text-yellow-500 fill-yellow-400" />
            <div>
              <p className="text-2xl font-bold">{averageRating ? averageRating.toFixed(1) : '—'}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {t.resources.averageRating}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews list */}
        {reviews.length === 0 ? (
          <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            <p>{t.resources.beFirstToReview}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="rounded-lg border bg-muted/30 p-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <UserCircle2 className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{review.userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-400" />
                  <span>{review.rating.toFixed(1)}</span>
                </div>
                </div>
                {review.title && (
                  <p className="font-medium">{review.title}</p>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {review.content}
                </p>
              </div>
            ))}
            {reviews.length > 3 && (
              <Button variant="ghost" className="w-full gap-2">
                {t.resources.loadMoreReviews}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
