import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { cn } from '@/lib/utils'
import { HeaderStatic } from '@/components/header-static'
import { FooterStatic } from '@/components/footer-static'
import { getServerLocale } from '@/lib/locale-server'
import { LocaleHydrator } from '@/components/locale-hydrator'

export const metadata: Metadata = {
  metadataBase: new URL('https://easiestlanguage.site'),
  title: {
    default: 'Wordora - Personalized Language Learning Platform',
    template: '%s | Wordora',
  },
  description: 'Through AI-powered recommendation system, we provide personalized language recommendations based on your background, cultural interests, and learning goals.',
  keywords: ['language learning', 'AI', 'personalized recommendation', 'multilingual', 'cultural exchange', 'wordora', 'learning platform'],
  authors: [{ name: 'Wordora Team' }],
  icons: {
    icon: [
      {
        url: '/wordora-icon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/wordora-icon.png',
    apple: '/wordora-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getServerLocale()
  const htmlLang = locale === 'zh' ? 'zh-CN' : 'en'

  return (
    <html lang={htmlLang}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8W1P7Z2D9D"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8W1P7Z2D9D');`}
        </Script>
      </head>
      <body className={cn("antialiased bg-gray-50 font-sans")}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <HeaderStatic />

          {/* Main Content */}
          <main className="flex-1 pt-16">
            {children}
          </main>

          {/* Footer */}
          <FooterStatic />
        </div>

        <LocaleHydrator locale={locale} />

        {/* Global components like Toast notifications can be added here */}
      </body>
    </html>
  )
}
