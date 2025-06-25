import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/library/rest-api'

import { EPageApi, IHomePageRes } from '../../models/page.model'

// api
export const pagesQueryApi = async (opt: QueryFunctionContext) => {
  const where: Where = {
    slug: { equals: 'home-page' },
  }

  const stringifiedQuery = stringify(
    {
      where,
      depth: 2,
      draft: false,
      locale: 'en',
    },
    { addQueryPrefix: true },
  )

  const res = await restApiFetcher
    .get<IHomePageRes>(`${EPageApi.API_PAGES}${stringifiedQuery}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 60 },
    })
    .json()

  const data = res?.docs?.at(0)

  if (!data) {
    return notFound()
  }

  return data
}
