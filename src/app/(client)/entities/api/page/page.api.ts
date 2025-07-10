import { notFound } from 'next/navigation'
import { Where } from 'payload'
import { stringify } from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { EPageApi, type ICategory, type IPageQueryParams, IPageRes } from '@/client/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api'

// api
export const pagesQueryApi = async (opt: QueryFunctionContext, queryParams: IPageQueryParams) => {
  const { pageKey, locale = 'en', categorySlug } = queryParams

  if (categorySlug) {
    const where: Where = { slug: { equals: categorySlug } }
    const query = stringify({ where, depth: 2, draft: false, locale }, { addQueryPrefix: true })

    const res = await restApiFetcher
      .get<{ docs: ICategory[] }>(`${EPageApi.API_CATEGORIES}${query}`, {
        signal: opt.signal,
        cache: 'force-cache',
        next: { revalidate: 120, tags: ['category', locale, categorySlug, query] },
      })
      .json()

    const data = res?.docs?.at(0)

    if (!data) {
      return notFound()
    }

    return {
      ...data,
      blocks: data?.blocks?.map((block) => {
        if (block?.blockType === 'productsBlock') {
          return {
            ...block,
            products: data?.products,
          }
        }

        return block
      }),
    }
  }

  const where: Where = { slug: { equals: pageKey } }
  const query = stringify({ where, depth: 4, draft: false, locale }, { addQueryPrefix: true })

  const res = await restApiFetcher
    .get<IPageRes>(`${EPageApi.API_PAGES}${query}`, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 120, tags: ['page', locale, pageKey, query] },
    })
    .json()

  const data = res?.docs?.at(0)

  if (!data) {
    return notFound()
  }

  return data
}
