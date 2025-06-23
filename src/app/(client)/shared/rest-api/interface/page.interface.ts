import { IImage } from './common.interface'

export interface ITitleDescriptionImageSection {
  id: string
  blockType: 'titleDescriptionImage'
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: any
  alignment?: 'left' | 'center' | 'right'
  layout?: 'image-left' | 'image-right' | 'image-top' | 'image-bottom'
  image?: IImage
  blockName?: string | null
  imageAlt?: string
  imageCaption?: string
}

interface IMeta {
  title?: string
  description?: string
  image?: { url: string; alt?: string }
}

export interface IHomePage {
  id: string
  title: string
  subTitle: string
  mainImage: { url: string; alt?: string }
  sections: ITitleDescriptionImageSection[]
  meta: IMeta
}

export interface IHomePageRes {
  docs: IHomePage[]
}
