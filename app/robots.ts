import { MetadataRoute } from 'next'

// Route segment config
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://loveforlivres.com/sitemap.xml',
  }
}
