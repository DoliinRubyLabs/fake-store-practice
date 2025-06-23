import { queryOptions, useMutation, useQuery } from '@tanstack/react-query'

import { configMutationApi, configQueryApi } from './config.api'

// interface
enum EConfigKey {
  CONFIG_QUERY = 'config_query',
  CONFIG_MUTATION = 'config_mutation',
}

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
