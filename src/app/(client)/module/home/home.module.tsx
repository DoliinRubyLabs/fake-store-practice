'use client'

import { BuilderSectionComponent } from '@/app/(client)/shared/component/builder/section'
import { ContainerComponent } from '@/app/(client)/shared/component/container'

import { homeService } from './home.service'

import { usePagesQuery } from '../../shared/rest-api/api/page'

// interface
interface IProps {}

// component
const HomeModule: React.FC<IProps> = () => {
  const { data, isLoading } = usePagesQuery()

  const thisService = homeService()

  // return
  return (
    <ContainerComponent>
      <div className={'mt-16 w-full space-y-12'}>
        {data?.sections?.map((data, index) => (
          <BuilderSectionComponent
            key={`${data?.id}-${index}`}
            sectionType={data?.blockType}
            data={data}
            isLoading={isLoading}
          />
        ))}
      </div>
    </ContainerComponent>
  )
}

export default HomeModule
