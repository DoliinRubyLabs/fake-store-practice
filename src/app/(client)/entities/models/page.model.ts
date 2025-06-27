import { IImage, IMeta, TContentAlignment, TRichText, TTextAlignment } from './common.model'

// key
export enum EPageKey {
  PAGES_QUERY_HOME_PAGE = 'home-page',
}

// api
export enum EPageApi {
  API_PAGES = 'rest/pages',
}

// text content section
export interface ITextContentSection {
  id: string
  blockType: 'textContent'
  title: string
  subtitle?: string
  content?: TRichText
  image?: IImage
  contentAlignment?: TContentAlignment
  textAlignment?: TTextAlignment
}

// home page response
export interface IHomePageRes {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blocks: ITextContentSection[]
  meta: IMeta
}
