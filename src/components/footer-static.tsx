import Link from 'next/link'
import { getServerLocale } from '@/lib/locale-server'
import { getTranslations } from '@/locales'

export async function FooterStatic() {
  const locale = getServerLocale()
  const t = getTranslations(locale)

  return (
    <footer className="bg-muted/30 dark:bg-card text-foreground py-16 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">{t.header.title}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
              {t.footer.learningResources}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/survey" className="hover:text-foreground transition-colors">{t.footer.languageRecommendation}</Link></li>
              <li><Link href="/learning-methods" className="hover:text-foreground transition-colors">{t.footer.learningPlan}</Link></li>
              <li><Link href="/resources" className="hover:text-foreground transition-colors">{t.footer.learningTools}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
              {t.footer.cultureExploration}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/culture" className="hover:text-foreground transition-colors">{t.footer.worldCulture}</Link></li>
              <li><Link href="/culture" className="hover:text-foreground transition-colors">{t.footer.languageHistory}</Link></li>
              <li><Link href="/culture" className="hover:text-foreground transition-colors">{t.footer.culturalComparison}</Link></li>
              <li><Link href="/culture" className="hover:text-foreground transition-colors">{t.footer.festivalCustoms}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">{t.footer.about}</Link></li>
              <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">{t.footer.contact}</Link></li>
              <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">{t.footer.partners}</Link></li>
              <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">{t.footer.privacyPolicy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
