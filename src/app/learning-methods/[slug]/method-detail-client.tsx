'use client'

import { useTranslation } from '@/hooks/useTranslation'
import type { LocalizedMethodArticle } from '@/lib/utils/i18n-data'
import { METHOD_TYPE_LABELS, LEVEL_LABELS, CHALLENGE_LABELS } from '@/types/learning-methods'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ToolRecommendationCard } from '@/components/tool-recommendation-card'
import { LearningMethodCard } from '@/components/learning-method-card'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, BookOpen, Clock, Target, Lightbulb, CheckCircle2, Video } from 'lucide-react'

interface MethodDetailClientProps {
  method: LocalizedMethodArticle
  relatedMethods: LocalizedMethodArticle[]
}

export function MethodDetailClient({ method, relatedMethods }: MethodDetailClientProps) {
  const { t, locale } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background border-b">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button variant="ghost" asChild size="sm">
              <Link href="/learning-methods">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.learningMethods.backToMethods}
              </Link>
            </Button>
          </div>

          {/* Title & Meta */}
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="gap-1">
                <span>{METHOD_TYPE_LABELS[method.methodType].icon}</span>
                <span>{METHOD_TYPE_LABELS[method.methodType][locale]}</span>
              </Badge>
              <Badge variant="secondary">
                {LEVEL_LABELS[method.level][locale]}
              </Badge>
              <Badge variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                {method.readingTime} {t.learningMethods.readingTime}
              </Badge>
              <Badge variant="outline">
                {[...Array(method.methodInfo.difficulty)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{method.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{method.summary}</p>

            {/* Challenges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {method.challenges.map(challenge => (
                <Badge key={challenge} variant="secondary" className="gap-1">
                  <span>{CHALLENGE_LABELS[challenge].icon}</span>
                  <span>{CHALLENGE_LABELS[challenge][locale]}</span>
                </Badge>
              ))}
            </div>

            {method.author && (
              <p className="text-sm text-muted-foreground">
                By {method.author} • {new Date(method.publishDate).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Expected Results Card */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {t.learningMethods.expectedResults}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{method.methodInfo.expectedResults}</p>
              </CardContent>
            </Card>

            {/* Method Principle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  {t.learningMethods.methodPrinciple}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{method.methodInfo.principle}</p>
              </CardContent>
            </Card>

            {/* Implementation Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  {t.learningMethods.implementationSteps}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {method.methodInfo.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="flex-1 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Main Article Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  详细指南
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />
                      ),
                    }}
                  >
                    {method.content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Tools */}
            {method.recommendedTools && method.recommendedTools.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6" />
                  {t.learningMethods.recommendedTools}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {method.recommendedTools.map((tool, index) => (
                    <ToolRecommendationCard key={index} tool={tool} />
                  ))}
                </div>
              </div>
            )}

            {/* Video Tutorials */}
            {method.videoTutorials && method.videoTutorials.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Video className="h-6 w-6" />
                  {t.learningMethods.videoTutorials}
                </h2>
                <div className="space-y-4">
                  {method.videoTutorials.map((video, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-medium mb-1">{video.title}</h4>
                            <p className="text-sm text-muted-foreground capitalize">{video.platform}</p>
                          </div>
                          {video.duration && (
                            <Badge variant="outline">{video.duration}</Badge>
                          )}
                        </div>
                        <Button asChild variant="outline" size="sm" className="mt-3 w-full">
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            观看视频
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            {method.toc && method.toc.length > 0 && (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-base">{t.learningMethods.tableOfContents}</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {method.toc.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Methods */}
        {relatedMethods.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <h2 className="text-3xl font-bold mb-6">{t.learningMethods.relatedMethods}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMethods.map(relatedMethod => (
                <LearningMethodCard key={relatedMethod.id} method={relatedMethod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
