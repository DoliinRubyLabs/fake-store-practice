export enum EPageKey {
  PAGES_QUERY = 'pages_query',
}

export enum EPageApi {
  API_PAGES = 'pages',
}

interface ISection {
  id: string
  section: { id: string; title: string; subTitle: string }
}

interface IMeta {
  title?: string
  description?: string
  image?: { url: string; alt?: string }
}

export interface IHomePage {
  title: string
  subTitle: string
  mainImage: { url: string; alt?: string }
  sections: ISection[]
  meta: IMeta
}

export interface IHomePageRes {
  docs: IHomePage[]
}
