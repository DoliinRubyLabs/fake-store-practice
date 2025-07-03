import { ChevronRight } from 'lucide-react'
import { type FC } from 'react'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'
import { Link } from '@heroui/link'

import { ESiteRoute } from '@/app/(client)/shared/routes/route.interface'
import { Link as NextLink, usePathname } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const BreadcrumbsComponent: FC<Readonly<IProps>> = () => {
  const pathname = usePathname()

  // return
  return (
    <Breadcrumbs>
      {!pathname.includes(ESiteRoute.BASE) && (
        <BreadcrumbItem separator={<ChevronRight size={16} />} isDisabled={pathname === ESiteRoute.BASE}>
          <Link href={ESiteRoute.BASE} as={NextLink} className={'text-small text-foreground'}>
            Home
          </Link>
        </BreadcrumbItem>
      )}

      {/* INFO: add new breadcrumbs here */}
      {/* {pathname.includes(ESiteRoute.VIEW) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={pathname.includes(ESiteRoute.VIEW)}
        >
          <Link href={ESiteRoute.VIEW} as={NextLink} className={'text-small text-foreground'}>
            {slug}
          </Link>
        </BreadcrumbItem>
      )} */}
    </Breadcrumbs>
  )
}

export default BreadcrumbsComponent
