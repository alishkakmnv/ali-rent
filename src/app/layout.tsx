import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://azian-ali-servis.vercel.app'

export const metadata: Metadata = {
  title: 'Ali Servis — Аренда погрузчиков в Алматы | Mitsubishi, Komatsu',
  description:
    'Аренда вилочных погрузчиков 1.5, 2.5 и 3 тонны в Алматы. Доставка и оператор включены в стоимость. Mitsubishi Grendia, Komatsu. Телефон: +7 707 144 43 48. Работаем ежедневно 09:00–18:00.',
  keywords: [
    'аренда погрузчика Алматы',
    'вилочный погрузчик аренда',
    'Mitsubishi Grendia аренда',
    'Komatsu погрузчик Алматы',
    'Ali Servis',
    'спецтехника Алматы',
    'погрузчик в аренду Турксибский район',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: SITE_URL,
    siteName: 'Ali Servis',
    title: 'Ali Servis — Аренда погрузчиков в Алматы',
    description:
      'Аренда вилочных погрузчиков Mitsubishi и Komatsu в Алматы. Доставка и оператор в цене. Минималка от 3 часов.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ali Servis — аренда погрузчиков в Алматы',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Servis — Аренда погрузчиков в Алматы',
    description: 'Mitsubishi Grendia и Komatsu. Доставка и оператор включены. От 3 часов.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ali Servis',
  description: 'Аренда вилочных погрузчиков в Алматы. Mitsubishi Grendia, Komatsu.',
  url: SITE_URL,
  telephone: ['+77071444348', '+77021444348'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Бекмаханова, 90',
    addressLocality: 'Алматы',
    addressRegion: 'Алматинская область',
    addressCountry: 'KZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.348134,
    longitude: 76.967395,
  },
  openingHours: 'Mo-Su 09:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '12',
    bestRating: '5',
  },
  priceRange: '₸₸',
  image: `${SITE_URL}/og-image.jpg`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
