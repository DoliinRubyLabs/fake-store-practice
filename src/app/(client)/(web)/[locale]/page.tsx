import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

import { HydrationBoundary } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'

import { pagesQueryOptions } from '@/app/entities/api/page'
import { HomeModule } from '@/app/modules/home'
import { getQueryClient } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const clientQuery = getQueryClient()
  await clientQuery.prefetchQuery(pagesQueryOptions())

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export default Page
