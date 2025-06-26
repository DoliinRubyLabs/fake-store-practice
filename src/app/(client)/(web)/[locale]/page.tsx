import { type Metadata } from 'next'
import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { pagesQueryOptions } from '@/app/entities/api/page'
import { HomeModule } from '@/app/modules/home'
import { getQueryClient } from '@/pkg/library/rest-api'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// metadata
export const generateMetadata = async (): Promise<Metadata> => {
  const clientQuery = getQueryClient()

  const data = await clientQuery.fetchQuery(pagesQueryOptions())

  return {
    title: data?.meta?.title,
    description: data?.meta?.description,
    openGraph: {
      title: data?.meta?.title,
      description: data?.meta?.description,
      images: [data?.meta?.image?.url || ''],
    },
  }
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
