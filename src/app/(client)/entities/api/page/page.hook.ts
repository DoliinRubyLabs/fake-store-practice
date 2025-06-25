import { queryOptions, useQuery } from '@tanstack/react-query'

import { pagesQueryApi } from './page.api'

import { EPageKey } from '../../models/page.model'

// options
export const pagesQueryOptions = () => {
  return queryOptions({
    queryKey: [EPageKey.PAGES_QUERY],
    queryFn: (params) => pagesQueryApi(params),
  })
}

// query
export const usePagesQuery = () => {
  return useQuery(pagesQueryOptions())
}
