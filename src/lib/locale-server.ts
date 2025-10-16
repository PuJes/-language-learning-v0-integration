import { cookies } from 'next/headers'
import type { Locale } from '@/types/i18n'

export const LOCALE_COOKIE_KEY = 'locale'

export function getServerLocale(): Locale {
  const cookieValue = cookies().get(LOCALE_COOKIE_KEY)?.value
  return cookieValue === 'zh' ? 'zh' : 'en'
}

export function resolveLocale(searchParams?: { lang?: string }): Locale {
  if (searchParams?.lang === 'zh' || searchParams?.lang === 'en') {
    return searchParams.lang
  }
  return getServerLocale()
}
