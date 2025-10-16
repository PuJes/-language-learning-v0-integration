import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from '@/locales'
import { getServerLocale, LOCALE_COOKIE_KEY } from '@/lib/locale-server'
import type { Locale } from '@/types/i18n'
import { setLocaleAction } from '@/app/actions/set-locale'

export async function HeaderStatic() {
  const locale = getServerLocale()
  const translations = getTranslations(locale)

  const navItems = [
    { href: '/', label: translations.common.home },
    { href: '/survey', label: translations.common.languageRecommendation },
    { href: '/languages', label: translations.common.languageList },
    { href: '/learning-methods', label: translations.homepage.learningMethods.title },
    { href: '/resources', label: translations.common.resources },
    { href: '/culture', label: translations.common.cultureExploration },
    { href: '/coming-soon', label: translations.common.aboutUs },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/wordora-icon.png"
                alt="Wordora logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-sm md:text-base font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {translations.header.title}
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-x-3 xl:gap-x-6 2xl:gap-x-8 text-sm xl:text-base">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-foreground hover:text-purple-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <LanguageToggle currentLocale={locale} />
        </div>
      </div>
    </header>
  )
}

function LanguageToggle({ currentLocale }: { currentLocale: Locale }) {
  const translations = getTranslations(currentLocale)
  const switchToEnglish = setLocaleAction.bind(null, 'en')
  const switchToChinese = setLocaleAction.bind(null, 'zh')

  return (
    <div className="flex items-center gap-4">
      <form className="flex items-center gap-2">
        <button
          formAction={switchToEnglish}
          type="submit"
          aria-label="Switch to English"
          className={`text-sm font-medium transition-colors ${currentLocale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          EN
        </button>
        <span className="text-muted-foreground">/</span>
        <button
          formAction={switchToChinese}
          type="submit"
          aria-label="切换到中文"
          className={`text-sm font-medium transition-colors ${currentLocale === 'zh' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
        >
          中文
        </button>
      </form>

      <Link
        href="/survey"
        className="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4"
      >
        {translations.common.startExploring}
      </Link>
    </div>
  )
}
