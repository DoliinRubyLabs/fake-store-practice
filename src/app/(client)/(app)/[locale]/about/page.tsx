import { Metadata } from 'next'
import { FC } from 'react'

import { AboutModule } from '@/app/(client)/modules/about'

// metadata
export const metadata: Metadata = {
  title: 'About Us - Making Smarter Shopping Simple',
  description:
    'Learn about BuyersGuide - your trusted source for unbiased product reviews and comparisons. We help you make confident shopping decisions without the hassle.',
  keywords:
    'about us, BuyersGuide, product reviews, shopping guide, unbiased reviews, product comparisons, smart shopping, consumer guide',
  openGraph: {
    title: 'About Us - Making Smarter Shopping Simple | BuyersGuide',
    description:
      'Learn about BuyersGuide - your trusted source for unbiased product reviews and comparisons. We help you make confident shopping decisions without the hassle.',
    type: 'website',
    url: '/about',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BuyersGuide - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Making Smarter Shopping Simple | BuyersGuide',
    description:
      'Learn about BuyersGuide - your trusted source for unbiased product reviews and comparisons. We help you make confident shopping decisions without the hassle.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/about',
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
  authors: [
    {
      name: 'BuyersGuide Team',
    },
  ],
  category: 'Shopping Guide',
  classification: 'Business',
}

// interface
interface IProps {}

// component
const AboutPage: FC<Readonly<IProps>> = () => {
  return <AboutModule />
}

export default AboutPage
