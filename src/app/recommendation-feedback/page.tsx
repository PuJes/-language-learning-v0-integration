import { Star } from 'lucide-react'
import { readRecommendationFeedback } from '@/lib/recommendation-feedback-storage'
import { readSurveySubmissions, type SurveySubmission } from '@/lib/survey-storage'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const SURVEY_META_FIELDS: Array<{ key: keyof SurveySubmission; label: string }> = [
  { key: 'userSource', label: 'User Source' },
  { key: 'contentInterest', label: 'Content Interest' },
  { key: 'nativeLanguage', label: 'Native Language' },
  { key: 'languageExperience', label: 'Language Experience' },
  { key: 'learningPurpose', label: 'Primary Goal' },
  { key: 'timeExpectation', label: 'Timeline Expectation' },
  { key: 'culturalInterest', label: 'Cultural Preference' },
  { key: 'learningStyle', label: 'Learning Style' },
  { key: 'persistence', label: 'Self Evaluation' },
  { key: 'difficultyPreference', label: 'Difficulty Preference' },
  { key: 'dailyTime', label: 'Daily Commitment' },
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

export default async function RecommendationFeedbackPage() {
  const [feedbackList, surveySubmissions] = await Promise.all([
    readRecommendationFeedback(),
    readSurveySubmissions(),
  ])

  const submissionsMap = new Map(surveySubmissions.map((submission) => [submission.id, submission]))
  const sortedFeedback = feedbackList.slice().reverse()
  const averageRating =
    sortedFeedback.length > 0
      ? sortedFeedback.reduce((acc, feedback) => acc + feedback.rating, 0) / sortedFeedback.length
      : 0

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Recommendation Feedback</h1>
            <p className="mt-2 text-gray-600">
              用户评分会与对应的问卷数据和推荐列表一起保存，方便后续分析算法表现。
            </p>
          </div>
          {sortedFeedback.length > 0 && (
            <div className="rounded-2xl border border-amber-200 bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-amber-700">平均评分</p>
              <p className="flex items-center gap-2 text-xl font-semibold text-amber-600">
                <Star className="h-5 w-5 text-amber-500" fill="currentColor" strokeWidth={0} />
                {averageRating.toFixed(1)} / 5 · 共 {sortedFeedback.length} 条
              </p>
            </div>
          )}
        </div>

        {sortedFeedback.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
            目前还没有评分记录，先完成一次问卷并在推荐页提交反馈吧。
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            {sortedFeedback.map((feedback) => {
              const linkedSurvey = feedback.surveySubmissionId
                ? submissionsMap.get(feedback.surveySubmissionId)
                : undefined

              return (
                <article
                  key={feedback.id}
                  className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm backdrop-blur"
                >
                  <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Feedback ID</p>
                      <p className="text-lg font-semibold text-slate-900">{feedback.id}</p>
                      <p className="text-sm text-slate-500 mt-1">
                        {new Date(feedback.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${index < Math.round(feedback.rating) ? 'text-amber-500' : 'text-slate-300'}`}
                          fill={index < Math.round(feedback.rating) ? 'currentColor' : 'none'}
                          strokeWidth={index < Math.round(feedback.rating) ? 0 : 2}
                        />
                      ))}
                      <span className="text-sm font-medium text-amber-700">{feedback.rating.toFixed(1)} / 5</span>
                    </div>
                  </div>

                  {feedback.comment && (
                    <blockquote className="mt-6 rounded-2xl bg-amber-50/70 border border-amber-200 px-6 py-4 text-amber-800">
                      {feedback.comment}
                    </blockquote>
                  )}

                  <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <section className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                        Recommended Languages Snapshot
                      </h2>
                      {feedback.recommendedLanguages.length === 0 ? (
                        <p className="mt-3 text-sm text-slate-500">未记录推荐语言列表。</p>
                      ) : (
                        <ul className="mt-3 space-y-3 text-sm text-slate-700">
                          {feedback.recommendedLanguages.map((language) => (
                            <li
                              key={language.rank + language.id}
                              className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-semibold">
                                  #{language.rank} · {language.name}
                                </span>
                                <span className="text-slate-500">匹配度 {language.matchScore}%</span>
                              </div>
                              <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-500">
                                {typeof language.timeline === 'string' && language.timeline.length > 0 && (
                                  <span>学习周期：{language.timeline}</span>
                                )}
                                {typeof language.successProbability === 'number' && (
                                  <span>成功率：{Math.round(language.successProbability * 100)}%</span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                        Linked Survey Answers
                      </h2>
                      {linkedSurvey ? (
                        <>
                          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                            {SURVEY_META_FIELDS.map(({ key, label }) => {
                              const value = linkedSurvey[key] as string | string[] | undefined
                              return (
                                <div
                                  key={key}
                                  className="rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm text-slate-700"
                                >
                                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    {label}
                                  </p>
                                  <p className="mt-1 text-slate-800">{formatFieldValue(value)}</p>
                                </div>
                              )
                            })}
                          </div>
                          <details className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/80">
                            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-700">
                              查看原始问卷答案
                            </summary>
                            <pre className="max-h-72 overflow-auto bg-slate-900 p-4 text-xs text-slate-100">
                              {JSON.stringify(linkedSurvey.answers, null, 2)}
                            </pre>
                          </details>
                        </>
                      ) : (
                        <p className="mt-3 text-sm text-slate-500">
                          未找到对应的问卷记录（可能是提交失败或记录被删除）。
                        </p>
                      )}
                    </section>
                  </div>

                  {feedback.metadata && Object.keys(feedback.metadata).length > 0 && (
                    <details className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/80">
                      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-700">
                        其他元数据
                      </summary>
                      <pre className="max-h-64 overflow-auto bg-slate-900 p-4 text-xs text-slate-100">
                        {JSON.stringify(feedback.metadata, null, 2)}
                      </pre>
                    </details>
                  )}
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
