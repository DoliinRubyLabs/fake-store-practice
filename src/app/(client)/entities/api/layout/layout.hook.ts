import { queryOptions, useQuery } from '@tanstack/react-query'

import { layoutQueryApi } from './layout.api'

import { ELayoutKey } from '../../models/layout.model'

// options
export const layoutQueryOptions = () => {
  return queryOptions({
    queryKey: [ELayoutKey.LAYOUT_QUERY_ROOT_LAYOUT],
    queryFn: (params) => layoutQueryApi(params),
    select: (data) => {
      return {
        meta: data?.meta,
        branding: data?.branding,
        headerBlock: data?.blocks?.find((block) => block.blockType === 'headerBlock'),
        footerBlock: data?.blocks?.find((block) => block.blockType === 'footerBlock'),
      }
    },
  })
}

// query
export const useLayoutQuery = () => {
  return useQuery(layoutQueryOptions())
}
