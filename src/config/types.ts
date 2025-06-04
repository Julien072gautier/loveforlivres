/**
 * Types pour la configuration du thème
 */

// Type pour les liens de navigation
export interface NavigationLink {
  name: string;
  path: string;
}

// Type pour le bouton CTA
export interface CTAButton {
  text: string;
  url: string;
  isExternal: boolean;
}

// Type pour les colonnes du pied de page
export interface FooterColumn {
  title: string;
  links: NavigationLink[];
}

// Type pour la configuration du logo
export interface LogoConfig {
  url: string;
  alt: string;
  link?: string;
}

// Type pour les informations de contact de l'entreprise
export interface CompanyContact {
  phone?: string;
  email: string;
  supportEmail: string;
}

// Type pour l'adresse de l'entreprise
export interface CompanyAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

// Type pour les médias sociaux
export interface SocialMedia {
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

// Type pour les informations de l'entreprise
export interface CompanyInfo {
  name: string;
  tagline: string;
  fullName: string;
  description: string;
  address: CompanyAddress;
  contact: CompanyContact;
  socialMedia: SocialMedia;
}

// Type pour les paramètres de marque
export interface BrandSettings {
  primaryColor: string;
  primaryColorName: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: {
    heading: string;
    body: string;
  };
}

// Type pour la configuration des logos
export interface LogosConfig {
  header: LogoConfig;
  footer: LogoConfig;
  favicon: LogoConfig;
  marketing: LogoConfig;
}

// Type pour la configuration des images
export interface ImagesConfig {
  hero: {
    home: string;
    formations: string;
    about: string;
    contact: string;
  };
  team: {
    directory: string;
  };
  formations: {
    directory: string;
  };
}

// Type pour les liens externes
export interface ExternalLinks {
  skillupPlatform: string;
  skillupLabel: string;
  certificationPartner: string;
}

// Type pour la configuration de navigation
export interface NavigationConfig {
  mainMenu: NavigationLink[];
  ctaButton: CTAButton;
}

// Type pour la configuration du pied de page
export interface FooterConfig {
  columns: FooterColumn[];
  copyright: string;
}

// Type principal pour toute la configuration du thème
export interface ThemeConfig {
  company: CompanyInfo;
  brand: BrandSettings;
  logos: LogosConfig;
  images: ImagesConfig;
  externalLinks: ExternalLinks;
  navigation: NavigationConfig;
  footer: FooterConfig;
}

// Type pour les modalités de formation
export interface FormationModality {
  price: string;
  label: string;
}

// Type pour les informations de prix des formations
export interface FormationPrices {
  individuel: FormationModality;
  collectif: FormationModality;
}

// Type pour représenter une formation
export interface Formation {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  slug: string;
  category: string;
  image: string;
  icon?: string;
  duration: string;
  prices: FormationPrices;
  cpfEligible: boolean;
  features: string[];
  certifications?: string[];
  objectives: string[];
  program: {
    title: string;
    items: string[];
  }[];
  teachingMethods?: string[]; // Méthodes pédagogiques
  evaluationMethods?: string[]; // Modalités d'évaluation
  accessibility?: string[]; // Informations sur l'accessibilité
  
  // Champs additionnels pour la structure complète
  certificationDetails?: {
    name: string;
    code: string;
    organization: string;
    description: string;
    examDetails?: {
      format: string[];
      successRate?: string;
    };
  };
  
  modalites?: string; // "Présentiel ou distanciel ou mixte"
  publicVise?: string[]; // Public visé par la formation
  prerequis?: string[]; // Prérequis pour suivre la formation
  
  // Pourquoi suivre cette formation
  reasons?: {
    title: string;
    description: string;
    icon: string; // Nom de l'icône Lucide React
  }[];
  formateur?: string;
}

// Type pour la configuration des formations
export interface FormationsConfig {
  categories: {
    id: string;
    name: string;
    description: string;
    icon: string;
  }[];
  formations: Formation[];
}
