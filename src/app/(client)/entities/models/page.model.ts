import { IImage } from './common.model'

export enum EPageKey {
  PAGES_QUERY = 'pages_query',
}

export enum EPageApi {
  API_PAGES = 'rest/pages',
}

export interface ITextContentSection {
  id: string
  blockType: 'textContent'
  underTitle?: string
  title: string
  content?: any
  image?: IImage
  alignment?: 'left' | 'center' | 'right'
}

interface IMeta {
  title?: string
  description?: string
  image?: { url: string; alt?: string }
}

export interface IHomePage {
  id: string
  blocks: ITextContentSection[]
  meta: IMeta
}

export interface IHomePageRes {
  docs: IHomePage[]
}
