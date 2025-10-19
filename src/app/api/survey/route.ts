import { NextResponse } from 'next/server'
import {
  appendSurveySubmission,
  readSurveySubmissions,
  type SurveyAnswer,
} from '@/lib/survey-storage'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type IncomingSurveyPayload = {
  answers?: SurveyAnswer[]
  userSource?: string
  contentInterest?: string
  nativeLanguage?: string
  languageExperience?: string
  learningPurpose?: string
  timeExpectation?: string
  culturalInterest?: string | string[]
  learningStyle?: string
  persistence?: string
  difficultyPreference?: string
  dailyTime?: string
}

export async function GET() {
  try {
    const submissions = await readSurveySubmissions()
    return NextResponse.json({ submissions })
  } catch (error) {
    console.error('Failed to read survey submissions', error)
    return NextResponse.json({ error: 'Failed to load survey submissions' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IncomingSurveyPayload

    if (!Array.isArray(payload.answers) || payload.answers.length === 0) {
      return NextResponse.json({ error: 'Invalid survey data' }, { status: 400 })
    }

    const submission = await appendSurveySubmission({
      answers: payload.answers,
      userSource: payload.userSource,
      contentInterest: payload.contentInterest,
      nativeLanguage: payload.nativeLanguage,
      languageExperience: payload.languageExperience,
      learningPurpose: payload.learningPurpose,
      timeExpectation: payload.timeExpectation,
      culturalInterest: payload.culturalInterest,
      learningStyle: payload.learningStyle,
      persistence: payload.persistence,
      difficultyPreference: payload.difficultyPreference,
      dailyTime: payload.dailyTime,
    })

    return NextResponse.json({ success: true, submissionId: submission.id })
  } catch (error) {
    console.error('Failed to save survey submission', error)
    return NextResponse.json({ error: 'Failed to save survey submission' }, { status: 500 })
  }
}
