export interface IRes {
  meta?: {
    page: number
    pages: number
    limit: number
    total: number
  }
  error?: {
    message: string
    validation_errors?: {
      field: string
      message: string
    }[]
  }
}
