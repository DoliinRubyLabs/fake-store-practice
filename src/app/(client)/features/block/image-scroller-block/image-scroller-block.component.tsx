import Image from 'next/image'
import { FC } from 'react'

import { Skeleton } from '@heroui/react'

import { IImageScrollerBlock } from '@/app/(client)/entities/models'
import { ScrollerComponent } from '@/app/(client)/shared/ui/scroller'

// interface
interface ILogoScrollerProps {
  data: IImageScrollerBlock
  isLoading?: boolean
}

// component
const ImageScrollerBlockComponent: FC<Readonly<ILogoScrollerProps>> = (props) => {
  const { data, isLoading } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading} as='section' id={data?.id}>
      <ScrollerComponent shouldPauseOnHover gap='40px' className='mx-auto max-w-[90dvw]'>
        {[...Array(9)]
          .flatMap(() => data?.list || [])
          .map((item, idx) => (
            <div
              key={`partner-logo-${item?.id}-${idx}`}
              className='relative flex h-6 min-w-[80px] items-center justify-center text-foreground'
            >
              <Image src={item?.image?.url} alt={item?.image?.alt} fill className='object-contain' />
            </div>
          ))}
      </ScrollerComponent>
    </Skeleton>
  )
}

export default ImageScrollerBlockComponent
