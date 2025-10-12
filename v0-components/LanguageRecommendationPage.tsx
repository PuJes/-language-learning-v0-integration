"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import {
  Clock,
  Target,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Star,
  Brain,
  Trophy,
  ChevronRight,
} from "lucide-react"

// Import algorithm and data
import { getLanguageRecommendations } from '../src/lib/recommendation/recommendation-algorithm'
import { getAllLanguages } from '../src/lib/data/languages'
import { convertSurveyDataToResponses } from '../src/lib/utils/survey-converter'
import type { LanguageRecommendation as AlgorithmRecommendation } from '../src/lib/types/survey'

// UI Components
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost"
    size?: "sm" | "default" | "lg"
  }
>(({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    sm: "h-9 rounded-md px-3",
    default: "h-10 px-4 py-2",
    lg: "h-11 rounded-md px-8",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
  ),
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", ...props }, ref) => (
    <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", ...props }, ref) => (
    <p ref={ref} className={`text-sm text-muted-foreground ${className}`} {...props} />
  ),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />,
)
CardContent.displayName = "CardContent"

const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: number }>(
  ({ className = "", value = 0, ...props }, ref) => (
    <div ref={ref} className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`} {...props}>
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  ),
)
Progress.displayName = "Progress"

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }
>(({ className = "", variant = "default", ...props }, ref) => {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50",
  }

  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

// Tabs components
const Tabs: React.FC<{ children: React.ReactNode; defaultValue?: string; className?: string }> = ({
  children,
  defaultValue,
  className,
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || "")

  return (
    <div className={className} data-active-tab={activeTab}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, { activeTab, setActiveTab })
          : child,
      )}
    </div>
  )
}

const TabsList: React.FC<{
  children: React.ReactNode
  className?: string
  activeTab?: string
  setActiveTab?: (value: string) => void
}> = ({ children, className, activeTab, setActiveTab }) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
  >
    {React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement, { activeTab, setActiveTab })
        : child,
    )}
  </div>
)

const TabsTrigger: React.FC<{
  children: React.ReactNode
  value: string
  className?: string
  activeTab?: string
  setActiveTab?: (value: string) => void
}> = ({ children, value, className, activeTab, setActiveTab }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === value ? "bg-background text-foreground shadow-sm" : ""
    } ${className}`}
    onClick={() => setActiveTab?.(value)}
  >
    {children}
  </button>
)

const TabsContent: React.FC<{ children: React.ReactNode; value: string; className?: string; activeTab?: string }> = ({
  children,
  value,
  className,
  activeTab,
}) => {
  if (activeTab !== value) return null
  return (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  )
}

// Mock Language Data
interface Language {
  id: string
  name: string
  nativeName: string
  flag: string
  description: string
  difficulty: number
  speakers: { total: number }
  tags: string[]
  family: string
  script: string
  regions: string[]
}

interface LanguageRecommendation {
  language: Language
  matchScore: number
  personalizedDifficulty: {
    overallDifficulty: number
    factors: {
      grammar: number
      pronunciation: number
      vocabulary: number
      writing: number
    }
  }
  dimensionScores: {
    culturalMatch: number
    difficultyMatch: number
    purposeMatch: number
    timeMatch: number
    experienceMatch: number
  }
  successPrediction: {
    probability: number
    timeline: string
    factors: string[]
  }
  reasonsToLearn: string[]
  learningPath: {
    beginner: string[]
    intermediate: string[]
    advanced: string[]
  }
  resources: {
    apps: string[]
    books: string[]
    websites: string[]
  }
  culturalHighlights: string[]
}

