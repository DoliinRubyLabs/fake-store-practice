import { type FC } from 'react'

import { ContainerComponent } from '@/client/shared/ui/container'
import { BlockComponent } from '@/client/widgets/block'

// interface
interface IProps {
  pageSlug: string
}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { pageSlug } = props

  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <BlockComponent pageSlug={pageSlug} />
    </ContainerComponent>
  )
}

export default HomeModule
