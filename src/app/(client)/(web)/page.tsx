import { Metadata } from 'next'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { HomeModule } from '@/app/(client)/module/home'
import { pagesQueryOptions } from '@/app/(client)/shared/rest-api/api/page'
import { getQueryClient } from '@/pkg/library/rest-api'

import { IHomePage } from '../shared/rest-api/interface/page.interface'

// interface
interface IProps {}

// metadata
export const generateMetadata = async (): Promise<Metadata> => {
  const clientQuery = getQueryClient()

  await clientQuery.prefetchQuery(pagesQueryOptions())

  const data = (await clientQuery.getQueryData(pagesQueryOptions().queryKey)) as IHomePage

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
const Page: FC<Readonly<IProps>> = async () => {
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