// Mock recommendations data
const mockRecommendations: LanguageRecommendation[] = [
  {
    language: {
      id: "spanish",
      name: "Spanish",
      nativeName: "Español",
      flag: "🇪🇸",
      description: "World's second most spoken native language, popular choice for business and travel",
      difficulty: 2,
      speakers: { total: 500000000 },
      tags: ["Romance languages", "Popular for careers", "Practical for travel"],
      family: "Indo-European",
      script: "Latin alphabet",
      regions: ["Spain", "Latin America", "United States"],
    },
    matchScore: 92,
    personalizedDifficulty: {
      overallDifficulty: 2.3,
      factors: {
        grammar: 2.5,
        pronunciation: 2.0,
        vocabulary: 2.2,
        writing: 2.0,
      },
    },
    dimensionScores: {
      culturalMatch: 85,
      difficultyMatch: 90,
      purposeMatch: 95,
      timeMatch: 88,
      experienceMatch: 92,
    },
    successPrediction: {
      probability: 0.89,
      timeline: "8-12 months",
      factors: ["Relatively simple grammar", "Regular pronunciation", "Abundant resources", "Highly practical"],
    },
    reasonsToLearn: [
      "500 million users worldwide, highly practical",
      "Gateway to Latin American culture",
      "Relatively simple grammar structure",
      "Abundant learning resources",
      "Enhanced career competitiveness",
    ],
    learningPath: {
      beginner: ["Basic pronunciation", "Common vocabulary", "Present tense", "Daily conversation"],
      intermediate: ["Past tense", "Subjunctive mood", "Complex grammar", "Cultural understanding"],
      advanced: ["Literary reading", "Business Spanish", "Regional dialects", "Advanced writing"],
    },
    resources: {
      apps: ["Duolingo", "Babbel", "Busuu", "SpanishDict"],
      books: ["New Concept Spanish", "Practical Spanish Grammar"],
      websites: ["SpanishPod101", "Conjuguemos", "News in Slow Spanish"],
    },
    culturalHighlights: ["Flamenco Dance", "Spanish Bullfighting", "Latin American Magical Realism", "Cervantes Literature"],
  },
  {
    language: {
      id: "french",
      name: "French",
      nativeName: "Français",
      flag: "🇫🇷",
      description: "An elegant language synonymous with art and fashion",
      difficulty: 3,
      speakers: { total: 280000000 },
      tags: ["Romance language", "Arts and culture", "Diplomatic language"],
      family: "Indo-European",
      script: "Latin alphabet",
      regions: ["France", "Canada", "French-speaking Africa"],
    },
    matchScore: 87,
    personalizedDifficulty: {
      overallDifficulty: 3.2,
      factors: {
        grammar: 3.5,
        pronunciation: 3.8,
        vocabulary: 2.8,
        writing: 3.0,
      },
    },
    dimensionScores: {
      culturalMatch: 90,
      difficultyMatch: 82,
      purposeMatch: 88,
      timeMatch: 85,
      experienceMatch: 87,
    },
    successPrediction: {
      probability: 0.82,
      timeline: "12-18 months",
      factors: ["Complex grammar", "Pronunciation challenges", "Rich culture", "Quality resources"],
    },
    reasonsToLearn: [
      "Representative of Romantic culture",
      "Language of arts, fashion, and cuisine",
      "One of the UN official languages",
      "Immigration advantage in Canada",
      "Deep European cultural experience",
    ],
    learningPath: {
      beginner: ["French pronunciation", "Basic grammar", "Daily vocabulary", "Simple conversation"],
      intermediate: ["Complex tenses", "Subjunctive mood", "Cultural background", "Intermediate reading"],
      advanced: ["Literary appreciation", "Business French", "Academic writing", "Fluent expression"],
    },
    resources: {
      apps: ["Duolingo", "Babbel", "FluentU", "FrenchPod101"],
      books: ["Concise French Course", "Progressive French Grammar"],
      websites: ["TV5MONDE", "RFI Savoirs", "Conjuguemos"],
    },
    culturalHighlights: ["French Cuisine", "Impressionist Painting", "Champs-Élysées", "Palace of Versailles"],
  },
  {
    language: {
      id: "japanese",
      name: "Japanese",
      nativeName: "Nihongo",
      flag: "🇯🇵",
      description: "Language of anime culture and advanced technology",
      difficulty: 5,
      speakers: { total: 125000000 },
      tags: ["East Asian culture", "Anime and gaming", "Technological innovation"],
      family: "Japonic language family",
      script: "Kana and Kanji writing system",
      regions: ["Japan"],
    },
    matchScore: 78,
    personalizedDifficulty: {
      overallDifficulty: 4.8,
      factors: {
        grammar: 4.5,
        pronunciation: 3.8,
        vocabulary: 5.0,
        writing: 5.0,
      },
    },
    dimensionScores: {
      culturalMatch: 95,
      difficultyMatch: 60,
      purposeMatch: 85,
      timeMatch: 70,
      experienceMatch: 75,
    },
    successPrediction: {
      probability: 0.68,
      timeline: "24-36 months",
      factors: ["Complex writing system", "Honorific system", "Cultural depth", "High perseverance required"],
    },
    reasonsToLearn: [
      "Authentic anime and gaming culture",
      "Exploration of Japanese tech culture",
      "Unique linguistic logic",
      "Career development opportunities",
      "Deep understanding of traditional culture",
    ],
    learningPath: {
      beginner: ["Hiragana and Katakana learning", "Basic grammar", "Common kanji", "Polite expressions"],
      intermediate: ["Honorific system", "Complex grammar", "Reading practice", "Listening improvement"],
      advanced: ["Literary reading", "Business Japanese", "Cultural depth", "Fluent communication"],
    },
    resources: {
      apps: ["Duolingo", "Busuu", "JapanesePod101", "Anki"],
      books: ["Standard Japanese Textbook", "Minna no Nihongo"],
      websites: ["NHK World", "Tae Kim's Guide", "WaniKani"],
    },
    culturalHighlights: ["Tea Ceremony", "Bushido", "Cherry Blossom Culture", "Zen Philosophy"],
  },
]

