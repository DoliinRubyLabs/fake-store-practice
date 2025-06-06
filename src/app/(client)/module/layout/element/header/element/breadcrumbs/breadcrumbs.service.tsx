import { useParams, usePathname } from 'next/navigation'

import { deLocalizeHref } from '@/pkg/library/i18n/paraglide/runtime'

// service
export const useBreadcrumbsService = () => {
  const { slug } = useParams()

  let pathname = usePathname()
  pathname = deLocalizeHref(pathname)

  // return
  return { pathname, slug: slug as string }
}
