import { type FC } from 'react'

import { EPageKey } from '@/client/entities/models'
import { BackToTopComponent } from '@/client/shared/ui/back-to-top'
import { BreadcrumbsComponent } from '@/client/shared/ui/breadcrumbs'
import { ContainerComponent } from '@/client/shared/ui/container'
import { BlockComponent } from '@/client/widgets/block'

// interface
interface IProps {}

// component
const CategoryModule: FC<IProps> = () => {
  // return
  return (
    <ContainerComponent className='w-full pb-[72px]'>
      <BreadcrumbsComponent />

      <BlockComponent pageKey={EPageKey.PAGES_QUERY_CATEGORIES_PAGE} />

      <BackToTopComponent />
    </ContainerComponent>
  )
}

export default CategoryModule
