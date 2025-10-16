'use client'

import { useEffect } from 'react'
import type { Locale } from '@/types/i18n'
import { useLanguageStore } from '@/store/language'

export function LocaleHydrator({ locale }: { locale: Locale }) {
  const setLocale = useLanguageStore(state => state.setLocale)

  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  return null
}
