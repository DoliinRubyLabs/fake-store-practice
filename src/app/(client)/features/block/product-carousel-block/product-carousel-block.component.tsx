'use client'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { type FC } from 'react'

import { Divider, Skeleton } from '@heroui/react'

import { NavigationButton } from './elements/navigation-btn'
import { VerticalProductCardComponent } from './elements/vertical-product-card'

// interface
interface IProps {
  slides: number[]
  options?: EmblaOptionsType
}

// component
const ProductCarouselBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // return
  return (
    <Skeleton isLoaded={true} as='section'>
      <div className='px-4 md:px-8'>
        <h2 className='mb-2 flex items-center gap-2 text-3xl font-bold md:text-4xl'>Similar products on Amazon</h2>

        <p className='xl:text-xl text-foreground/70 sm:text-xl md:text-lg'>Lorem ipsum dolor sit amet.</p>
      </div>

      <Divider className='mx-auto mb-5 mt-4 max-w-[95%]' />

      <div className='relative px-5'>
        <div className='pointer-events-none absolute left-5 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent' />
        <div className='pointer-events-none absolute right-5 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent' />

        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {slides.map((item, index) => (
              <div
                className='transform-[translate3d(0,0,0)] flex min-w-0 flex-shrink-0 flex-grow-0 pl-5'
                key={`${item}-${index}-card`}
              >
                <VerticalProductCardComponent />
              </div>
            ))}
          </div>
        </div>

        <div className='pointer-events-none absolute left-0 right-[-20px] top-[60px] z-10 hidden w-full justify-between md:flex'>
          <NavigationButton emblaApi={emblaApi} direction='prev' />

          <NavigationButton emblaApi={emblaApi} direction='next' />
        </div>
      </div>
    </Skeleton>
  )
}

export default ProductCarouselBlockComponent
