import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC, type ReactNode } from 'react'
import { getLangDir } from 'rtl-detect'

import { LayoutModule } from '@/app/(client)/modules/layout'
import { EAssetImage } from '@/app/(client)/shared/assets/interface/asset.interface'
import { mainFont } from '@/pkg/font'
import { routing } from '@/pkg/library/locale/routing'
import { RestApiProvider } from '@/pkg/library/rest-api'
import { ScanComponent } from '@/pkg/library/scan'
import { UiProvider } from '@/pkg/library/ui'

import '@/pkg/style/globals.css'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

// generate static params
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// metadata
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_CLIENT_WEB_URL}`),
    title: {
      default: 'CMS Template',
      template: `CMS Template | %s`,
    },
    description: 'CMS Template',
    applicationName: 'CMS Template',
    openGraph: {
      title: {
        default: 'CMS Template',
        template: `CMS Template | %s`,
      },
      description: 'CMS Template',
      siteName: 'CMS Template',
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_CLIENT_WEB_URL}`,
      images: [
        {
          url: EAssetImage.OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'CMS Template',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CMS Template',
      description: 'CMS Template',
      images: [EAssetImage.OG_IMAGE],
    },
  }
}

// component
const RootLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props

  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const direction = getLangDir(locale)

  // return
  return (
    <html lang={locale} dir={direction}>
      {process.env.NODE_ENV !== 'production' && <ScanComponent />}

      <body className={`${mainFont.className} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider>
          <UiProvider locale={locale}>
            <RestApiProvider>
              <LayoutModule>{children}</LayoutModule>
            </RestApiProvider>
          </UiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
