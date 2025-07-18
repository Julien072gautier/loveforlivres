import { Metadata } from 'next'
import FormulaireBesoinPage from '../../components/FormulaireBesoinPage'
import { SEO_CONFIG } from '../../lib/config/seo'

export const metadata: Metadata = {
  title: `Demande de formation personnalisée - ${SEO_CONFIG.site.name}`,
  description: `Contactez ${SEO_CONFIG.site.name} pour une formation personnalisée en développement personnel, communication, management ou sciences cognitives. Demande de devis et accompagnement sur mesure.`,
  keywords: `demande formation, formation personnalisée, devis formation, ${SEO_CONFIG.site.name}, développement personnel, communication, management`,
  authors: [{ name: SEO_CONFIG.site.name }],
  creator: SEO_CONFIG.site.name,
  publisher: SEO_CONFIG.site.name,
  openGraph: {
    title: `Demande de formation personnalisée - ${SEO_CONFIG.site.name}`,
    description: `Contactez ${SEO_CONFIG.site.name} pour une formation personnalisée en développement personnel, communication, management ou sciences cognitives.`,
    url: `${SEO_CONFIG.site.url}/demande-formation`,
    siteName: SEO_CONFIG.site.name,
    locale: SEO_CONFIG.site.locale,
    type: SEO_CONFIG.site.type,
  },
  twitter: {
    card: SEO_CONFIG.social.twitter.cardType,
    title: `Demande de formation personnalisée - ${SEO_CONFIG.site.name}`,
    description: `Contactez ${SEO_CONFIG.site.name} pour une formation personnalisée en développement personnel, communication, management ou sciences cognitives.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function DemandeFormationPage() {
  return <FormulaireBesoinPage />
}
