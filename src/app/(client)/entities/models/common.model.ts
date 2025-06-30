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
  actionType: 'link' | 'button' | 'linkIcon' | 'buttonIcon' | 'linkIconOnly' | 'buttonIconOnly'
  text?: string
  url?: string
  asLink?: boolean
  iconSvg?: string
  iconPosition?: 'left' | 'right'
  linkColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'foreground' | undefined
  buttonColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined
  buttonVariant?: 'light' | 'solid' | 'ghost' | 'faded' | 'flat' | 'shadow' | 'bordered' | undefined
  linkVariant?: 'default' | 'underline'
  openInNewTab?: boolean
}

// form field
export interface IFormField {
  fieldType: 'emailInput' | 'textInput' | 'textarea' | 'select' | 'radio' | 'checkbox'
  fieldLabel?: string
  fieldPlaceholder?: string
  fieldIsRequired?: boolean
  fieldInfoMessage?: string
  fieldErrorMessage?: string
  fieldOptions?: { label: string; value: string }[]
}

export type TAlignment = 'left' | 'center' | 'right'
export type TRichText = SerializedEditorState
