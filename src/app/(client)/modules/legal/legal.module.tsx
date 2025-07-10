'use client'

import { FC } from 'react'

import { EPageKey } from '@/client/entities/models/page.model'
import { ContainerComponent } from '@/client/shared/ui/container'
import { BlockComponent } from '@/client/widgets/block'

// interface
interface IProps {
  pageKey: EPageKey
}

// component
const LegalModule: FC<Readonly<IProps>> = (props) => {
  const { pageKey } = props

  // return
  return (
    <ContainerComponent className='mt-10 max-w-4xl px-6 pb-16'>
      <BlockComponent pageKey={pageKey} />
    </ContainerComponent>
  )
}

export default LegalModule
