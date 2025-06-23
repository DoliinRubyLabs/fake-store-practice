import { IRes } from './common.interface'

interface IConfig {
  isSideBarOpen: boolean
}

export interface IConfigReq extends IConfig {}

export interface IConfigRes extends IRes {
  data: IConfig
}
