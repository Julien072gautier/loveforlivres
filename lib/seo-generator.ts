// Générateur de métadonnées SEO dynamique pour Love for Livres
import formationsConfig from './config/formations'

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    url: string
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: string
    title: string
    description: string
    images: string[]
  }
  structuredData?: any
}

// Données SEO spécifiques pour chaque formation
export const formationSEOData: Record<string, any> = {
  'communication-empathie': {
    name: 'Communication et Empathie',
    fullDescription: 'Améliorez votre communication et développez votre empathie pour des relations professionnelles plus efficaces. Formation non-certifiante en développement personnel.',
    keywords: ['communication', 'empathie', 'développement personnel', 'relations professionnelles', 'soft skills'],
    price: 'À partir de 1200€',
    certification: 'Attestation de formation',
    skills: ['Communication', 'Empathie', 'Relations professionnelles', 'Développement personnel'],
    image: '/images/1.jpg'
  },
  'leadership-confiance': {
    name: 'Leadership et Confiance en Soi',
    fullDescription: 'Cultivez votre leadership et renforcez votre confiance en soi pour devenir un manager inspirant. Formation non-certifiante en développement personnel.',
    keywords: ['leadership', 'confiance en soi', 'management', 'développement personnel', 'soft skills'],
    price: 'À partir de 1500€',
    certification: 'Attestation de formation',
    skills: ['Leadership', 'Confiance en soi', 'Management', 'Développement personnel'],
    image: '/images/2.jpg'
  },
  'courage-managerial': {
    name: 'Courage Managérial',
    fullDescription: 'Développez votre courage managérial pour oser décider, agir et affirmer votre leadership. Formation non-certifiante en management et leadership.',
    keywords: ['courage managérial', 'leadership', 'décision', 'management', 'développement personnel'],
    price: 'À partir de 1800€',
    certification: 'Attestation de formation',
    skills: ['Courage managérial', 'Leadership', 'Prise de décision', 'Management'],
    image: '/images/3.jpg'
  },
  'biais-cognitifs': {
    name: 'Biais Cognitifs',
    fullDescription: 'Découvrez et maîtrisez les biais cognitifs pour améliorer votre prise de décision et votre performance au travail. Formation non-certifiante en sciences cognitives.',
    keywords: ['biais cognitifs', 'sciences cognitives', 'prise de décision', 'performance', 'psychologie'],
    price: 'À partir de 1500€',
    certification: 'Attestation de formation',
    skills: ['Biais cognitifs', 'Sciences cognitives', 'Prise de décision', 'Performance'],
    image: '/images/3.jpg'
  },
  'intelligence-emotionnelle': {
    name: 'Intelligence Émotionnelle',
    fullDescription: 'Développez votre intelligence émotionnelle pour mieux gérer vos émotions et celles de votre équipe. Formation non-certifiante en développement personnel.',
    keywords: ['intelligence émotionnelle', 'émotions', 'développement personnel', 'management', 'soft skills'],
    price: 'À partir de 1400€',
    certification: 'Attestation de formation',
    skills: ['Intelligence émotionnelle', 'Gestion des émotions', 'Développement personnel', 'Management'],
    image: '/images/4.jpg'
  },
  'gestion-stress-burnout': {
    name: 'Gestion du Stress et Prévention du Burnout',
    fullDescription: 'Apprenez à mieux gérer votre stress et prévenez le burnout pour maintenir votre bien-être professionnel. Formation non-certifiante en développement personnel.',
    keywords: ['gestion stress', 'burnout', 'bien-être professionnel', 'développement personnel', 'prévention'],
    price: 'À partir de 1300€',
    certification: 'Attestation de formation',
    skills: ['Gestion du stress', 'Prévention burnout', 'Bien-être professionnel', 'Développement personnel'],
    image: '/images/5.jpg'
  }
}

export function generateFormationSEO(formationSlug: string): SEOData {
  const formation = formationsConfig.formations.find(f => f.slug === formationSlug)
  const seoData = formationSEOData[formationSlug]
  
  if (!formation || !seoData) {
    return generatePageSEO('formations')
  }

  const baseUrl = 'https://loveforlivres.com'
  const formationUrl = `${baseUrl}/formation/${formationSlug}`
  
  return {
    title: `Formation ${seoData.name} | Love for Livres`,
    description: seoData.fullDescription,
    keywords: seoData.keywords,
    openGraph: {
      title: `Formation ${seoData.name} | Love for Livres`,
      description: seoData.fullDescription,
      url: formationUrl,
      images: [
        {
          url: seoData.image,
          width: 1200,
          height: 630,
          alt: `Formation ${seoData.name} - Love for Livres`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `Formation ${seoData.name} | Love for Livres`,
      description: seoData.fullDescription,
      images: [seoData.image]
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": `Formation ${seoData.name}`,
      "description": seoData.fullDescription,
      "provider": {
        "@type": "Organization",
        "name": "Love for Livres",
        "url": baseUrl
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["blended", "online", "offline"],
        "courseWorkload": formation.duration,
        "instructor": {
          "@type": "Person",
          "name": "Équipe Love for Livres"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": seoData.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": formationUrl
      },
      "educationalCredentialAwarded": seoData.certification,
      "teaches": seoData.skills,
      "image": seoData.image,
      "url": formationUrl
    }
  }
}

export function generatePageSEO(pageType: string, customData?: any): SEOData {
  const baseUrl = 'https://loveforlivres.com'
  
  const baseSEO = {
    website: {
      title: 'Love for Livres - Formations en Développement Personnel et Management',
      description: 'Découvrez nos formations en développement personnel, communication, management et sciences cognitives. Accompagnement personnalisé pour votre épanouissement professionnel.',
      keywords: ['formation', 'développement personnel', 'communication', 'management', 'sciences cognitives', 'Love for Livres']
    },
    formations: {
      title: 'Toutes nos Formations | Love for Livres',
      description: 'Découvrez toutes nos formations en développement personnel, communication, management et sciences cognitives. Formations adaptées aux professionnels et aux équipes.',
      keywords: ['formations', 'catalogue formation', 'développement personnel', 'communication', 'management', 'sciences cognitives']
    },
    contact: {
      title: 'Contactez-nous | Love for Livres',
      description: 'Contactez Love for Livres pour plus d\'informations sur nos formations en développement personnel. Notre équipe vous accompagne dans votre projet de formation.',
      keywords: ['contact Love for Livres', 'information formation', 'conseiller formation', 'accompagnement']
    },
    about: {
      title: 'À Propos de Love for Livres | Formations en Développement Personnel',
      description: 'Love for Livres est spécialisé dans les formations en développement personnel, communication et management. Découvrez notre approche et notre engagement pour votre épanouissement.',
      keywords: ['Love for Livres', 'à propos', 'formations développement personnel', 'communication', 'management']
    }
  }

  const seo = baseSEO[pageType as keyof typeof baseSEO] || baseSEO.website

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: baseUrl,
      images: [
        {
          url: '/images/Logo.png',
          width: 1200,
          height: 630,
          alt: 'Love for Livres - Formations en Développement Personnel'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/images/Logo.png']
    }
  }
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  }
}
