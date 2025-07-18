import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FormationPage from '../../components/FormationPage'
import formationsConfig from '../../lib/config/formations'
import StructuredData, { getCourseStructuredData } from '../../components/StructuredData'
import { SEO_CONFIG, generateFormationKeywords, generateFormationDescription } from '../../lib/config/seo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Générer seulement les slugs des formations valides
  return formationsConfig.formations.map((formation) => ({
    slug: formation.slug
  }))
}

// Fonction pour vérifier si le slug est valide
function isValidFormationSlug(slug: string): boolean {
  // Exclure les fichiers système et extensions
  if (slug.includes('.') || slug.startsWith('_') || slug.startsWith('api/')) {
    return false
  }
  
  // Vérifier que le slug existe dans nos formations
  return formationsConfig.formations.some((formation) => formation.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const formation = formationsConfig.formations.find(
    (formation) => formation.slug === slug
  )

  if (!formation) {
    return {
      title: 'Formation non trouvée - Love for Livres',
    }
  }

  const keywords = generateFormationKeywords(formation)
  const description = generateFormationDescription(formation)

  return {
    title: `${formation.title} - ${SEO_CONFIG.site.name}`,
    description: description,
    keywords: keywords,
    authors: [{ name: SEO_CONFIG.site.name }],
    creator: SEO_CONFIG.site.name,
    publisher: SEO_CONFIG.site.name,
    openGraph: {
      title: `${formation.title} - ${SEO_CONFIG.site.name}`,
      description: description,
      url: `${SEO_CONFIG.site.url}/${formation.slug}`,
      siteName: SEO_CONFIG.site.name,
      locale: SEO_CONFIG.site.locale,
      type: 'article' as const,
      images: [
        {
          url: formation.image,
          width: 1200,
          height: 630,
          alt: formation.title,
        }
      ],
    },
    twitter: {
      card: SEO_CONFIG.social.twitter.cardType,
      title: `${formation.title} - ${SEO_CONFIG.site.name}`,
      description: description,
      images: [formation.image],
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
}

export default async function FormationDetailPage({ params }: Props) {
  const { slug } = await params
  
  // Vérifier si le slug est valide avant de chercher la formation
  if (!isValidFormationSlug(slug)) {
    notFound()
  }
  
  const formation = formationsConfig.formations.find(
    (formation) => formation.slug === slug
  )

  if (!formation) {
    notFound()
  }

  return (
    <>
      <StructuredData data={getCourseStructuredData(formation)} />
      <FormationPage />
    </>
  )
}
