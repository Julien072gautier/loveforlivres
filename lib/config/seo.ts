export const SEO_CONFIG = {
  // Configuration générale du site
  site: {
    name: 'Love for Livres',
    url: 'https://loveforlivres.com',
    description: 'Formations en développement personnel, communication, management et sciences cognitives',
    keywords: [
      'formation',
      'développement personnel',
      'communication',
      'management',
      'leadership',
      'sciences cognitives',
      'confiance en soi',
      'empathie',
      'Love for Livres',
      'formation professionnelle',
      'accompagnement',
      'coaching'
    ].join(', '),
    locale: 'fr_FR',
    type: 'website' as const,
  },

  // Configuration des réseaux sociaux
  social: {
    twitter: {
      handle: '@loveforlivres', // À adapter selon vos réseaux sociaux
      cardType: 'summary_large_image' as const,
    },
    facebook: {
      appId: '', // À ajouter si vous avez une app Facebook
    },
  },

  // Configuration des balises meta
  meta: {
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1e40af', // Couleur du thème (bleu)
    msapplicationTileColor: '#1e40af',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    appleMobileWebAppTitle: 'Love for Livres',
  },

  // Configuration des liens canoniques
  canonical: {
    baseUrl: 'https://loveforlivres.com',
  },

  // Configuration des images par défaut
  images: {
    default: '/images/Logo.png',
    ogImage: '/images/Logo.png',
    twitterImage: '/images/Logo.png',
  },

  // Configuration des catégories pour le SEO
  categories: {
    'Management': {
      keywords: 'management, leadership, équipe, direction, encadrement',
      description: 'Formations en management et leadership pour développer vos compétences managériales'
    },
    'Communication': {
      keywords: 'communication, prise de parole, empathie, écoute, expression',
      description: 'Formations en communication pour améliorer vos prises de parole et votre empathie'
    },
    'Développement personnel': {
      keywords: 'développement personnel, bien-être, confiance, potentiel, épanouissement',
      description: 'Formations en développement personnel pour révéler votre plein potentiel'
    },
    'Sciences cognitives': {
      keywords: 'sciences cognitives, cerveau, neurosciences, cognition, apprentissage',
      description: 'Formations en sciences cognitives pour comprendre et maîtriser les mécanismes de votre cerveau'
    }
  }
}

// Fonction utilitaire pour générer les mots-clés d'une formation
export function generateFormationKeywords(formation: any): string {
  const baseKeywords = [
    'formation',
    formation.category.toLowerCase(),
    ...formation.features.map((feature: string) => feature.toLowerCase()),
    'Love for Livres'
  ]

  // Ajouter des mots-clés spécifiques selon la catégorie
  const categoryKeywords = SEO_CONFIG.categories[formation.category as keyof typeof SEO_CONFIG.categories]?.keywords || ''
  
  return [...baseKeywords, ...categoryKeywords.split(', ')].join(', ')
}

// Fonction utilitaire pour générer la description d'une formation
export function generateFormationDescription(formation: any): string {
  const categoryDescription = SEO_CONFIG.categories[formation.category as keyof typeof SEO_CONFIG.categories]?.description || ''
  
  return `${formation.shortDescription} ${categoryDescription} - Love for Livres.`
} 