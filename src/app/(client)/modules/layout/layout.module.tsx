import { FC, ReactNode } from 'react'

import { HeaderComponent } from '@/app/features/header'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <div className={'relative grid'}>
      <HeaderComponent />

      {children}
    </div>
  )
}

export default LayoutModule
