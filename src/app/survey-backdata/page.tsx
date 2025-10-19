import { readSurveySubmissions, type SurveySubmission } from '@/lib/survey-storage'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const META_FIELDS: Array<{ key: keyof SurveySubmission; label: string }> = [
  { key: 'userSource', label: 'User Source' },
  { key: 'contentInterest', label: 'Content Interest' },
  { key: 'nativeLanguage', label: 'Native Language' },
  { key: 'languageExperience', label: 'Language Experience' },
  { key: 'learningPurpose', label: 'Learning Purpose' },
  { key: 'timeExpectation', label: 'Time Expectation' },
  { key: 'culturalInterest', label: 'Cultural Interest' },
  { key: 'learningStyle', label: 'Learning Style' },
  { key: 'persistence', label: 'Persistence' },
  { key: 'difficultyPreference', label: 'Difficulty Preference' },
  { key: 'dailyTime', label: 'Daily Time Commitment' },
]

const formatFieldValue = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : '—'
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return value
  }

  return '—'
}

export default async function SurveyBackdataPage() {
  const submissions = await readSurveySubmissions()

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-gray-900">Survey Submissions</h1>
        <p className="mt-2 text-gray-600">
          {submissions.length > 0
            ? `Collected ${submissions.length} submission${submissions.length > 1 ? 's' : ''}.`
            : 'No survey submissions recorded yet.'}
        </p>

        {submissions.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            Fill out the questionnaire once to see data appear here.
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {submissions
              .slice()
              .reverse()
              .map((submission) => (
                <article
                  key={submission.id}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Submitted</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {new Date(submission.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      {submission.answers.length} answers
                    </span>
                  </div>

                  <dl className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {META_FIELDS.map(({ key, label }) => {
                      const value = submission[key] as string | string[] | undefined
                      return (
                        <div
                          key={key}
                          className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {label}
                          </dt>
                          <dd className="mt-1 text-sm text-slate-800">{formatFieldValue(value)}</dd>
                        </div>
                      )
                    })}
                  </dl>

                  <details className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-700">
                      View raw answers
                    </summary>
                    <pre className="mt-4 max-h-80 overflow-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
                      {JSON.stringify(submission.answers, null, 2)}
                    </pre>
                  </details>
                </article>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
