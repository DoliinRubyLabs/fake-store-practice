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

export const merchantDownloadMutationApi = async () => {
  const res = await restApiFetcher.get(EConfigApi.API_MERCHANT)

  const blob = await res.blob()
  const fileName =
    res.headers.get('content-disposition')?.split('filename=')[1]?.replace(/"/g, '') ||
    'apple-developer-merchantid-domain-association'

  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()

  link.parentNode?.removeChild(link)
  window.URL.revokeObjectURL(url)

  return { success: true, fileName }
}
