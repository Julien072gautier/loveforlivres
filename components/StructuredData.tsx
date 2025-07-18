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
    "@type": "Organization",
    "name": "Love for Livres",
    "url": "https://loveforlivres.com",
    "logo": "https://loveforlivres.com/images/Logo.png",
    "description": "Formations en développement personnel, communication, management et sciences cognitives",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
    "sameAs": [
      // Ajoutez ici vos réseaux sociaux si disponibles
    ]
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