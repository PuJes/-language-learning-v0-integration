import { NextResponse } from 'next/server'
import {
  appendRecommendationFeedback,
  readRecommendationFeedback,
  type RecommendedLanguageSnapshot,
} from '@/lib/recommendation-feedback-storage'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type FeedbackPayload = {
  rating?: number
  comment?: string
  surveySubmissionId?: string
  selectedLanguageId?: string | null
  recommendedLanguages?: RecommendedLanguageSnapshot[]
  metadata?: Record<string, unknown>
}

export async function GET() {
  try {
    const feedback = await readRecommendationFeedback()
    return NextResponse.json({ feedback })
  } catch (error) {
    console.error('Failed to read recommendation feedback', error)
    return NextResponse.json({ error: 'Failed to load recommendation feedback' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as FeedbackPayload

    if (typeof payload.rating !== 'number' || Number.isNaN(payload.rating)) {
      return NextResponse.json({ error: 'Rating is required.' }, { status: 400 })
    }

    if (payload.rating < 1 || payload.rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5.' }, { status: 400 })
    }

    const recommendedLanguages: RecommendedLanguageSnapshot[] =
      Array.isArray(payload.recommendedLanguages) && payload.recommendedLanguages.length > 0
        ? payload.recommendedLanguages
        : []

    const feedback = await appendRecommendationFeedback({
      rating: Math.round(payload.rating * 10) / 10,
      comment: payload.comment,
      surveySubmissionId: payload.surveySubmissionId,
      selectedLanguageId: payload.selectedLanguageId,
      recommendedLanguages,
      metadata: payload.metadata,
    })

    return NextResponse.json({ success: true, feedbackId: feedback.id })
  } catch (error) {
    console.error('Failed to save recommendation feedback', error)
    return NextResponse.json({ error: 'Failed to save recommendation feedback' }, { status: 500 })
  }
}
