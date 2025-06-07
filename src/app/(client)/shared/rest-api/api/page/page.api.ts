import { Where } from 'payload'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { cmsApiFetcher } from '@/pkg/library/rest-api'

import { EPageApi, IHomePageRes } from '../../interface/page.interface'

// api
export const pagesQueryApi = async (opt: QueryFunctionContext) => {
  const query: Where = {
    slug: { equals: 'home-page' },
  }

  const stringifiedQuery = stringify(
    {
      where: query,
      depth: 1,
      draft: false,
      locale: 'en',
    },
    { addQueryPrefix: true },
  )

  const res = await cmsApiFetcher
    .get<IHomePageRes>(`${EPageApi.API_PAGES}${stringifiedQuery}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 60 },
    })
    .json()

  return res?.docs?.at(0) || null
}
