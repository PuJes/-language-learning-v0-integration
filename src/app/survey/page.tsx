import type { Metadata } from 'next'
import Link from 'next/link'
import LanguageSurveyPage from '../../../v0-components/LanguageSurveyPage'
import { createSeoMetadata } from '@/lib/seo'

const path = '/survey'
const languageAlternates = {
  zh: `${path}?lang=zh`,
}

const heroCopy = {
  title: 'Language Learning Survey',
  description:
    'Answer a quick set of questions about your goals, motivations, and time commitment so we can recommend the most fitting language and study plan.',
}

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title: heroCopy.title,
    description: heroCopy.description,
    path,
    locale: 'en',
    keywords: [
      'language learning survey',
      'Wordora assessment',
      'language recommendation quiz',
      'language placement survey',
    ],
    robots: {
      index: false,
      follow: false,
    },
    languageAlternates,
  })
}

export default function SurveyRoute() {
  return (
    <div className="bg-background pb-16">
      <section className="bg-gradient-to-b from-primary/10 to-background border-b">
        <div className="container mx-auto px-4 py-16 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {heroCopy.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">{heroCopy.description}</p>
            <p className="text-sm text-muted-foreground/80">
              Already have results?{' '}
              <Link href="/recommendation" className="underline underline-offset-4 font-medium">
                View your recommendations
              </Link>{' '}
              to pick up where you left off.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12">
        <div className="rounded-lg border bg-card">
          <div className="p-6 border-b bg-muted/30">
            <h2 className="text-xl font-semibold text-foreground">Survey Overview</h2>
            <p className="text-sm text-muted-foreground mt-1">
              This interactive form runs entirely in the browser. We provide a summary below so the
              experience remains usable with reduced JavaScript support.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <article className="rounded-md border border-dashed p-4 bg-muted/20 space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Fallback Summary</h3>
              <p className="text-sm text-muted-foreground">
                Share your preferred learning pace, cultural interests, and prior experience so our
                AI system can map you to the best language options. We score each response against
                difficulty, career value, and motivation alignment.
              </p>
            </article>

            <LanguageSurveyPage />

            <noscript>
              <div className="rounded-md border border-yellow-500/40 bg-yellow-100 text-yellow-900 p-4 text-sm">
                JavaScript is disabled, so the interactive survey cannot be displayed. Please enable
                JavaScript to submit responses and receive your recommendations.
              </div>
            </noscript>
          </div>
        </div>
      </section>
    </div>
  )
}
