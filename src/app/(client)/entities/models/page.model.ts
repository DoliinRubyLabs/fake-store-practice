import { IActionField, IFormField, IImage, IMeta, TRichText } from './common.model'

// key
export enum EPageKey {
  PAGES_QUERY_HOME_PAGE = 'home-page',
}

// api
export enum EPageApi {
  API_PAGES = 'rest/pages',
}

// hero main block
export interface IHeroMainBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'heroMainBlock'
  title: string
  subtitle?: string | null
  image: IImage
  action: IActionField
  disclosure: {
    title: string
    info: TRichText
  }
}

// comparisons block
export interface IListBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'listBlock'
  title: string
  subtitle: string
  list: {
    image: IImage
    title: string
    description?: string | null
    url: string
    asTop: boolean
  }[]
  action: IActionField
}

// tabs block

export interface ITabsBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'tabsBlock'
  title: string
  subtitle?: string | null
  tabs?: {
    id: string
    label: string
    icon: string
    title: string
    image: IImage
    items: {
      id: string
      icon: string
      description: string
    }[]
  }[]
}

// feedback block
export interface IFeedbackBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'feedbackBlock'
  title: string
  description?: TRichText
  formField: IFormField
  formAction: IActionField
  showSubmitButton: boolean
}

// home page response
export interface IPageRes {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blocks: IFeedbackBlock[] | IHeroMainBlock[] | IListBlock[] | ITabsBlock[]
  meta: IMeta
}
