import { useParams, usePathname } from 'next/navigation'

// service
export const useBreadcrumbsService = () => {
  const { slug } = useParams()

  const pathname = usePathname()

  // return
  return { pathname, slug: slug as string }
}
