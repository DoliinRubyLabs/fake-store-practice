import dynamic from 'next/dynamic'

export const BreadcrumbsComponent = dynamic(() => import('./breadcrumbs.component'))
