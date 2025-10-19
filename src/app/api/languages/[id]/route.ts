import { NextResponse } from 'next/server'
import type { Locale } from '@/types/i18n'
import { languages } from '@/lib/data/languages'
import { enhancedLanguageData } from '@/data/enhanced-languages-new'
import { getLocalizedLanguageById, localizeLanguage } from '@/lib/utils/i18n-data'

const DEFAULT_LOCALE: Locale = 'en'
export const revalidate = 43200 // 12 hours in seconds

type RouteParams = {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: RouteParams) {
  const localeParam = new URL(request.url).searchParams.get('locale')
  const locale: Locale = localeParam === 'zh' ? 'zh' : DEFAULT_LOCALE

  const baseLanguage = getLocalizedLanguageById(languages, params.id, locale)

  if (!baseLanguage) {
    return NextResponse.json(
      { error: 'Language not found' },
      { status: 404 }
    )
  }

  const enhanced = enhancedLanguageData[params.id]
  const enhancedLocalized = enhanced ? localizeLanguage(enhanced, locale) : undefined

  const language = enhancedLocalized
    ? { ...baseLanguage, ...enhancedLocalized }
    : baseLanguage

  return NextResponse.json(
    { language },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    }
  )
}
