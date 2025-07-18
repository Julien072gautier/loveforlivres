import { MetadataRoute } from 'next'
import formationsConfig from '../lib/config/formations'

// Route segment config
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loveforlivres.com' // URL adaptée pour Love for Livres

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/demande-formation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Pages de formations dynamiques
  const formationPages = formationsConfig.formations.map((formation) => ({
    url: `${baseUrl}/${formation.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...formationPages]
}
