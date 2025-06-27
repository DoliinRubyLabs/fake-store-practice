import { IActionField, IMeta } from './common.model'

// key
export enum ELayoutKey {
  LAYOUT_QUERY_ROOT_LAYOUT = 'root-layout',
}

// api
export enum ELayoutApi {
  API_LAYOUT = 'rest/layout',
}

// header navigation
interface IHeaderNavigation {
  id: string
  linkText: string
  linkUrl?: string
  openInNewTab: boolean
  hasLinks: boolean
  links: IActionField[]
}

// menu column
interface IMenuColumn {
  id: string
  columnTitle: string
  links: IActionField[]
}

// header block
interface IHeaderBlock {
  id: string
  blockType: 'header'
  navigation: IHeaderNavigation[]
  actions: IActionField[]
}

// footer block
interface IFooterBlock {
  id: string
  blockType: 'footer'
  copyright?: string
  copyrightAlignment?: 'left' | 'center' | 'right'
  menuColumns: IMenuColumn[]
}

// root layout response
export interface IRootLayoutRes {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  meta: IMeta
  blocks: IHeaderBlock[] | IFooterBlock[]
}
