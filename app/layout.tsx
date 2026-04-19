import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Voyance Immédiate | Cheikh - Médium Marocain à Paris',
  description: 'Consultation de voyance immédiate par téléphone avec Cheikh, médium marocain de confiance à Paris. Voyance Mektoub, interprétation des rêves en Islam, astrologie arabe, lecture du marc de café. Plus de 20 ans d\'expérience. Réponses claires sur l\'amour, le travail, la famille.',
  keywords: [
    'Voyance Mektoub',
    'Voyance marocaine en France',
    'Interprétation des rêves en Islam',
    'Voyance orientale sérieuse',
    'Astrologie arabe',
    'Lecture du marc de café',
    'Médium maghrébine',
    'Voyant Paris',
    'Cabinet de voyance',
    'Est-ce qu\'il va revenir',
    'Comment connaître mon Mektoub',
    'Quelle est la signification de mon rêve',
    'Vais-je trouver du travail cette année',
    'Voyance Paris France',
    'Voyance immédiate',
    'Consultation voyance téléphone',
    'Médium marocain',
    'Retour de l\'être aimé',
    'Voyance amour',
    'Voyance travail'
  ],
  openGraph: {
    title: 'Voyance Immédiate | Cheikh - Médium Marocain à Paris',
    description: 'Consultation de voyance immédiate par téléphone avec Cheikh, médium marocain de confiance. Plus de 20 ans d\'expérience. Amour, travail, famille.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'fr': '/',
      'ar': '/',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
