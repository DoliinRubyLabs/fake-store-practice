import { type FC } from 'react'

import { EPageKey } from '@/client/entities/models'
import { BreadcrumbsComponent } from '@/client/shared/ui/breadcrumbs'
import { ContainerComponent } from '@/client/shared/ui/container'
import { BlockComponent } from '@/client/widgets/block'

// interface
interface IProps {}

// component
const CategoriesModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <BreadcrumbsComponent />

      <BlockComponent pageKey={EPageKey.PAGES_QUERY_CATEGORIES_PAGE} />
    </ContainerComponent>
  )
}

export default CategoriesModule
