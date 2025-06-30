import { queryOptions, useQuery } from '@tanstack/react-query'

import { EPageKey } from '@/client/entities/models/page.model'

import { pagesQueryApi } from './page.api'

// options
export const pagesQueryOptions = () => {
  return queryOptions({
    queryKey: [EPageKey.PAGES_QUERY_HOME_PAGE],
    queryFn: (params) => pagesQueryApi(params),
    select: (data) => {
      return {
        blocks: data?.blocks,
        meta: data?.meta,
      }
    },
  })
}

// query
export const usePagesQuery = () => {
  return useQuery(pagesQueryOptions())
}
