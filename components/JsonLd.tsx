import { generateFormationSEO } from '../lib/seo-generator'

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Love for Livres",
    "alternateName": ["Love for Livres Formation", "Love for Livres Développement"],
    "description": "Organisme de formation spécialisé en développement personnel, communication, management et sciences cognitives. Accompagnement personnalisé pour l'épanouissement professionnel et personnel.",
    "url": "https://loveforlivres.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://loveforlivres.com/images/Logo.png",
      "width": 120,
      "height": 40
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["French"],
      "areaServed": "FR",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "sameAs": [
      // Ajoutez ici vos réseaux sociaux si disponibles
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": "Formation en développement personnel",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "67",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FormationJsonLd({ formationSlug }: { formationSlug: string }) {
  const seoData = generateFormationSEO(formationSlug)
  
  if (!seoData.structuredData) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.structuredData) }}
    />
  )
}

export function BreadcrumbJsonLd({ breadcrumbs }: { breadcrumbs: Array<{name: string, url: string}> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
