import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { EPageApi, EPageKey, IPageRes } from '@/client/entities/models/page.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'

// api
export const pagesQueryApi = async (opt: QueryFunctionContext) => {
  const where: Where = { slug: { equals: EPageKey.PAGES_QUERY_HOME_PAGE } }

  const stringifiedQuery = stringify({ where, depth: 2, draft: false, locale: 'en' }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<{ docs: IPageRes[] }>(`${EPageApi.API_PAGES}${stringifiedQuery}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 120 },
    })
    .json()

  const data = res?.docs?.at(0)

  if (!data) {
    return notFound()
  }

  return data
}
