import { ThemeConfig } from './types';

/**
 * Configuration principale du thème
 * Modifiez ces valeurs pour personnaliser le site
 */
const themeConfig: ThemeConfig = {
  // Informations de base sur l'entreprise
  company: {
    name: 'Love for Livres',
    tagline: '',
    fullName: 'Love for Livres',
    description: 'Love for Livres',
    address: {
      street: '33 boulevard de Grenelle',
      city: 'Paris',
      postalCode: '75015',
      country: 'France'
    },
    contact: {
      phone: '07 56 92 27 27',
      email: 'contact@loveforlivres.com',
      supportEmail: 'contact@loveforlivres.com'
    },
    socialMedia: {
      facebook: 'https://www.facebook.com/loveforlivres',
      linkedin: 'https://fr.linkedin.com/company/love-for-livres',
      twitter: 'https://x.com/loveforlivres',
      instagram: 'https://www.instagram.com/loveforlivres/'
    }
  },

  // Paramètres de marque et couleurs
  brand: {
    // Couleur principale (doit correspondre à tailwind.config.js)
    primaryColor: '#50a2d6',
    // Nom de la couleur dans Tailwind
    primaryColorName: 'brand',
    secondaryColor: '#8b308e',
    accentColor: '#1b230a',
    // Options de police
    fontFamily: {
      heading: 'sans-serif',
      body: 'sans-serif'
    }
  },

      // Configuration des logos
  logos: {
    header: {
      url: '/images/Logo.png',
      alt: 'Love for Livres',
      link: 'https://loveforlivres.com/'
    },
    footer: {
      url: '/images/Logo.png',
      alt: 'Love for Livres',
      link: 'https://loveforlivres.com/'
    },
    // Logo alternatif ou favicon
    favicon: {
      url: '/images/Logo.png',
      alt: 'Love for Livres',
    },
    // Logo pour les supports marketing (PDF, etc.)
    marketing: {
      url: '/images/Logo.png',
      alt: 'Love for Livres'
    }
  },

  // Configuration des images
  images: {
    hero: {
      home: '/images/hero-home.jpg',
      formations: '/images/hero-formations.jpg',
      about: '/images/hero-about.jpg',
      contact: '/images/hero-contact.jpg'
    },
    team: {
      // Images de l'équipe
      directory: '/images/team/'
    },
    formations: {
      // Répertoire des images pour les formations
      directory: '/images/formations/'
    }
  },

  // Configuration des liens externes
  externalLinks: {
    skillupPlatform: 'https://loveforlivres.com/',
    skillupLabel: 'Accès Site Principal',
    certificationPartner: 'https://www.certificationpartner.fr'
  },

  // Configuration de l'en-tête et du menu de navigation
  navigation: {
    // Liens du menu principal
    mainMenu: [
      { name: 'Accueil', path: '/' },
      { name: 'Formations', path: '/formations' },
      { name: 'À Propos', path: '/a-propos' },
      { name: 'Contact', path: '/contact' }
    ],
    // Liens de l'en-tête (CTA)
    ctaButton: {
      text: 'Accès Site Principal',
      url: 'https://loveforlivres.com/',
      isExternal: true
    }
  },

  // Configuration du pied de page
  footer: {
    // Colonnes du pied de page
    columns: [
      {
        title: 'Liens Rapides',
        links: [
          { name: 'Accueil', path: '/' },
          { name: 'Nos Formations', path: '/formations' },
          { name: 'À propos', path: '/a-propos' },
          { name: 'Contact', path: '/contact' }
        ]
      },
    ],
    
    // Texte de copyright
    copyright: '© {year} Love for Livres. Tous droits réservés.'
  }
};

export default themeConfig;
