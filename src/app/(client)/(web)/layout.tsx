import { FC, ReactNode } from 'react'

import { LayoutModule } from '@/app/(client)/module/layout'
import { mainFont } from '@/pkg/font'
import { RestApiProvider } from '@/pkg/library/rest-api'
import { ScanComponent } from '@/pkg/library/scan'
import { UiProvider } from '@/pkg/library/ui'

import '@/pkg/style/globals.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
      <ScanComponent />

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
