import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC } from 'react'

import { HydrationBoundary } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'

import { EPageKey } from '@/app/(client)/entities/models'
import { CategoryModule } from '@/app/(client)/modules/category'
import { EAssetImage } from '@/app/(client)/shared/assets/interface'
import { pagesQueryOptions } from '@/client/entities/api/page'
import { envClient } from '@/config/env'
import { getQueryClient } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  params: Promise<{ locale: Locale; category_slug: string }>
}

// metadata
export const generateMetadata = async (props: IProps) => {
  const { locale, category_slug } = await props.params

  const clientQuery = getQueryClient()
  const data = await clientQuery.fetchQuery(
    pagesQueryOptions({ pageKey: EPageKey.PAGES_QUERY_CATEGORIES_PAGE, locale, categorySlug: category_slug }),
  )

  const title = data?.meta?.title || 'Category'
  const description = data?.meta?.description || 'Category'
  const ogImage = data?.meta?.image?.url || EAssetImage.OG_IMAGE

  return {
    title,
    description: description,
    applicationName: title,
    openGraph: {
      title,
      description: description,
      siteName: title,
      type: 'website',
      url: envClient.NEXT_PUBLIC_CLIENT_WEB_URL,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImage],
    },
  }
}

// component
const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale, category_slug } = await props.params

  setRequestLocale(locale)

  const clientQuery = getQueryClient()
  await clientQuery.prefetchQuery(
    pagesQueryOptions({ pageKey: EPageKey.PAGES_QUERY_CATEGORIES_PAGE, locale, categorySlug: category_slug }),
  )

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <CategoryModule />
    </HydrationBoundary>
  )
}

export default Page
