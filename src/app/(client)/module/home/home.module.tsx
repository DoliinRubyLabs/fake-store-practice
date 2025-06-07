'use client'

import Image from 'next/image'

import { ContainerComponent } from '@/app/(client)/shared/component/container'

import { useHomeService } from './home.service'

// interface
interface IProps {}

// component
const HomeModule: React.FC<IProps> = () => {
  const thisService = useHomeService()

  // return
  return (
    <ContainerComponent>
      <div className={'mt-8 w-full'}>
        <div className={'grid gap-2'}>
          <h1 className={'text-center text-3xl font-bold'}>{thisService.data?.title}</h1>

          <p className={'text-center text-xl'}>{thisService.data?.subTitle}</p>
        </div>

        <div className={'relative mt-4 h-[400px] w-full overflow-hidden rounded-large'}>
          <Image
            src={thisService.data?.mainImage?.url || ''}
            alt={thisService.data?.mainImage?.alt || 'image'}
            fill
            className={'object-cover'}
            quality={100}
            priority
          />
        </div>
      </div>

      <div className={'mt-8 w-full'}>
        {thisService.data?.sections?.map((data: any) => (
          <div key={data?.section?.id || ''} className={'grid gap-2'}>
            <h2 className={'text-2xl font-bold'}>{data?.section?.title || ''}</h2>
            <p className={'text-xl'}>{data?.section?.subTitle || ''}</p>
          </div>
        ))}
      </div>
    </ContainerComponent>
  )
}

export default HomeModule
