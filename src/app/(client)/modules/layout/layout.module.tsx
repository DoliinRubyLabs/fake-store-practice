import { FC, ReactNode } from 'react'

import { layoutService } from './layout.service'

import { HeaderComponent } from '../../features/header'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  const thiservice = layoutService()

  // return
  return (
    <div className={'relative grid'}>
      <HeaderComponent />

      {children}
    </div>
  )
}

export default LayoutModule
