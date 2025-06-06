import { cookies } from 'next/headers'

import { configQueryOptions } from '@/app/(client)/shared/rest-api/api/config'
import { getQueryClient } from '@/pkg/library/rest-api'

// service
export const getLayoutService = async () => {
  const settings = (await cookies())?.get('settings')?.value

  const clientQuery = getQueryClient()

  await clientQuery.prefetchQuery(configQueryOptions(settings))

  // return
  return { clientQuery }
}
