import { type FC } from 'react'

import { BlockComponent } from '@/client/features/block'
import { ContainerComponent } from '@/client/shared/ui/container'

// interface
interface IProps {}

// component
const HomeModule: FC<IProps> = () => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-44'>
      <BlockComponent />
    </ContainerComponent>
  )
}

export default HomeModule
