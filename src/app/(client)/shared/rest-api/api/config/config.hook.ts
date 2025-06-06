import { queryOptions, useMutation, useQuery } from '@tanstack/react-query'

import { configMutationApi, configQueryApi, merchantDownloadMutationApi } from './config.api'

import { EConfigKey } from '../../interface/config.interface'

// options
export const configQueryOptions = (settings?: string) => {
  return queryOptions({
    queryKey: [EConfigKey.CONFIG_QUERY],
    queryFn: (params) => configQueryApi(params, settings),
  })
}

// query
export const useConfigQuery = () => {
  return useQuery(configQueryOptions())
}

// mutation
export const useConfigMutation = (opt?: { onSuccess: () => void }) => {
  return useMutation({
    mutationKey: [EConfigKey.CONFIG_MUTATION],
    mutationFn: configMutationApi,
    onSuccess: opt?.onSuccess,
  })
}

export const useMerchantDownloadMutation = () => {
  return useMutation({
    mutationKey: [EConfigKey.MERCHANT_DOWNLOAD_MUTATION],
    mutationFn: merchantDownloadMutationApi,
  })
}
