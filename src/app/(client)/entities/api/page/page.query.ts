import { queryOptions } from '@tanstack/react-query'

import { pagesQueryApi } from './page.api'

import { type IPageQueryParams } from '../../models/page.model'

// options
export const pagesQueryOptions = (queryParams: IPageQueryParams) => {
  return queryOptions({
    queryKey: [queryParams?.pageKey, queryParams?.locale ?? 'en', queryParams?.categorySlug ?? 'all'],
    queryFn: (params) => pagesQueryApi(params, queryParams),
  })
}
