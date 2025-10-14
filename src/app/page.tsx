'use client'

import * as React from "react"
import { ArrowRight, Globe, Brain, GraduationCap, Wrench, Star, Users, BookOpen, Clock, Target, MapPin, Lightbulb, ChevronLeft, ChevronRight, Rocket, Download, TrendingUp, Trophy, Gamepad2, MessageCircle, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { useTranslation } from "@/hooks/useTranslation"
import { cultureArticles } from "@/lib/data/culture-articles"

// UI Components
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline' | 'ghost'
    size?: 'sm' | 'default' | 'lg'
    asChild?: boolean
  }
>(({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  }

  const sizes = {
    sm: "h-9 rounded-md px-3",
    default: "h-10 px-4 py-2",
    lg: "h-11 rounded-md px-8"
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (asChild) {
    const { disabled, form, formAction, formEnctype, formMethod, formNoValidate, formTarget, name, type, value, ...divProps } = props as any
    return <div className={classes} {...divProps}>{children}</div>
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

// Mock Language Data - will be replaced with translations
const getPopularLanguages = (t: any) => [
  {
    id: "spanish",
    name: t.homepage.popularLanguages.spanish.name,
    englishName: "Spanish",
    flag: "🇪🇸",
    speakers: "500M+",
    difficulty: 2,
    popularity: 95,
    culture: t.homepage.popularLanguages.spanish.culture,
    description: t.homepage.popularLanguages.spanish.description
  },
  {
    id: "french",
    name: t.homepage.popularLanguages.french.name,
    englishName: "French",
    flag: "🇫🇷",
    speakers: "280M+",
    difficulty: 3,
    popularity: 88,
    culture: t.homepage.popularLanguages.french.culture,
    description: t.homepage.popularLanguages.french.description
  },
  {
    id: "japanese",
    name: t.homepage.popularLanguages.japanese.name,
    englishName: "Japanese",
    flag: "🇯🇵",
    speakers: "125M+",
    difficulty: 5,
    popularity: 92,
    culture: t.homepage.popularLanguages.japanese.culture,
    description: t.homepage.popularLanguages.japanese.description
  },
  {
    id: "german",
    name: t.homepage.popularLanguages.german.name,
    englishName: "German",
    flag: "🇩🇪",
    speakers: "100M+",
    difficulty: 4,
    popularity: 85,
    culture: t.homepage.popularLanguages.german.culture,
    description: t.homepage.popularLanguages.german.description
  },
  {
    id: "korean",
    name: t.homepage.popularLanguages.korean.name,
    englishName: "Korean",
    flag: "🇰🇷",
    speakers: "77M+",
    difficulty: 4,
    popularity: 90,
    culture: t.homepage.popularLanguages.korean.culture,
    description: t.homepage.popularLanguages.korean.description
  },
  {
    id: "portuguese",
    name: t.homepage.popularLanguages.portuguese.name,
    englishName: "Portuguese",
    flag: "🇵🇹",
    speakers: "260M+",
    difficulty: 3,
    popularity: 82,
    culture: t.homepage.popularLanguages.portuguese.culture,
    description: t.homepage.popularLanguages.portuguese.description
  }
]

// Culture regions data - will be replaced with translations
const getCultureRegions = (t: any) => [
  {
    id: "east-asia",
    name: t.homepage.cultureRegions.eastAsia.name,
    description: t.homepage.cultureRegions.eastAsia.description,
    languages: t.homepage.cultureRegions.eastAsia.languages,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: t.homepage.cultureRegions.eastAsia.highlights
  },
  {
    id: "europe",
    name: t.homepage.cultureRegions.europe.name,
    description: t.homepage.cultureRegions.europe.description,
    languages: t.homepage.cultureRegions.europe.languages,
    image: "https://images.unsplash.com/photo-1543735717-24da73e8d324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: t.homepage.cultureRegions.europe.highlights
  },
  {
    id: "latin-america",
    name: t.homepage.cultureRegions.latinAmerica.name,
    description: t.homepage.cultureRegions.latinAmerica.description,
    languages: t.homepage.cultureRegions.latinAmerica.languages,
    image: "https://images.unsplash.com/photo-1518123159102-4f0b5ad1a78b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: t.homepage.cultureRegions.latinAmerica.highlights
  }
]

// Difficulty indicator component
const DifficultyIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level
              ? i <= 2 ? 'bg-green-500' : i <= 3 ? 'bg-yellow-500' : 'bg-red-500'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

// Language Card Component
const LanguageCard = ({ language }: { language: ReturnType<typeof getPopularLanguages>[0] }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full bg-white/50 backdrop-blur hover:bg-white/80">
      <CardContent className="p-6 pt-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{language.flag}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{language.name}</h3>
              <p className="text-sm text-gray-600">{language.englishName}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-purple-600">{language.speakers}</div>
            <div className="text-xs text-gray-500">Speakers</div>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{language.description}</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Difficulty</span>
            <DifficultyIndicator level={language.difficulty} />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Popularity</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{language.popularity}%</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            <span>{language.culture}</span>
          </div>
        </div>

        <Link href={`/languages/${language.id}`} className="block w-full mt-4">
          <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

// Culture Region Card Component
const CultureCard = ({ region }: { region: any }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={region.image}
          alt={region.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{region.name}</h3>
          <p className="text-sm opacity-90">{region.description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Main Languages</h4>
          <div className="flex flex-wrap gap-2">
            {region.languages.map((lang: string) => (
              <span key={lang} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Cultural Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {region.highlights.map((highlight: string) => (
              <span key={highlight} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <Link href={`/culture/${region.id}`} className="block w-full">
          <Button variant="outline" className="w-full">
            Explore Culture
            <MapPin className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

// Header is now imported from @/components/header

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/wordora-icon.png"
                alt="Wordora logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-lg font-bold">Wordora</span>
            </div>
            <p className="text-gray-400 text-sm">
              Personalized language learning guidance and in-depth cultural exploration experience. Making every learning journey a bridge to a broader world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0C18.624 0 20 1.376 20 8.017v3.966C20 18.624 18.624 20 12.017 20H7.983C1.376 20 0 18.624 0 11.983V8.017C0 1.376 1.376 0 7.983 0h4.034zm0 1.8H7.983C2.27 1.8 1.8 2.27 1.8 7.983v4.034c0 5.713.47 6.183 6.183 6.183h4.034c5.713 0 6.183-.47 6.183-6.183V7.983c0-5.713-.47-6.183-6.183-6.183z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/survey" className="text-gray-400 hover:text-white transition-colors">Language Recommendation</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Learning Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Difficulty Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Learning Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Culture Exploration</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/culture" className="text-gray-400 hover:text-white transition-colors">World Cultures</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Language History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cultural Comparison</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Festivals & Customs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Wordora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Culture Preview Section with horizontal scrolling
const CulturePreviewSection = ({ t }: { t: any }) => {
  const { locale } = useTranslation()
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  // 从真实数据中获取前6篇文章
  const displayArticles = cultureArticles.slice(0, 6).map(article => ({
    title: locale === 'zh' ? article.title.zh : article.title.en,
    type: article.theme === 'art' ? (locale === 'zh' ? '艺术' : 'Art') :
          article.theme === 'tradition' ? (locale === 'zh' ? '传统' : 'Tradition') :
          article.theme === 'food' ? (locale === 'zh' ? '美食' : 'Food') :
          (locale === 'zh' ? '生活方式' : 'Lifestyle'),
    region: article.region === 'east-asia' ? (locale === 'zh' ? '东亚' : 'East Asia') :
            article.region === 'europe' ? (locale === 'zh' ? '欧洲' : 'Europe') :
            article.region === 'middle-east' ? (locale === 'zh' ? '中东' : 'Middle East') :
            (locale === 'zh' ? '其他' : 'Other'),
    image: article.coverImage,
    description: locale === 'zh' ? article.summary.zh : article.summary.en,
    readTime: "5 min",
    slug: article.slug
  }))

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
            <Camera className="w-4 h-4" />
            {t.homepage.culture.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {t.homepage.culture.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.homepage.culture.subtitle}
          </p>
        </div>

        <div className="relative mb-12">
          {canScrollLeft && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div ref={scrollContainerRef} className="overflow-x-auto pb-4 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-6 px-12">
              {displayArticles.map((article, index) => (
                <Link key={index} href={`/culture/${article.slug}`}>
                  <Card className="flex-shrink-0 w-[320px] h-[400px] hover:shadow-xl transition-all overflow-hidden cursor-pointer flex flex-col">
                    <div className="relative h-48 flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 85vw, 320px"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium">
                          {article.type}
                        </span>
                      </div>
                    </div>
                    <CardContent className="px-6 pt-5 pb-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg mb-3 line-clamp-2 min-h-[56px]">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{article.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {article.region}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/culture">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-8 py-3">
              {t.homepage.culture.exploreCulture}
              <Globe className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Learning Methods Section
const LearningMethodsSection = ({ t }: { t: any }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  const methods = [
    {
      title: "Immersion Learning: Learn Language Like a Baby",
      languages: ["English", "Spanish", "French"],
      summary: "Create a pure language environment to let your brain naturally acquire language patterns",
      readTime: "8 min",
      rating: 4.8,
      difficulty: "Beginner",
      icon: Brain,
      color: "text-blue-600"
    },
    {
      title: "Language Exchange Partner System: The Power of Real Conversation",
      languages: ["All Languages"],
      summary: "Build language exchange relationships with native speakers to improve speaking skills through real conversations",
      readTime: "6 min",
      rating: 4.9,
      difficulty: "Intermediate",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Memory Palace Method: Efficient Word and Grammar Memory",
      languages: ["Japanese", "Arabic", "Chinese"],
      summary: "Use spatial memory principles to transform abstract language knowledge into concrete scenes",
      readTime: "10 min",
      rating: 4.7,
      difficulty: "Advanced",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Spaced Repetition: Scientific Memory Breakthrough",
      languages: ["German", "Russian", "Korean"],
      summary: "Based on the Ebbinghaus forgetting curve, scientifically schedule review times",
      readTime: "7 min",
      rating: 4.6,
      difficulty: "Intermediate",
      icon: Lightbulb,
      color: "text-amber-600"
    }
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            {t.homepage.learningMethods.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {t.homepage.learningMethods.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.homepage.learningMethods.subtitle}
          </p>
        </div>

        <div className="relative mb-12">
          {canScrollLeft && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div ref={scrollContainerRef} className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-6 px-12">
              {methods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index} className="flex-shrink-0 w-72 hover:shadow-xl transition-all">
                    <CardContent className="p-6 pt-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <IconComponent className={`h-5 w-5 ${method.color}`} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs">{method.difficulty}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{method.rating}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-3 line-clamp-2">{method.title}</h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {method.languages.slice(0, 2).map((lang, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                            {lang}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{method.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {method.readTime}
                        </div>
                        <Button variant="outline" size="sm">
                          Learn More
                          <BookOpen className="h-3 w-3 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 py-16">
              <h3 className="text-3xl font-bold mb-4">Master More Learning Secrets!</h3>
              <p className="text-lg text-gray-600 mb-8">
                Explore 20+ professional learning methods, there's always one that fits your learning style!
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-8 py-3">
                View Complete Learning Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Resource Tools Section
const ResourceToolsSection = ({ t }: { t: any }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  const tools = [
    {
      name: "Duolingo",
      category: "Comprehensive Learning",
      ranking: "#1",
      rating: 4.6,
      users: "500M+",
      trend: "Rising",
      features: ["Gamified Learning", "Multi-language Support", "Free to Use"],
      description: "The world's most popular language learning app, making learning fun through gamification",
      icon: Gamepad2,
      color: "text-green-600"
    },
    {
      name: "Anki",
      category: "Memory Tool",
      ranking: "#2",
      rating: 4.8,
      users: "10M+",
      trend: "Stable",
      features: ["Spaced Repetition", "Custom Cards", "Community Sharing"],
      description: "Flashcard app based on scientific memory principles, powerful tool for vocabulary and grammar",
      icon: Trophy,
      color: "text-orange-600"
    },
    {
      name: "HelloTalk",
      category: "Language Exchange",
      ranking: "#3",
      rating: 4.5,
      users: "50M+",
      trend: "Rising",
      features: ["Real Conversation", "Cultural Exchange", "Instant Translation"],
      description: "Social platform connecting language learners worldwide for real conversation practice with native speakers",
      icon: MessageCircle,
      color: "text-purple-600"
    },
    {
      name: "Busuu",
      category: "Online Courses",
      ranking: "#4",
      rating: 4.4,
      users: "12M+",
      trend: "Rising",
      features: ["AI Courses", "Certificates", "Personalization"],
      description: "Professional language courses and certifications designed by language experts",
      icon: Rocket,
      color: "text-blue-600"
    }
  ]

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
            <Rocket className="w-4 h-4" />
            {t.homepage.resources.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {t.homepage.resources.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.homepage.resources.subtitle}
          </p>
        </div>

        <div className="relative mb-12">
          {canScrollLeft && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div ref={scrollContainerRef} className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-6 px-12">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon
                return (
                  <Card key={index} className="flex-shrink-0 w-72 hover:shadow-xl transition-all">
                    <CardContent className="p-6 pt-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm">
                            {tool.ranking}
                          </div>
                          <div>
                            <h3 className="font-semibold">{tool.name}</h3>
                            <span className="text-xs text-gray-500">{tool.category}</span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <IconComponent className={`h-4 w-4 ${tool.color}`} />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{tool.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{tool.users}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className={`h-3 w-3 ${tool.trend === 'Rising' ? 'text-green-500' : 'text-gray-500'}`} />
                          <span className="text-xs">{tool.trend}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tool.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="px-2 py-1 border rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {tool.features.length > 2 && (
                          <span className="px-2 py-1 border rounded text-xs">
                            +{tool.features.length - 2}
                          </span>
                        )}
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                        <Download className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 py-16">
              <h3 className="text-3xl font-bold mb-4">Discover More Amazing Tools!</h3>
              <p className="text-lg text-gray-600 mb-8">
                Explore 100+ curated learning tools, there's always one that you'll love!
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-8 py-3">
                View All Resources & Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Main HomePage Component
export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgxMDYyODR8MA&ixlib=rb-4.1.0&q=80&w=1600"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-600/80 to-emerald-500/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  {t.homepage.hero.title1}
                </span>
                <br />
                <span className="text-white">{t.homepage.hero.title2}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                {t.homepage.hero.subtitle1}
                <br />
                {t.homepage.hero.subtitle2}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                <Link href="/survey">
                  <Button
                    size="lg"
                    className="px-8 py-3 rounded-full font-medium group bg-white text-slate-900 hover:bg-slate-100 border-0"
                  >
                    {t.homepage.hero.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/culture">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-3 rounded-full font-medium group bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50"
                  >
                    {t.homepage.cta.button2}
                    <Globe className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-16 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">{t.homepage.hero.supportedLanguages}</div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100K+</div>
                  <div className="text-white/80">{t.homepage.hero.activeLearners}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="hidden md:block absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full opacity-20 blur-3xl"></div>
            <div className="hidden md:block absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            {t.homepage.whyUs.title}
          </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.homepage.whyUs.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Brain,
                  title: t.homepage.whyUs.feature1Title,
                  description: t.homepage.whyUs.feature1Desc,
                  color: "text-blue-600"
                },
                {
                  icon: Globe,
                  title: t.homepage.whyUs.feature2Title,
                  description: t.homepage.whyUs.feature2Desc,
                  color: "text-green-600"
                },
                {
                  icon: GraduationCap,
                  title: t.homepage.whyUs.feature3Title,
                  description: t.homepage.whyUs.feature3Desc,
                  color: "text-purple-600"
                },
                {
                  icon: Wrench,
                  title: t.homepage.whyUs.feature4Title,
                  description: t.homepage.whyUs.feature4Desc,
                  color: "text-orange-600"
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full bg-white/50 hover:bg-white/80">
                    <CardContent className="p-8 pt-10 text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className={`h-8 w-8 ${feature.color}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Languages */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                {t.homepage.popularLanguages.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.homepage.popularLanguages.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {getPopularLanguages(t).map((language) => (
                <LanguageCard key={language.id} language={language} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/languages">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3">
                  {t.homepage.popularLanguages.viewAll}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Culture Preview - Enhanced */}
        <CulturePreviewSection t={t} />

        {/* Learning Methods */}
        <LearningMethodsSection t={t} />

        {/* Resource Tools */}
        <ResourceToolsSection t={t} />

      </main>
    </div>
  )
}
