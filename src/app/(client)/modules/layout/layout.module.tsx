import { FC, ReactNode } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { layoutQueryOptions } from '@/app/entities/api/layout'
import { FooterComponent } from '@/app/features/footer'
import { HeaderComponent } from '@/app/features/header'
import { getQueryClient } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = async (props) => {
  const { children } = props

  const clientQuery = getQueryClient()

  await clientQuery.prefetchQuery(layoutQueryOptions())

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HeaderComponent />

      {children}

      <FooterComponent />
    </HydrationBoundary>
  )
}

export default LayoutModule
