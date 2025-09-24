import Script from 'next/script'

interface StructuredDataProps {
  data: any
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Fonction utilitaire pour créer les données structurées de l'organisation
export function getOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Love for Livres",
    "alternateName": ["Love for Livres Formation", "Love for Livres Développement"],
    "url": "https://loveforlivres.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://loveforlivres.com/images/Logo.png",
      "width": 120,
      "height": 40
    },
    "description": "Organisme de formation spécialisé en développement personnel, communication, management et sciences cognitives. Accompagnement personnalisé pour l'épanouissement professionnel et personnel.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French"],
      "areaServed": "FR",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
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
}

// Fonction utilitaire pour créer les données structurées d'une formation
export function getCourseStructuredData(formation: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": formation.title,
    "description": formation.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Love for Livres",
      "url": "https://loveforlivres.com"
    },
    "courseMode": "online",
    "educationalLevel": "professional",
    "inLanguage": "fr",
    "timeRequired": `PT${formation.duration.replace('h', 'H')}`,
    "teaches": formation.objectives,
    "coursePrerequisites": formation.prerequis.join(', '),
    "educationalCredentialAwarded": "Certificat de réalisation",
    "offers": {
      "@type": "Offer",
      "price": formation.prices.individuel.price.replace('€', ''),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  }
}

// Fonction utilitaire pour créer les données structurées du site web
export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Love for Livres",
    "url": "https://loveforlivres.com",
    "description": "Formations en développement personnel, communication, management et sciences cognitives",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://loveforlivres.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
} 