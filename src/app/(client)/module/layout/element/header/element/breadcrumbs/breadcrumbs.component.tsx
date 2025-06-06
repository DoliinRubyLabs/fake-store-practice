import { ChevronRight } from 'lucide-react'
import NextLink from 'next/link'
import { FC } from 'react'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'
import { Link } from '@heroui/link'

import { ESiteRoute } from '@/app/shared/routes/route.interface'
import { m } from '@/pkg/library/i18n/paraglide/messages'
import { localizeHref } from '@/pkg/library/i18n/paraglide/runtime'

import { useBreadcrumbsService } from './breadcrumbs.service'

// interface
interface IProps {}

// component
const BreadcrumbsComponent: FC<Readonly<IProps>> = () => {
  const thisService = useBreadcrumbsService()

  // return
  return (
    <Breadcrumbs>
      {!thisService.pathname.includes(ESiteRoute.VIEW) && !thisService.pathname.includes(ESiteRoute.CREATE) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.DASHBOARD}
        >
          <Link href={localizeHref(ESiteRoute.DASHBOARD)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_home()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.WORKFLOWS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.WORKFLOWS}
        >
          <Link href={localizeHref(ESiteRoute.WORKFLOWS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_workflows()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.WORKFLOWS_CREATE) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.WORKFLOWS_CREATE}
        >
          <Link href={localizeHref(ESiteRoute.WORKFLOWS_CREATE)} as={NextLink} className={'text-small text-foreground'}>
            {m.btn_create()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.PAYMENTS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.PAYMENTS}
        >
          <Link href={localizeHref(ESiteRoute.PAYMENTS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_payments()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.PLANS) && (
        <BreadcrumbItem separator={<ChevronRight size={16} />} isDisabled={thisService.pathname === ESiteRoute.PLANS}>
          <Link href={localizeHref(ESiteRoute.PLANS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_plans()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.CUSTOMERS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.CUSTOMERS}
        >
          <Link href={localizeHref(ESiteRoute.CUSTOMERS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_customers()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.ANALYTICS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.ANALYTICS}
        >
          <Link href={localizeHref(ESiteRoute.ANALYTICS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_analytics()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.INTEGRATIONS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.INTEGRATIONS}
        >
          <Link href={localizeHref(ESiteRoute.INTEGRATIONS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_integrations()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.DEVELOPERS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.DEVELOPERS}
        >
          <Link href={localizeHref(ESiteRoute.DEVELOPERS)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_developers()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.CHECKOUT) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.CHECKOUT}
        >
          <Link href={localizeHref(ESiteRoute.CHECKOUT)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_checkout()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.API_DOCUMENTATION) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.API_DOCUMENTATION}
        >
          <Link
            href={localizeHref(ESiteRoute.API_DOCUMENTATION)}
            as={NextLink}
            className={'text-small text-foreground'}
          >
            {m.link_api_docs()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.SETTING_PROFILE) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.SETTING_PROFILE}
        >
          <Link href={localizeHref(ESiteRoute.SETTING_PROFILE)} as={NextLink} className={'text-small text-foreground'}>
            {m.link_settings()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.SETTING_ORGANIZATIONS) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname === ESiteRoute.SETTING_ORGANIZATIONS}
        >
          <Link
            href={localizeHref(ESiteRoute.SETTING_ORGANIZATIONS)}
            as={NextLink}
            className={'text-small text-foreground'}
          >
            {m.link_org_setting()}
          </Link>
        </BreadcrumbItem>
      )}

      {thisService.pathname.includes(ESiteRoute.VIEW) && (
        <BreadcrumbItem
          separator={<ChevronRight size={16} />}
          isDisabled={thisService.pathname.includes(ESiteRoute.VIEW)}
        >
          <Link href={localizeHref(ESiteRoute.VIEW)} as={NextLink} className={'text-small text-foreground'}>
            {thisService.slug}
          </Link>
        </BreadcrumbItem>
      )}
    </Breadcrumbs>
  )
}

export default BreadcrumbsComponent
