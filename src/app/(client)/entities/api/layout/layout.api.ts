import { notFound } from 'next/navigation'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api'

import { ELayoutApi, IRootLayoutRes } from '../../models/layout.model'

// api
export const layoutQueryApi = async (opt: QueryFunctionContext) => {
  const stringifiedQuery = stringify({ depth: 2, draft: false, locale: 'en' }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<IRootLayoutRes>(`${ELayoutApi.API_LAYOUT}${stringifiedQuery}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 120 },
    })
    .json()

  if (!res) {
    return notFound()
  }

  return res
}
