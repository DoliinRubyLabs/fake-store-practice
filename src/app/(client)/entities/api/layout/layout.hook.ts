import { queryOptions, useQuery } from '@tanstack/react-query'

import { layoutQueryApi } from './layout.api'

import { ELayoutKey } from '../../models/layout.model'

// options
export const layoutQueryOptions = () => {
  return queryOptions({
    queryKey: [ELayoutKey.LAYOUT_QUERY],
    queryFn: (params) => layoutQueryApi(params),
    staleTime: 120,
  })
}

// query
export const useLayoutQuery = () => {
  return useQuery(layoutQueryOptions())
}
