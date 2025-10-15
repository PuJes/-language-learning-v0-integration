import type { MetadataRoute } from 'next'

const siteUrl = 'https://easiestlanguage.site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: siteUrl,
    sitemap: [`${siteUrl}/sitemap.xml`],
  }
}
