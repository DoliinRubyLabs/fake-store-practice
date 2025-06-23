export interface IRes {
  error?: {
    message: string
    validation_errors?: {
      field: string
      message: string
    }[]
  }
}

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
