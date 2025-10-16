'use server'

import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Locale } from '@/types/i18n'
import { LOCALE_COOKIE_KEY } from '@/lib/locale-server'

export async function setLocaleAction(locale: Locale) {
  cookies().set(LOCALE_COOKIE_KEY, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })

  const referer = headers().get('referer')
  if (referer) {
    try {
      const url = new URL(referer)
      url.searchParams.set('lang', locale)
      redirect(url.toString())
    } catch {
      redirect(referer)
    }
  }

  redirect('/')
}
