import { type FC } from 'react'

import { EPageKey } from '@/client/entities/models'
import { ContainerComponent } from '@/client/shared/ui/container'
import { BlockComponent } from '@/client/widgets/block'

// interface
interface IProps {}

// component
const HomeModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <BlockComponent pageKey={EPageKey.PAGES_QUERY_HOME_PAGE} />
    </ContainerComponent>
  )
}

export default HomeModule
