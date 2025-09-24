import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { GoogleTagManager, GoogleTagManagerNoScript } from '../components/GoogleTagManager'
import { GTM_CONFIG } from '../lib/config/gtm'
import StructuredData, { getOrganizationStructuredData, getWebsiteStructuredData } from '../components/StructuredData'
import { JsonLd } from '../components/JsonLd'
import { SEO_CONFIG } from '../lib/config/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.site.url),
  title: `${SEO_CONFIG.site.name} - ${SEO_CONFIG.site.description}`,
  description: SEO_CONFIG.site.description,
  keywords: SEO_CONFIG.site.keywords,
  authors: [{ name: SEO_CONFIG.site.name }],
  creator: SEO_CONFIG.site.name,
  publisher: SEO_CONFIG.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SEO_CONFIG.site.name} - ${SEO_CONFIG.site.description}`,
    description: SEO_CONFIG.site.description,
    url: SEO_CONFIG.site.url,
    siteName: SEO_CONFIG.site.name,
    locale: SEO_CONFIG.site.locale,
    type: SEO_CONFIG.site.type,
    images: [
      {
        url: SEO_CONFIG.images.ogImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.site.name,
      }
    ],
  },
  twitter: {
    card: SEO_CONFIG.social.twitter.cardType,
    title: `${SEO_CONFIG.site.name} - ${SEO_CONFIG.site.description}`,
    description: SEO_CONFIG.site.description,
    images: [SEO_CONFIG.images.twitterImage],
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
  icons: {
    icon: '/images/Bleu-favicone.png',
    apple: '/images/Bleu-favicone.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': SEO_CONFIG.meta.themeColor,
    'msapplication-TileColor': SEO_CONFIG.meta.msapplicationTileColor,
    'apple-mobile-web-app-capable': SEO_CONFIG.meta.appleMobileWebAppCapable,
    'apple-mobile-web-app-status-bar-style': SEO_CONFIG.meta.appleMobileWebAppStatusBarStyle,
    'apple-mobile-web-app-title': SEO_CONFIG.meta.appleMobileWebAppTitle,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const shouldShowFooter = false;

  return (
    <html lang="fr">
      <head>
        {GTM_CONFIG.ENABLED && <GoogleTagManager gtmId={GTM_CONFIG.GTM_ID} />}
        <JsonLd />
        <StructuredData data={getOrganizationStructuredData()} />
        <StructuredData data={getWebsiteStructuredData()} />
      </head>
      <body style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
        {GTM_CONFIG.ENABLED && <GoogleTagManagerNoScript gtmId={GTM_CONFIG.GTM_ID} />}
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          {shouldShowFooter && <Footer />}
        </div>
      </body>
    </html>
  )
}
