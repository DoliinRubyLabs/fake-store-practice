import { usePagesQuery } from '@/app/(client)/shared/rest-api/api/page'

// service
export const useHomeService = () => {
  const { data } = usePagesQuery()

  // return
  return { data }
}
