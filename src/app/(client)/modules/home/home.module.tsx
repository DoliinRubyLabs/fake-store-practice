'use client'

import { type FC } from 'react'

import { usePagesQuery } from '@/app/entities/api/page'
import { BlockComponent } from '@/app/features/block'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

// component
const HomeModule: FC<IProps> = () => {
  const { data, isLoading } = usePagesQuery()

  // return
  return (
    <ContainerComponent className='mt-16 w-full space-y-12'>
      {data?.blocks?.map((data, index) => (
        <BlockComponent key={`${data?.id}-${index}`} blockType={data?.blockType} data={data} isLoading={isLoading} />
      ))}
    </ContainerComponent>
  )
}

export default HomeModule
