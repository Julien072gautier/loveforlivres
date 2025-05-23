import { ThemeConfig } from './types';

/**
 * Configuration principale du thème
 * Modifiez ces valeurs pour personnaliser le site
 */
const themeConfig: ThemeConfig = {
  // Informations de base sur l'entreprise
  company: {
    name: 'Zuma',
    tagline: '',
    fullName: 'Zuma',
    description: 'Zuma',
    address: {
      street: '25 rue Taitbout',
      city: 'Paris',
      postalCode: '75009',
      country: 'France'
    },
    contact: {
      phone: '06 61 15 76 02',
      email: 'bonjour@zuma-partners.com',
      supportEmail: 'bonjour@zuma-partners.com'
    },
    socialMedia: {
      facebook: '',
      linkedin: 'https://www.linkedin.com/company/zumapartners',
      twitter: 'https://x.com/zumaparis',
      instagram: 'https://instagram.com/zumaparis'
    }
  },

  // Paramètres de marque et couleurs
  brand: {
    // Couleur principale (doit correspondre à tailwind.config.js)
    primaryColor: '#1BB3BA',
    // Nom de la couleur dans Tailwind
    primaryColorName: 'brand',
    secondaryColor: '#FFD400',
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
      alt: 'Zuma',
      link: 'http://www.zuma-partners.com/'
    },
    footer: {
      url: '/images/Logo.png',
      alt: 'Zuma',
      link: 'http://www.zuma-partners.com/'
    },
    // Logo alternatif ou favicon
    favicon: {
      url: '/images/Bleu-favicone.png',
      alt: 'Zuma',
    },
    // Logo pour les supports marketing (PDF, etc.)
    marketing: {
      url: '/images/Logo.png',
      alt: 'Zuma'
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
    skillupPlatform: 'https://skillup.accertif.fr',
    skillupLabel: 'Accès Plateforme',
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
      text: 'Accès Plateforme',
      url: 'https://skillup.accertif.fr',
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
    copyright: '© {year} Accertif. Tous droits réservés.'
  }
};

export default themeConfig;
