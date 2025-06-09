export enum EPageKey {
  PAGES_QUERY = 'pages_query',
}

export enum EPageApi {
  API_PAGES = 'pages',
}

// block interface
export interface IBlock {
  id?: string
  blockType?: string
  title?: string
  content?: any
  description?: any
  alignment?: 'left' | 'center' | 'right'
  layout?: 'image-left' | 'image-right' | 'image-top' | 'image-bottom'
  image?: {
    id: number
    alt: string
    updatedAt: string
    createdAt: string
    url: string
    thumbnailURL: string | null
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
  }
  blockName?: string | null
  imageAlt?: string
  imageCaption?: string
}

interface ISection {
  id: string
  section: {
    id: string
    blocks: IBlock[]
  }
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
