'use client'

import { type FC } from 'react'

import { usePagesQuery } from '@/app/(client)/entities/api/page'
import { BlockComponent } from '@/app/(client)/features/block'
import { ContainerComponent } from '@/app/(client)/shared/ui/container'

// interface
interface IProps {}

// component
const HomeModule: FC<IProps> = () => {
  const { data, isLoading } = usePagesQuery()

  // return
  return (
    <ContainerComponent>
      <div className={'mt-16 w-full space-y-12'}>
        {data?.blocks?.map((data, index) => (
          <BlockComponent key={`${data?.id}-${index}`} blockType={data?.blockType} data={data} isLoading={isLoading} />
        ))}
      </div>
    </ContainerComponent>
  )
}

export default HomeModule
