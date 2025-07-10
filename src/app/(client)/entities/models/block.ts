import { IActionField, IDisclosure, IFormField, IImage, IMeta, IProduct, TRichText } from './common.model'

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
}

// title block
export interface ITitleBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'titleBlock'
  title: string
  subtitle?: string | null
  disclosure?: IDisclosure
  showDisclosure: boolean
}

// comparisons title block
export interface IComparisonsTitleBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'comparisonsTitleBlock'
  title: string
  showSubtitle: boolean
  showBadge: boolean
  showSortBy: boolean
  showDisclosure: boolean
  subtitle?: {
    iconSvg: string
    label: string
  } | null
  badge?: {
    label: string
    value: string
  } | null
  sortBy?:
    | {
        label: string
        value: string
      }[]
    | null
  disclosure?: IDisclosure | null
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
  disclosure?: IDisclosure
  showDisclosure: boolean
  rows: {
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

// rich text block
export interface IRichTextBlock {
  id: string
  blockType: 'richTextBlock'
  content: TRichText
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

// image scroller block
export interface IImageScrollerBlock {
  id: string
  blockType: 'imageScrollerBlock'
  list: {
    id: string
    image: IImage
  }[]
}

// categories card block
export interface ICategoriesBlock {
  id: string
  name: string
  title: string
  subtitle?: string | null
  cardBlockType: 'cards' | 'list'
  disclosure?: IDisclosure
  showDisclosure: boolean
  categories: {
    id: string
    category: ICategory
  }[]
  blockType: 'categoriesBlock'
}

// text with menu block
export interface IArticleBlock {
  id: string
  title: string
  subtitle?: string | null
  content: TRichText
  blockType: 'articleBlock'
}

// products block
export interface IProductsBlock {
  id: string
  blockType: 'productsBlock'
  products?: {
    docs: IProduct[]
  }
}

// template block
export interface ITemplateBlock {
  id: string
  name: string
  slug: string
  updatedAt: string
  createdAt: string
  blockType: 'templateBlock'
  template: {
    id: string
    name: string
    slug: string
    updatedAt: string
    createdAt: string
    blockType:
      | 'imageScrollerBlock'
      | 'listBlock'
      | 'feedbackBlock'
      | 'categoriesCardBlock'
      | 'heroMainBlock'
      | 'tabsBlock'
      | 'articleBlock'
    blocks: (
      | IImageScrollerBlock
      | IListBlock
      | IFeedbackBlock
      | ICategoriesBlock
      | IHeroMainBlock
      | ITabsBlock
      | IRichTextBlock
      | IArticleBlock
    )[]
  }
}

// category
export interface ICategory {
  id: string
  updatedAt: string
  createdAt: string
  slug: string
  name: string
  image: IImage
  description?: string | null
  products: {
    docs: IProduct[]
  }
  blocks: IFeedbackBlock[] | IComparisonsTitleBlock[] | IProductsBlock[]
  meta: IMeta
}
