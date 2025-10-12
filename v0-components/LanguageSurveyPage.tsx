"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Search,
  Users,
  MessageSquare,
  GraduationCap,
  Clock,
  Globe,
  BookOpen,
  Target,
  TrendingUp,
  Smartphone,
  Brain,
  X,
} from "lucide-react"

// UI Components
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost"
    size?: "sm" | "default" | "lg"
    disabled?: boolean
  }
>(({ className = "", variant = "default", size = "default", disabled = false, children, ...props }, ref) => {
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

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`

  return (
    <button className={classes} ref={ref} disabled={disabled} {...props}>
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
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" }
>(({ className = "", variant = "default", ...props }, ref) => {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
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

// Survey Data Types
interface SurveyAnswer {
  questionId: string
  answer: string
  weight?: number
}

interface SurveyData {
  answers: SurveyAnswer[]
  userSource?: string
  contentInterest?: string
  nativeLanguage?: string
  languageExperience?: string
  learningPurpose?: string
  timeExpectation?: string
  culturalInterest?: string | string[]
  learningStyle?: string
  persistence?: string
  difficultyPreference?: string
  dailyTime?: string
}

// Survey Questions Definition
const surveyQuestions = [
  {
    id: "q1_user_source",
    title: "How did you learn about our website?",
    description: "Help us understand user sources and optimize our outreach strategy",
    options: [
      {
        id: "search_engine",
        label: "Search engine results",
        icon: Search,
        weight: 1,
      },
      {
        id: "social_media",
        label: "Social media recommendations",
        icon: MessageSquare,
        weight: 1,
      },
      {
        id: "friend_referral",
        label: "Friend or colleague referral",
        icon: Users,
        weight: 1,
      },
      {
        id: "other_websites",
        label: "Other language learning websites/forums",
        icon: Globe,
        weight: 1,
      },
      {
        id: "other",
        label: "Other sources",
        icon: TrendingUp,
        weight: 1,
      },
    ],
  },
  {
    id: "q2_content_interest",
    title: "What content are you most interested in learning from our website?",
    description: "Help us understand user needs and provide more valuable content",
    options: [
      {
        id: "difficulty_comparison",
        label: "Learning difficulty comparison across different languages",
        icon: Target,
        weight: 0.25,
      },
      {
        id: "cultural_introduction",
        label: "Cultural background and features of various languages",
        icon: Globe,
        weight: 0.25,
      },
      {
        id: "personalized_recommendation",
        label: "Personalized language selection recommendations",
        icon: Target,
        weight: 0.25,
      },
      {
        id: "learning_methods",
        label: "Specific learning methods and resource recommendations",
        icon: BookOpen,
        weight: 0.25,
      },
      {
        id: "time_planning",
        label: "Learning time planning and progress scheduling",
        icon: Clock,
        weight: 0.2,
      },
      {
        id: "just_browsing",
        label: "Just browsing, no specific purpose",
        icon: TrendingUp,
        weight: 0,
      },
    ],
  },
  {
    id: "q3_native_language",
    title: "What is your native language?",
    description: "Used to calculate learning difficulty and recommend suitable languages",
    options: [
      {
        id: "chinese",
        label: "Chinese",
        icon: Globe,
        flag: "🇨🇳",
        weight: 1,
      },
      {
        id: "english",
        label: "English",
        icon: Globe,
        flag: "🇺🇸",
        weight: 1,
      },
      {
        id: "spanish",
        label: "Spanish",
        icon: Globe,
        flag: "🇪🇸",
        weight: 1,
      },
      {
        id: "french",
        label: "French",
        icon: Globe,
        flag: "🇫🇷",
        weight: 1,
      },
      {
        id: "german",
        label: "German",
        icon: Globe,
        flag: "🇩🇪",
        weight: 1,
      },
      {
        id: "italian",
        label: "Italian",
        icon: Globe,
        flag: "🇮🇹",
        weight: 1,
      },
      {
        id: "portuguese",
        label: "Portuguese",
        icon: Globe,
        flag: "🇵🇹",
        weight: 1,
      },
      {
        id: "japanese",
        label: "Japanese",
        icon: Globe,
        flag: "🇯🇵",
        weight: 1,
      },
      {
        id: "korean",
        label: "Korean",
        icon: Globe,
        flag: "🇰🇷",
        weight: 1,
      },
      {
        id: "other",
        label: "Other languages",
        icon: Globe,
        flag: "🌐",
        weight: 1,
      },
    ],
  },
  {
    id: "q4_language_experience",
    title: "Besides your native language, how many languages can you speak fluently?",
    description: "Assess your language learning experience (used for experience bonus calculation)",
    options: [
      {
        id: "0",
        label: "0 languages (only native language)",
        icon: BookOpen,
        weight: 1,
      },
      {
        id: "1",
        label: "1 language",
        icon: MessageSquare,
        weight: 1,
      },
      {
        id: "2",
        label: "2 languages",
        icon: Globe,
        weight: 1,
      },
      {
        id: "3",
        label: "3 languages",
        icon: GraduationCap,
        weight: 1,
      },
      {
        id: "4+",
        label: "4 or more languages",
        icon: Target,
        weight: 1,
      },
    ],
  },
  {
    id: "q5_learning_purpose",
    title: "What is your main purpose for learning a new language?",
    description: "Help match the language that best fits your needs",
    options: [
      {
        id: "career",
        label: "Career Development",
        description: "Business communication and enhanced work competitiveness",
        icon: TrendingUp,
        weight: 1,
      },
      {
        id: "travel",
        label: "Travel",
        description: "Free communication and deep experiences locally",
        icon: Globe,
        weight: 1,
      },
      {
        id: "culture",
        label: "Cultural Interest",
        description: "Understanding the culture, arts, and history behind the language",
        icon: Globe,
        weight: 1,
      },
      {
        id: "academic",
        label: "Academic Research",
        description: "Study abroad or academic exchange needs",
        icon: GraduationCap,
        weight: 1,
      },
      {
        id: "other",
        label: "Other reasons",
        icon: MessageSquare,
        weight: 1,
      },
    ],
  },
  {
    id: "q6_time_expectation",
    title: "How long do you expect to reach basic communication level?",
    description: "Assess time feasibility (supports algorithm timeline classification)",
    options: [
      {
        id: "3months",
        label: "Within 3 months",
        description: "Quick start expected",
        icon: Clock,
        weight: 1,
      },
      {
        id: "6months",
        label: "About 6 months",
        description: "Steady progress",
        icon: TrendingUp,
        weight: 1,
      },
      {
        id: "1year",
        label: "1 year",
        description: "Solid learning",
        icon: BookOpen,
        weight: 1,
      },
      {
        id: "2years",
        label: "2 years",
        description: "In-depth mastery",
        icon: GraduationCap,
        weight: 1,
      },
      {
        id: "no_rush",
        label: "No time pressure",
        description: "Learning at my own pace",
        icon: Target,
        weight: 1,
      },
    ],
  },
  {
    id: "q7_cultural_interest",
    title: "Which regions or cultures are you interested in? (Multiple selections allowed)",
    description: "Precisely match the algorithm's culturalMapping region classification",
    multiple: true,
    options: [
      {
        id: "east-asia",
        label: "East Asian Culture",
        description: "China, Japan, Korea",
        icon: Globe,
        flag: "🏮",
        weight: 1,
      },
      {
        id: "southeast-asia",
        label: "Southeast Asian Culture",
        description: "Thailand, Vietnam, Indonesia, etc.",
        icon: Globe,
        flag: "🛕",
        weight: 1,
      },
      {
        id: "europe",
        label: "European Culture",
        description: "France, Germany, Italy, Spain, etc.",
        icon: Globe,
        flag: "🏛️",
        weight: 1,
      },
      {
        id: "latin-america",
        label: "Latin American Culture",
        description: "Spanish and Portuguese-speaking countries",
        icon: Globe,
        flag: "🎭",
        weight: 1,
      },
      {
        id: "middle-east",
        label: "Middle Eastern Culture",
        description: "Arabic, Persian, Turkish, etc.",
        icon: Globe,
        flag: "🕌",
        weight: 1,
      },
      {
        id: "africa",
        label: "African Culture",
        description: "Swahili-speaking, Arabic-speaking regions, etc.",
        icon: Globe,
        flag: "🌍",
        weight: 1,
      },
      {
        id: "north-america",
        label: "North American Culture",
        description: "United States, Canada",
        icon: Globe,
        flag: "🗽",
        weight: 1,
      },
      {
        id: "oceania",
        label: "Oceanian Culture",
        description: "Australia, New Zealand, etc.",
        icon: Globe,
        flag: "🏝️",
        weight: 1,
      },
      {
        id: "no_preference",
        label: "No particular preference",
        icon: Target,
        weight: 0,
      },
    ],
  },
  {
    id: "q8_learning_style",
    title: "Which learning approach do you prefer?",
    description: "Recommend suitable learning paths for you",
    options: [
      {
        id: "systematic",
        label: "Systematic learning, starting from grammar rules",
        icon: BookOpen,
        weight: 1,
      },
      {
        id: "practical",
        label: "Practice-oriented, learning through conversation and application",
        icon: MessageSquare,
        weight: 1,
      },
      {
        id: "cultural_immersion",
        label: "Cultural immersion, learning through media and music",
        icon: Globe,
        weight: 1,
      },
      {
        id: "mixed",
        label: "Mixed learning, combining multiple approaches",
        icon: Target,
        weight: 1,
      },
      {
        id: "need_advice",
        label: "Not sure yet, would like advice",
        icon: TrendingUp,
        weight: 1,
      },
    ],
  },
  {
    id: "q9_persistence",
    title: "How would you rate your learning persistence?",
    description: "Assess your self-discipline level and recommend appropriate learning paths",
    options: [
      {
        id: "very_strong",
        label: "Very strong, I persist once I start",
        icon: Target,
        weight: 1,
      },
      {
        id: "good",
        label: "Pretty good, can persist for several months or more",
        icon: TrendingUp,
        weight: 1,
      },
      {
        id: "average",
        label: "Average, easily affected by setbacks",
        icon: Clock,
        weight: 1,
      },
      {
        id: "weak",
        label: "Rather weak, often lose interest quickly",
        icon: MessageSquare,
        weight: 1,
      },
      {
        id: "uncertain",
        label: "Not quite sure",
        icon: BookOpen,
        weight: 1,
      },
    ],
  },
  {
    id: "q10_difficulty_preference",
    title: "What difficulty level of language do you prefer to learn?",
    description: "Supports algorithm's userPreference parameter (1-5 difficulty levels)",
    options: [
      {
        id: "1",
        label: "Easy to learn",
        description: "Quick start (Difficulty level 1-2)",
        icon: BookOpen,
        weight: 1,
      },
      {
        id: "2",
        label: "Medium difficulty",
        description: "Balance challenge and feasibility (Difficulty level 3)",
        icon: Target,
        weight: 2,
      },
      {
        id: "3",
        label: "More challenging",
        description: "Willing to invest more effort (Difficulty level 4)",
        icon: TrendingUp,
        weight: 3,
      },
      {
        id: "4",
        label: "Most challenging",
        description: "Enjoy overcoming difficulties (Difficulty level 5)",
        icon: GraduationCap,
        weight: 4,
      },
      {
        id: "5",
        label: "Follow recommendations",
        description: "No particular preference",
        icon: MessageSquare,
        weight: 3,
      },
    ],
  },
  {
    id: "q11_daily_time",
    title: "How much time can you dedicate to language learning each day?",
    description: "Supports algorithm's timeCommitment classification",
    options: [
      {
        id: "intensive",
        label: "2 hours or more",
        description: "Intensive learning",
        icon: Clock,
        weight: 1,
      },
      {
        id: "regular",
        label: "About 1 hour",
        description: "Regular learning",
        icon: Clock,
        weight: 1,
      },
      {
        id: "light",
        label: "About 30 minutes",
        description: "Light learning",
        icon: Clock,
        weight: 1,
      },
      {
        id: "irregular",
        label: "Irregular time",
        description: "Fragmented learning",
        icon: Smartphone,
        weight: 1,
      },
    ],
  },
]

// Main Survey Component
export default function LanguageSurveyPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [surveyData, setSurveyData] = useState<SurveyData>({
    answers: [],
  })
  const [isCompleted, setIsCompleted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([])

  const currentQuestion = surveyQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / surveyQuestions.length) * 100

  // Get current answer from cache
  const currentAnswer = useMemo(() => {
    return surveyData.answers.find((a) => a.questionId === currentQuestion.id)?.answer || ""
  }, [surveyData.answers, currentQuestion.id])

  React.useEffect(() => {
    if (currentQuestion.multiple) {
      if (currentAnswer) {
        try {
          const parsed = JSON.parse(currentAnswer)
          setSelectedMultiple(Array.isArray(parsed) ? parsed : [])
        } catch {
          setSelectedMultiple([])
        }
      } else {
        setSelectedMultiple([])
      }
      setSelectedAnswer("")
    } else {
      setSelectedAnswer(currentAnswer)
      setSelectedMultiple([])
    }
  }, [currentAnswer, currentQuestion])

  // Handle option selection for both single and multiple choice
  const handleOptionSelect = React.useCallback(
    (optionId: string) => {
      const isMultiple = currentQuestion.multiple || false

      if (isMultiple) {
        // Multiple choice logic
        const currentSelections = selectedMultiple.includes(optionId)
          ? selectedMultiple.filter((id) => id !== optionId)
          : [...selectedMultiple, optionId]

        setSelectedMultiple(currentSelections)

        // Save multiple choice answer
        const newAnswer: SurveyAnswer = {
          questionId: currentQuestion.id,
          answer: JSON.stringify(currentSelections),
          weight: 1,
        }

        const updatedAnswers = surveyData.answers.filter((a) => a.questionId !== currentQuestion.id)
        updatedAnswers.push(newAnswer)

        setSurveyData((prev) => ({
          ...prev,
          answers: updatedAnswers,
          ...(currentQuestion.id === "q7_cultural_interest" && { culturalInterest: currentSelections }),
        }))
      } else {
        // Single choice logic
        const newAnswer: SurveyAnswer = {
          questionId: currentQuestion.id,
          answer: optionId,
          weight: currentQuestion.options.find((opt) => opt.id === optionId)?.weight || 1,
        }

        const updatedAnswers = surveyData.answers.filter((a) => a.questionId !== currentQuestion.id)
        updatedAnswers.push(newAnswer)

        setSurveyData((prev) => ({
          ...prev,
          answers: updatedAnswers,
          // Update corresponding fields based on question ID
          ...(currentQuestion.id === "q1_user_source" && { userSource: optionId }),
          ...(currentQuestion.id === "q2_content_interest" && { contentInterest: optionId }),
          ...(currentQuestion.id === "q3_native_language" && { nativeLanguage: optionId }),
          ...(currentQuestion.id === "q4_language_experience" && { languageExperience: optionId }),
          ...(currentQuestion.id === "q5_learning_purpose" && { learningPurpose: optionId }),
          ...(currentQuestion.id === "q6_time_expectation" && { timeExpectation: optionId }),
          ...(currentQuestion.id === "q8_learning_style" && { learningStyle: optionId }),
          ...(currentQuestion.id === "q9_persistence" && { persistence: optionId }),
          ...(currentQuestion.id === "q10_difficulty_preference" && { difficultyPreference: optionId }),
          ...(currentQuestion.id === "q11_daily_time" && { dailyTime: optionId }),
        }))

        setSelectedAnswer(optionId)

        // Auto-advance after selection
        setTimeout(() => {
          if (currentQuestionIndex < surveyQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1)
            setSelectedAnswer("")
          } else {
            setIsCompleted(true)
          }
        }, 600) // Increased delay for better UX
      }
    },
    [currentQuestion, surveyData.answers, currentQuestionIndex, selectedMultiple],
  )

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  // Handle continue button for multiple choice questions
  const handleContinueMultiple = () => {
    if (selectedMultiple.length > 0) {
      if (currentQuestionIndex < surveyQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedMultiple([])
      } else {
        setIsCompleted(true)
      }
    }
  }

  // Survey completion screen
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-pink-100">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-pink-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">Survey Complete!</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Thank you for completing the survey! We will recommend the most suitable language learning plan based on your answers.
            </p>

            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 shadow-lg"
              onClick={() => {
                // Store survey data in localStorage for recommendation page
                localStorage.setItem('surveyData', JSON.stringify(surveyData))
                // Navigate to recommendation page
                window.location.href = '/recommendation'
              }}
            >
              View Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-pink-100">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-2">
              {surveyQuestions.map((_, index) => (
                <div key={index} className="flex-1 h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      index < currentQuestionIndex
                        ? "bg-gradient-to-r from-mint-400 to-teal-400"
                        : index === currentQuestionIndex
                          ? "bg-gradient-to-r from-coral-400 to-pink-400"
                          : "bg-pink-100"
                    }`}
                    style={{
                      width: index < currentQuestionIndex ? "100%" : index === currentQuestionIndex ? "50%" : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xs text-gray-500">
              <span>问题 {currentQuestionIndex + 1}</span>
              <span>共 {surveyQuestions.length} 题</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-2 rounded-xl border-pink-200 text-pink-600 hover:bg-pink-50 disabled:opacity-50 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              上一题
            </Button>

            {currentQuestion.multiple ? (
              <Button
                onClick={handleContinueMultiple}
                disabled={selectedMultiple.length === 0}
                className="bg-gradient-to-r from-coral-500 to-pink-500 text-white px-6 py-2 rounded-xl hover:from-coral-600 hover:to-pink-600 disabled:opacity-50 shadow-lg"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <div className="text-sm text-gray-500">Click an option to automatically proceed to the next question</div>
            )}
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-pink-500 mb-2 font-medium">
              Question {currentQuestionIndex + 1}/{surveyQuestions.length}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{currentQuestion.title}</h2>
            <p className="text-gray-600">{currentQuestion.description}</p>
          </div>

          <div
            className={`mb-6 ${
              currentQuestion.options.length <= 4
                ? "space-y-3"
                : currentQuestion.options.length <= 6
                  ? "grid grid-cols-1 md:grid-cols-2 gap-3"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            }`}
          >
            {currentQuestion.options.map((option, index) => {
              const isMultiple = currentQuestion.multiple || false
              const isSelected = isMultiple ? selectedMultiple.includes(option.id) : currentAnswer === option.id
              const isJustSelected = selectedAnswer === option.id

              const colorVariants = [
                "border-coral-300 bg-coral-50 hover:bg-coral-100",
                "border-mint-300 bg-mint-50 hover:bg-mint-100",
                "border-lavender-300 bg-lavender-50 hover:bg-lavender-100",
                "border-peach-300 bg-peach-50 hover:bg-peach-100",
                "border-sky-300 bg-sky-50 hover:bg-sky-100",
              ]

              const selectedVariants = [
                "border-coral-400 bg-coral-100 shadow-coral-200",
                "border-mint-400 bg-mint-100 shadow-mint-200",
                "border-lavender-400 bg-lavender-100 shadow-lavender-200",
                "border-peach-400 bg-peach-100 shadow-peach-200",
                "border-sky-400 bg-sky-100 shadow-sky-200",
              ]

              const colorIndex = index % colorVariants.length
              const baseColor = colorVariants[colorIndex]
              const selectedColor = selectedVariants[colorIndex]

              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left shadow-sm ${
                    isSelected || isJustSelected
                      ? `${selectedColor} shadow-lg transform scale-[1.02]`
                      : `border-gray-200 hover:border-gray-300 ${baseColor}`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-xl flex-shrink-0">
                        {option.flag || (
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center ${
                              isSelected || isJustSelected ? "bg-white shadow-sm" : "bg-white/70"
                            }`}
                          >
                            {React.createElement(option.icon, {
                              className: `w-3.5 h-3.5 ${isSelected || isJustSelected ? "text-gray-700" : "text-gray-600"}`,
                            })}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-800 text-sm mb-0.5">{option.label}</div>
                        {option.description && <div className="text-xs text-gray-600">{option.description}</div>}
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-mint-400 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {selectedAnswer && (
          <div className="mt-4 bg-gradient-to-r from-mint-50 to-teal-50 border border-mint-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-mint-600" />
              <span className="text-mint-800 font-medium">Selection successful</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
