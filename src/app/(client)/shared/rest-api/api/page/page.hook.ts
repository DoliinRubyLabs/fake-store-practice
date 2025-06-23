import { queryOptions, useQuery } from '@tanstack/react-query'

import { pagesQueryApi } from './page.api'

// interface
enum EPageKey {
  PAGES_QUERY = 'pages_query',
}

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
