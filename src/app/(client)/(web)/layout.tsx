import { Metadata } from 'next'
import { FC, ReactNode } from 'react'

import { LayoutModule } from '@/app/(client)/module/layout'
import { mainFont } from '@/pkg/font'
import { RestApiProvider } from '@/pkg/library/rest-api'
import { ScanComponent } from '@/pkg/library/scan'
import { UiProvider } from '@/pkg/library/ui'

import '@/pkg/style/globals.css'

import { EAssetImage } from '../shared/asset/interface/asset.interface'

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

// interface
interface IProps {
  children: ReactNode
}

// component
const RootLayout: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  // return
  return (
    <html lang={'en'}>
      {process.env.NODE_ENV !== 'production' && <ScanComponent />}

      <body className={`${mainFont.className} antialiased`} suppressHydrationWarning>
        <UiProvider locale={'en'}>
          <RestApiProvider>
            <LayoutModule>{children}</LayoutModule>
          </RestApiProvider>
        </UiProvider>
      </body>
    </html>
  )
}

export default RootLayout
