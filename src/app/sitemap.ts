import type { MetadataRoute } from 'next'
import { locales, defaultLocale } from "@/config/i18n-config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

const routes = [
  '',
  'beyond-bio',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    const urlPath = route ? `/${route}` : ''
    const languageAlternates: { [key: string]: string } = {}

    locales.forEach((lang) => {
      const langPrefix = lang === defaultLocale ? '' : `/${lang}`

      languageAlternates[lang] = `${baseUrl}${langPrefix}${urlPath}`
    })

    sitemap.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: languageAlternates
      }
    })
  })

  return sitemap
} 