// Header is now imported from @/components/header with rose theme

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="w-6 h-6 text-rose-400" />
            <span className="text-lg font-bold">Language World</span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Language World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Loading Component
const LoadingComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50 flex items-center justify-center">
      <div className="text-center">
        <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-rose-500" />
        <p className="text-lg text-gray-600">Generating your personalized recommendations...</p>
        <div className="mt-4 space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Analyzing your language background</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Calculating personalized difficulty</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Matching cultural interests</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <RefreshCw className="w-4 h-4 animate-spin text-violet-500" />
            <span>Building a tailored learning path</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Error Component
const ErrorComponent = ({ error, onRetry, onHome }: { error: string; onRetry: () => void; onHome: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 flex items-center justify-center">
      <div className="text-center">
        <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-orange-500" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Occurred</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <div className="space-x-4">
          <Button onClick={onRetry} variant="outline">
            Retake Survey
          </Button>
          <Button onClick={onHome}>Back to Home</Button>
        </div>
      </div>
    </div>
  )
}

// Main Recommendation Component
export default function LanguageRecommendationPage() {
  const [recommendations, setRecommendations] = useState<LanguageRecommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  useEffect(() => {
    const initializeRecommendations = async () => {
      try {
        setLoading(true)
        setError(null)

        // Get survey data from localStorage
        const surveyDataStr = localStorage.getItem('surveyData')
        if (!surveyDataStr) {
          setError("Survey data not found. Please complete the survey first.")
          setLoading(false)
          return
        }

        const surveyData = JSON.parse(surveyDataStr)
        console.log("Survey data loaded:", surveyData)

        // Convert survey data to algorithm format
        const responses = convertSurveyDataToResponses(surveyData)
        console.log("Converted responses:", responses)

        // Get all languages
        const languages = getAllLanguages()
        console.log("Languages loaded:", languages.length)

        // Get recommendations using real algorithm
        const algorithmRecommendations = await getLanguageRecommendations(languages, responses)
        console.log("Algorithm recommendations:", algorithmRecommendations)

        // Convert to component format
        const convertedRecommendations: LanguageRecommendation[] = algorithmRecommendations.map((rec: AlgorithmRecommendation) => ({
          language: {
            id: rec.language.id,
            name: typeof rec.language.name === 'string' ? rec.language.name : rec.language.name?.en || rec.language.nameEn || '',
            nativeName: rec.language.nativeName,
            flag: rec.language.flag,
            description: typeof rec.language.description === 'string' ? rec.language.description : rec.language.description?.en || '',
            difficulty: rec.language.difficulty,
            speakers: { total: rec.language.speakers.total },
            tags: Array.isArray(rec.language.tags) && typeof rec.language.tags[0] === 'string' ? rec.language.tags : (rec.language.tags as any)?.en || [],
            family: typeof rec.language.family === 'string' ? rec.language.family : (rec.language.family as any)?.en || '',
            script: typeof rec.language.script === 'string' ? rec.language.script : (rec.language.script as any)?.en || '',
            regions: Array.isArray(rec.language.regions) && typeof rec.language.regions[0] === 'string' ? rec.language.regions : (rec.language.regions as any)?.en || [],
          },
          matchScore: rec.matchScore,
          personalizedDifficulty: {
            overallDifficulty: rec.personalizedDifficulty.overallDifficulty,
            factors: {
              grammar: rec.language.difficultyAnalysis?.grammar || rec.language.difficulty,
              pronunciation: rec.language.difficultyAnalysis?.pronunciation || rec.language.difficulty,
              vocabulary: rec.language.difficultyAnalysis?.vocabulary || rec.language.difficulty,
              writing: rec.language.difficultyAnalysis?.writing || rec.language.difficulty,
            },
          },
          dimensionScores: {
            culturalMatch: rec.dimensionScores.culturalMatch,
            difficultyMatch: rec.dimensionScores.difficultyFit,
            purposeMatch: rec.dimensionScores.goalAlignment,
            timeMatch: rec.dimensionScores.timeFeasibility,
            experienceMatch: rec.dimensionScores.practicalValue,
          },
          successPrediction: {
            probability: rec.successPrediction.probability,
            timeline: rec.successPrediction.timeline,
            factors: [
              ...(rec.successPrediction.challengePoints || []),
              ...(rec.successPrediction.supportNeeded || [])
            ],
          },
          reasonsToLearn: [
            ...rec.reasons.primary.map(r => r.description),
            ...rec.reasons.secondary.map(r => r.description)
          ],
          learningPath: {
            beginner: rec.learningPath.phases[0]?.goals || [],
            intermediate: rec.learningPath.phases[1]?.goals || [],
            advanced: rec.learningPath.phases[2]?.goals || [],
          },
          resources: {
            apps: ["Duolingo", "Babbel", "Busuu"],
            books: ["Basic Textbook", "Grammar Guide"],
            websites: ["Official Learning Website", "Online Course Platform"],
          },
          culturalHighlights: Array.isArray(rec.language.tags) && typeof rec.language.tags[0] === 'string' ? rec.language.tags.slice(0, 4) : ((rec.language.tags as any)?.en || []).slice(0, 4),
        }))

        setRecommendations(convertedRecommendations)
        if (convertedRecommendations.length > 0) {
          setSelectedLanguage(convertedRecommendations[0].language.id)
        }
      } catch (err) {
        console.error("Error initializing recommendations:", err)
        console.error("Error details:", err instanceof Error ? err.message : String(err))
        console.error("Error stack:", err instanceof Error ? err.stack : 'No stack trace')
        setError(`Error generating recommendations: ${err instanceof Error ? err.message : String(err)}`)
      } finally {
        setLoading(false)
      }
    }

    initializeRecommendations()
  }, [])

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId)
  }

  const handleStartLearning = (languageId: string) => {
    console.log(`Starting to learn ${languageId}`)
    window.location.href = `/languages/${languageId}`
  }

  const handleRetakeSurvey = () => {
    // Clear stored survey data and navigate to survey
    localStorage.removeItem('surveyData')
    window.location.href = '/survey'
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  if (loading) {
    return <LoadingComponent />
  }

  if (error) {
    return <ErrorComponent error={error} onRetry={handleRetakeSurvey} onHome={handleGoHome} />
  }

  if (recommendations.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No recommendations yet</h1>
          <p className="text-gray-600 mb-6">Please complete the survey assessment first</p>
          <Button onClick={handleRetakeSurvey}>Start Assessment</Button>
        </div>
      </div>
    )
  }

  const selectedRecommendation = recommendations.find((rec) => rec.language.id === selectedLanguage)

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-8 bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recommendations List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-rose-500" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription>Personalized ranking tailored to your background and goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recommendations.map((recommendation, index) => (
                    <div
                      key={recommendation.language.id}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedLanguage === recommendation.language.id
                          ? "bg-violet-50 border-2 border-violet-200"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      }`}
                      onClick={() => handleLanguageSelect(recommendation.language.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{recommendation.language.flag}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900">{recommendation.language.name}</h3>
                            <p className="text-sm text-gray-500">{recommendation.language.nativeName}</p>
                          </div>
                        </div>
                        <Badge
                          variant={index === 0 ? "default" : "secondary"}
                          className={index === 0 ? "bg-gradient-to-r from-rose-400 to-violet-400 text-white" : ""}
                        >
                          #{index + 1}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Match score</span>
                          <span className="font-medium">{recommendation.matchScore}%</span>
                        </div>
                        <Progress value={recommendation.matchScore} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Personalized difficulty</span>
                          <span className="font-medium">
                            {recommendation.personalizedDifficulty.overallDifficulty.toFixed(1)}/5
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {recommendation.language.tags?.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = `/languages/${recommendation.language.id}`
                          }}
                        >
                          View details
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-4 flex gap-3">
                <Button variant="outline" onClick={handleRetakeSurvey} className="flex-1 bg-transparent">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retake Survey
                </Button>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2">
              {selectedRecommendation && (
                <div className="space-y-6">
                  {/* Language Overview */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{selectedRecommendation.language.flag}</span>
                          <div>
                            <CardTitle className="text-2xl">{selectedRecommendation.language.name}</CardTitle>
                            <CardDescription className="text-base">
                              {selectedRecommendation.language.description}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge
                          variant="default"
                          className="bg-gradient-to-r from-rose-400 to-violet-400 px-4 py-2 text-white"
                        >
                          Match score {selectedRecommendation.matchScore}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg mx-auto mb-2">
                            <Target className="h-6 w-6 text-sky-600" />
                          </div>
                          <p className="text-sm text-gray-600">Personalized difficulty</p>
                          <p className="font-semibold">
                            {selectedRecommendation.personalizedDifficulty.overallDifficulty.toFixed(1)}/5
                          </p>
                          <p className="text-xs text-gray-500">
                            (Benchmark: {selectedRecommendation.language.difficulty}/5)
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-2">
                            <Users className="h-6 w-6 text-emerald-600" />
                          </div>
                          <p className="text-sm text-gray-600">Total speakers</p>
                          <p className="font-semibold">
                            {Math.round((selectedRecommendation.language.speakers?.total || 0) / 1000000)}M
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mx-auto mb-2">
                            <Clock className="h-6 w-6 text-amber-600" />
                          </div>
                          <p className="text-sm text-gray-600">Estimated duration</p>
                          <p className="font-semibold">{selectedRecommendation.successPrediction.timeline}</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-violet-100 rounded-lg mx-auto mb-2">
                            <Trophy className="h-6 w-6 text-violet-600" />
                          </div>
                          <p className="text-sm text-gray-600">Success Rate</p>
                          <p className="font-semibold">
                            {Math.round(selectedRecommendation.successPrediction.probability * 100)}%
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleStartLearning(selectedRecommendation.language.id)}
                        className="w-full bg-gradient-to-r from-rose-400 to-violet-400 hover:from-rose-500 hover:to-violet-500"
                        size="lg"
                      >
                        Start learning {selectedRecommendation.language.name}
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Detailed Information Tabs */}
                  <Tabs defaultValue="reasons" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="reasons">Reasons to Learn</TabsTrigger>
                      <TabsTrigger value="difficulty">Difficulty Analysis</TabsTrigger>
                      <TabsTrigger value="path">Learning Path</TabsTrigger>
                      <TabsTrigger value="culture">Cultural background</TabsTrigger>
                    </TabsList>

                    <TabsContent value="reasons" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Detailed Recommendations</CardTitle>
                          <CardDescription>Personalized language recommendations based on comprehensive scoring across 5 dimensions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* Overall Match Score */}
                          <div className="p-4 bg-gradient-to-r from-sky-50 to-violet-50 rounded-xl border border-sky-200">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-lg font-semibold text-gray-900">Overall Match Score</h4>
                              <div className="text-2xl font-bold text-sky-600">
                                {selectedRecommendation.matchScore}%
                              </div>
                            </div>
                            <Progress value={selectedRecommendation.matchScore} className="h-3 mb-2" />
                            <p className="text-sm text-gray-600">
                              Based on your survey responses, this language closely matches your needs
                            </p>
                          </div>

                          {/* Dimension Scores */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Detailed dimension breakdown</h4>

                            {/* Cultural Match */}
                            <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Globe className="h-5 w-5 text-rose-500" />
                                  <span className="font-medium text-rose-900">Cultural Interest Match</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Weight 30%
                                  </Badge>
                                </div>
                                <span className="text-rose-700 font-semibold">
                                  {selectedRecommendation.dimensionScores.culturalMatch} pts
                                </span>
                              </div>
                              <Progress
                                value={selectedRecommendation.dimensionScores.culturalMatch}
                                className="h-2 mb-2"
                              />
                              <p className="text-sm text-rose-800">
                                {selectedRecommendation.dimensionScores.culturalMatch >= 80
                                  ? "Highly aligned with your chosen cultural regions; widely used in the cultures you enjoy"
                                  : selectedRecommendation.dimensionScores.culturalMatch >= 60
                                    ? "Reasonably aligned with your cultural interests and worth exploring"
                                    : "Less aligned with your cultural interests, but it still offers other advantages"}
                              </p>
                            </div>

                            {/* Difficulty Match */}
                            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Target className="h-5 w-5 text-emerald-500" />
                                  <span className="font-medium text-emerald-900">Difficulty Fit</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Weight 25%
                                  </Badge>
                                </div>
                                <span className="text-emerald-700 font-semibold">
                                  {selectedRecommendation.dimensionScores.difficultyMatch} pts
                                </span>
                              </div>
                              <Progress
                                value={selectedRecommendation.dimensionScores.difficultyMatch}
                                className="h-2 mb-2"
                              />
                              <p className="text-sm text-emerald-800">
                                Fits well with your language experience and learning preferences
                              </p>
                            </div>

                            {/* Purpose Match */}
                            <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Brain className="h-5 w-5 text-sky-500" />
                                  <span className="font-medium text-sky-900">Goal alignment</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Weight 20%
                                  </Badge>
                                </div>
                                <span className="text-sky-700 font-semibold">
                                  {selectedRecommendation.dimensionScores.purposeMatch} pts
                                </span>
                              </div>
                              <Progress
                                value={selectedRecommendation.dimensionScores.purposeMatch}
                                className="h-2 mb-2"
                              />
                              <p className="text-sm text-sky-800">
                                This language strongly supports your learning goals and intended uses
                              </p>
                            </div>

                            {/* Time Feasibility */}
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-amber-500" />
                                  <span className="font-medium text-amber-900">Time Feasibility</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Weight 15%
                                  </Badge>
                                </div>
                                <span className="text-amber-700 font-semibold">
                                  {selectedRecommendation.dimensionScores.timeMatch} pts
                                </span>
                              </div>
                              <Progress
                                value={selectedRecommendation.dimensionScores.timeMatch}
                                className="h-2 mb-2"
                              />
                              <p className="text-sm text-amber-800">
                                {selectedRecommendation.dimensionScores.timeMatch >= 80
                                  ? "Your timeframe and goals align well with studying this language"
                                  : selectedRecommendation.dimensionScores.timeMatch >= 60
                                    ? "Your schedule makes learning this language feasible"
                                    : "Expect to invest more time to hit your target outcomes"}
                              </p>
                            </div>

                            {/* Practical Value */}
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-5 w-5 text-purple-500" />
                                  <span className="font-medium text-purple-900">Practical value</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Weight 10%
                                  </Badge>
                                </div>
                                <span className="text-purple-700 font-semibold">
                                  {selectedRecommendation.dimensionScores.experienceMatch} pts
                                </span>
                              </div>
                              <Progress
                                value={selectedRecommendation.dimensionScores.experienceMatch}
                                className="h-2 mb-2"
                              />
                              <p className="text-sm text-purple-800">
                                {selectedRecommendation.dimensionScores.experienceMatch >= 80
                                  ? "This language offers strong practical value for work, academia, and daily life"
                                  : selectedRecommendation.dimensionScores.experienceMatch >= 60
                                    ? "This language has good practical utility and application prospects"
                                    : "This language has relatively lower practical value, but has its unique charm"}
                              </p>
                            </div>
                          </div>

                          {/* Reasons to Learn */}
                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-gray-900">Reasons to Learn</h4>
                            {selectedRecommendation.reasonsToLearn.map((reason, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{reason}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="difficulty" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Personalized Difficulty Analysis</CardTitle>
                          <CardDescription>Difficulty assessment tailored to your language background</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold text-gray-900">Difficulty by skill area</h4>
                              {Object.entries(selectedRecommendation.personalizedDifficulty.factors).map(
                                ([skill, difficulty]) => (
                                  <div key={skill} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                      <span className="capitalize text-gray-600">
                                        {skill === "grammar"
                                          ? "Grammar"
                                          : skill === "pronunciation"
                                            ? "Pronunciation"
                                            : skill === "vocabulary"
                                              ? "Vocabulary"
                                              : "Writing"}
                                      </span>
                                      <span className="font-medium">{difficulty.toFixed(1)}/5</span>
                                    </div>
                                    <Progress value={difficulty * 20} className="h-2" />
                                  </div>
                                ),
                              )}
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-gray-900">Success Prediction</h4>
                              <div className="p-4 bg-emerald-50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-emerald-800 font-medium">Success probability</span>
                                  <span className="text-2xl font-bold text-emerald-600">
                                    {Math.round(selectedRecommendation.successPrediction.probability * 100)}%
                                  </span>
                                </div>
                                <p className="text-sm text-emerald-700 mb-3">
                                  Estimated timeline: {selectedRecommendation.successPrediction.timeline}
                                </p>
                                <div className="space-y-1">
                                  {selectedRecommendation.successPrediction.factors.map((factor, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                                      <span className="text-sm text-emerald-700">{factor}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="path" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Personalized Learning Path</CardTitle>
                          <CardDescription>Step-by-step plan tailored for you</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {Object.entries(selectedRecommendation.learningPath).map(([level, topics]) => (
                            <div key={level} className="space-y-3">
                              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                                <span
                                  className={`w-3 h-3 rounded-full ${
                                    level === "beginner"
                                      ? "bg-emerald-400"
                                      : level === "intermediate"
                                        ? "bg-amber-400"
                                        : "bg-rose-400"
                                  }`}
                                ></span>
                                <span>
                                  {level === "beginner"
                                    ? "Beginner Stage"
                                    : level === "intermediate"
                                      ? "Intermediate Stage"
                                      : "Advanced Stage"}
                                </span>
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {topics.map((topic, index) => (
                                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-700">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}

                          <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                            <h4 className="font-semibold text-sky-900 mb-2">Recommended Learning Resources</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-sky-800 mb-1">Applications</h5>
                                <ul className="text-sm text-sky-700 space-y-1">
                                  {selectedRecommendation.resources.apps.map((app, index) => (
                                    <li key={index}>• {app}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-sky-800 mb-1">Textbooks</h5>
                                <ul className="text-sm text-sky-700 space-y-1">
                                  {selectedRecommendation.resources.books.map((book, index) => (
                                    <li key={index}>• {book}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-sky-800 mb-1">Websites</h5>
                                <ul className="text-sm text-sky-700 space-y-1">
                                  {selectedRecommendation.resources.websites.map((website, index) => (
                                    <li key={index}>• {website}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="culture" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Cultural Background</CardTitle>
                          <CardDescription>Understand the rich cultural connotations behind the language</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Language Basic Information</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Language Family:</span>
                                  <span className="font-medium">{selectedRecommendation.language.family}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Writing System:</span>
                                  <span className="font-medium">{selectedRecommendation.language.script}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Main Regions:</span>
                                  <span className="font-medium">
                                    {selectedRecommendation.language.regions.join(", ")}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Number of Speakers:</span>
                                  <span className="font-medium">
                                    {(selectedRecommendation.language.speakers.total / 1000000).toFixed(0)} million
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Cultural Features</h4>
                              <div className="space-y-2">
                                {selectedRecommendation.culturalHighlights.map((highlight, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <Star className="w-4 h-4 text-amber-500" />
                                    <span className="text-gray-700">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
