import { queryOptions, useQuery } from '@tanstack/react-query'

import { EPageKey } from '@/app/entities/models/page.model'

import { pagesQueryApi } from './page.api'

// options
export const pagesQueryOptions = () => {
  return queryOptions({
    queryKey: [EPageKey.PAGES_QUERY],
    queryFn: (params) => pagesQueryApi(params),
    staleTime: 120,
  })
}

// query
export const usePagesQuery = () => {
  return useQuery(pagesQueryOptions())
}
