'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/button'

export default function ComingSoonPageClient() {
  const { t } = useTranslation()

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-purple-50 via-teal-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-purple-100 bg-white/80 p-12 text-center shadow-xl backdrop-blur">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-200 to-teal-200">
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{t.common.comingSoon}</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            {t.common.featureInProgress}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg" variant="default">
                {t.common.backToHome}
              </Button>
            </Link>
            <Link href="/survey">
              <Button size="lg" variant="outline">
                {t.common.startExploring}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
