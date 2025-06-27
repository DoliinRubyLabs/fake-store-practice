import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api'

import { ELayoutApi, ELayoutKey, IRootLayoutRes } from '../../models/layout.model'

// api
export const layoutQueryApi = async (opt: QueryFunctionContext) => {
  const where: Where = { slug: { equals: ELayoutKey.LAYOUT_QUERY_ROOT_LAYOUT } }

  const stringifiedQuery = stringify({ where, depth: 2, draft: false, locale: 'en' }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<{ docs: IRootLayoutRes[] }>(`${ELayoutApi.API_LAYOUT}${stringifiedQuery}`, {
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
