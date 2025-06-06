import { IRes } from './common.interface'

export enum EConfigKey {
  CONFIG_QUERY = 'config_query',
  CONFIG_MUTATION = 'config_mutation',
}

export enum EConfigApi {
  API_CONFIG = 'config',
}

interface IConfig {
  isSideBarOpen: boolean
}

export interface IConfigReq extends IConfig {}

export interface IConfigRes extends IRes {
  data: IConfig
}
