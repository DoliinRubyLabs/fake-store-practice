import {
  ICategoriesBlock,
  IFeedbackBlock,
  IHeroBlock,
  IImageScrollerBlock,
  IListBlock,
  ISectionBlock,
  ITabsBlock,
  ITemplateBlock,
} from './block'
import { IMeta, IPagination } from './common.model'

// key
export enum EPageKey {
  PAGES_QUERY_HOME_PAGE = 'home-page',
  PAGES_QUERY_CATEGORIES_PAGE = 'categories',
  PAGES_QUERY_PRIVACY_POLICY_PAGE = 'privacy-policy',
  PAGES_QUERY_TERMS_OF_SERVICE_PAGE = 'terms-of-service',
}

// api
export enum EPageApi {
  API_PAGES = 'rest/pages',
  API_CATEGORIES = 'rest/categories',
}

// query params
export interface IPageQueryParams {
  pageKey: EPageKey
  locale?: string
  categorySlug?: string
}

// page
export interface IPage {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blocks:
    | ITemplateBlock[]
    | IHeroBlock[]
    | ISectionBlock[]
    | IImageScrollerBlock[]
    | IListBlock[]
    | ITabsBlock[]
    | ICategoriesBlock[]
    | IFeedbackBlock[]
  meta: IMeta
}

// page response
export interface IPageRes extends IPagination {
  docs: IPage[]
}
