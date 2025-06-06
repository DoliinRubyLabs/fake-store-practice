import { ChevronRight } from 'lucide-react'
import NextLink from 'next/link'
import { FC } from 'react'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'
import { Link } from '@heroui/link'

import { ESiteRoute } from '@/app/(client)/shared/routes/route.interface'

import { useBreadcrumbsService } from './breadcrumbs.service'

// interface
interface IProps {}

// component
const BreadcrumbsComponent: FC<Readonly<IProps>> = () => {
  const thisService = useBreadcrumbsService()

  // return
  return (
    <Breadcrumbs>
      {!thisService.pathname.includes(ESiteRoute.BASE) && (
        <BreadcrumbItem separator={<ChevronRight size={16} />} isDisabled={thisService.pathname === ESiteRoute.BASE}>
          <Link href={ESiteRoute.BASE} as={NextLink} className={'text-small text-foreground'}>
            Home
          </Link>
        </BreadcrumbItem>
      )}

      {/* INFO: add new breadcrumbs here */}
      {/* {thisService.pathname.includes(ESiteRoute.VIEW) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname.includes(ESiteRoute.VIEW)}
        >
          <Link href={ESiteRoute.VIEW} as={NextLink} className={'text-small text-foreground'}>
            {thisService.slug}
          </Link>
        </BreadcrumbItem>
      )} */}
    </Breadcrumbs>
  )
}

export default BreadcrumbsComponent
