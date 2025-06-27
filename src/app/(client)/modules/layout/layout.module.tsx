import { type FC, type ReactNode } from 'react'

import { FooterComponent } from '@/app/features/footer'
import { HeaderComponent } from '@/app/features/header'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  // return
  return (
    <>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </>
  )
}

export default LayoutModule
