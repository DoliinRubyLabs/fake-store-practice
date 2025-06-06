import { FC, ReactNode } from 'react'

import { dehydrate } from '@tanstack/query-core'
import { HydrationBoundary } from '@tanstack/react-query'

import { HeaderComponent } from './element/header'
import { getLayoutService } from './layout.service'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  const layoutService = await getLayoutService()

  // return
  return (
    <HydrationBoundary state={dehydrate(layoutService.clientQuery)}>
      <div className={'relative grid'}>
        <HeaderComponent />

        {children}
      </div>
    </HydrationBoundary>
  )
}

export default LayoutModule
