import { FC, ReactNode } from 'react'

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
