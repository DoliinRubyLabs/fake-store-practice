'use client'

import useEmblaCarousel from 'embla-carousel-react'

import { Divider } from '@heroui/divider'
import { cn } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'

import { mockProducts } from '@/app/(client)/features/block/comparisons-table/constants'
import { ProductCompareSlideComponent } from '@/app/(client)/features/block/comparisons-table/elements/comparisons-table-a/elements/product-compare-slide.tsx'
import { IProduct } from '@/client/entities/models'

import { NavigationButton } from '../../../product-carousel-block/elements/navigation-btn'

// !: Not correct plays for enum, only props interface
export enum EProductComparisonTableKey {
  KeySpecs = 'Key Specs',
}

// component
const ComparisonsTableAComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'x', dragFree: true })

  // return
  return (
    <div className='relative w-full'>
      <h2 className='text-2xl font-bold'>Compare Features</h2>

      <Divider className='mx-auto mb-5 mt-4 max-w-[95%]' />

      <Skeleton isLoaded={true} as='section'>
        <div className='relative'>
          <div className='absolute left-0 top-[395px] hidden sm:block'>
            {Object.values(EProductComparisonTableKey).map((key) => (
              <p key={key} className={cn('px-5 py-1 font-semibold')}>
                {key}
              </p>
            ))}
          </div>

          <div className='relative sm:ml-[110px]'>
            <div className='overflow-x-hidden' ref={emblaRef}>
              <div className='flex'>
                {mockProducts?.map((item: IProduct, index) => (
                  <div
                    className='transform-[translate3d(0,0,0)] flex min-w-0 flex-shrink-0 flex-grow-0'
                    key={`${item.id}-${index}`}
                  >
                    <ProductCompareSlideComponent product={item} />
                  </div>
                ))}
              </div>
            </div>

            <div className='pointer-events-none absolute left-[-20px] right-[-20px] top-[110px] z-10 hidden justify-between sm:flex'>
              <NavigationButton emblaApi={emblaApi} direction='prev' />

              <NavigationButton emblaApi={emblaApi} direction='next' />
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}

export default ComparisonsTableAComponent
