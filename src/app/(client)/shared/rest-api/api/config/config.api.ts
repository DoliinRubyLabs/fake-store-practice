import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/library/rest-api'

import { IConfigReq } from '../../interface/config.interface'
import { EConfigApi } from '../../interface/config.interface'
import { IConfigRes } from '../../interface/config.interface'

// api
export const configQueryApi = async (opt: QueryFunctionContext, settings?: string) => {
  const res = await restApiFetcher.get<IConfigRes>(EConfigApi.API_CONFIG, {
    signal: opt.signal,
    headers: { settings },
  })

  return await res.json()
}

export const configMutationApi = async (json: IConfigReq) => {
  const res = await restApiFetcher.post<IConfigRes>(EConfigApi.API_CONFIG, { json })

  return await res.json()
}