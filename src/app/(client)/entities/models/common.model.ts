import type { SerializedEditorState } from 'lexical'

// meta
export interface IMeta {
  title?: string
  description?: string
  image?: { url: string; alt?: string }
}

// image
export interface IImage {
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

// link
export interface IActionField {
  id: string
  actionType: 'link' | 'button' | 'linkWithIcon' | 'buttonWithIcon' | 'linkIconOnly' | 'buttonIconOnly'
  actionText?: string
  actionLinkUrl?: string
  actionButtonUrl?: string
  actionIconSvg?: string
  actionIconPosition?: 'left' | 'right'
  actionLinkColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'foreground' | undefined
  actionButtonColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined
  actionButtonVariant?: 'light' | 'solid' | 'ghost' | 'faded' | 'flat' | 'shadow' | 'bordered' | undefined
  actionOpenInNewTab?: boolean
}

export type TContentAlignment = 'contentLeft' | 'contentCenter' | 'contentRight'
export type TTextAlignment = 'textLeft' | 'textCenter' | 'textRight'
export type TRichText = SerializedEditorState
