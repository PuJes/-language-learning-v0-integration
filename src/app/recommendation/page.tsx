import type { Metadata } from 'next'
import Link from 'next/link'
import LanguageRecommendationPage from '../../../v0-components/LanguageRecommendationPage'
import { createSeoMetadata } from '@/lib/seo'

const path = '/recommendation'
const languageAlternates = {
  zh: `${path}?lang=zh`,
}

const heroCopy = {
  title: 'Personalized Language Recommendations',
  description:
    'Review tailored language suggestions based on your completed learning survey. Each recommendation highlights cultural insights, difficulty, and next steps to keep your momentum going.',
}

export async function generateMetadata(): Promise<Metadata> {
  return createSeoMetadata({
    title: heroCopy.title,
    description: heroCopy.description,
    path,
    locale: 'en',
    keywords: [
      'language recommendations',
      'Wordora survey results',
      'personalized language matches',
      'language learning plan',
    ],
    robots: {
      index: false,
      follow: false,
    },
    languageAlternates,
  })
}

export default function RecommendationRoute() {
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
              You can{' '}
              <Link href="/survey" className="underline underline-offset-4 font-medium">
                retake the survey
              </Link>{' '}
              at any time to refresh your recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-12">
        <div className="rounded-lg border bg-card">
          <div className="p-6 border-b bg-muted/30">
            <h2 className="text-xl font-semibold text-foreground">Recommendation Results</h2>
            <p className="text-sm text-muted-foreground mt-1">
              If you have not completed the survey yet, start with the form so we can understand
              your goals. We will always include a fallback overview for accessibility and crawlers.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="rounded-md border border-dashed p-4 bg-muted/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">Fallback Summary</h3>
              <p className="text-sm text-muted-foreground">
                Wordora analyzes language difficulty, cultural affinity, and career momentum to
                suggest a shortlist of languages. Complete the survey for tailored results including
                study plans, cultural notes, and next steps.
              </p>
            </div>

            <LanguageRecommendationPage />

            <noscript>
              <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                JavaScript is disabled, so personalized recommendations cannot be generated. Please
                enable JavaScript and retake the survey to view your results.
              </div>
            </noscript>
          </div>
        </div>
      </section>
    </div>
  )
}
