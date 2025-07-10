import { type NextPage } from 'next'
import { type Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { pagesQueryOptions } from '@/app/(client)/entities/api/page'
import { EPageKey } from '@/app/(client)/entities/models'
import { EAssetImage } from '@/app/(client)/shared/assets/interface'
import { LegalModule } from '@/client/modules/legal'
import { getQueryClient } from '@/pkg/libraries/rest-api'

// interface
interface IProps {
  params: Promise<{ locale: Locale }>
}

// metadata
export const generateMetadata = async (props: IProps) => {
  const { locale } = await props.params

  const clientQuery = getQueryClient()
  const data = await clientQuery.fetchQuery(
    pagesQueryOptions({ pageKey: EPageKey.PAGES_QUERY_TERMS_OF_SERVICE_PAGE, locale }),
  )

  const title = data?.meta?.title || 'Terms of Service'
  const description = data?.meta?.description || 'Terms of Service'
  const ogImage = data?.meta?.image?.url || EAssetImage.OG_IMAGE

  return {
    title,
    description,
    applicationName: title,
    openGraph: {
      title,
      description,
      siteName: title,
      type: 'website',
      images: [ogImage],
    },
  }
}

// component
const Page: NextPage<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const clientQuery = getQueryClient()
  await clientQuery.prefetchQuery(pagesQueryOptions({ pageKey: EPageKey.PAGES_QUERY_TERMS_OF_SERVICE_PAGE, locale }))

  // return
  return (
    <HydrationBoundary state={dehydrate(clientQuery)}>
      <LegalModule pageKey={EPageKey.PAGES_QUERY_TERMS_OF_SERVICE_PAGE} />
    </HydrationBoundary>
  )
}

export default Page
