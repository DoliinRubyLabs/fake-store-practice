'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { type FC } from 'react'

import { cn } from '@heroui/react'

import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const VerticalProductCardComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Link href={'/product/1'} className='group/card grid max-w-[180px] gap-2 overflow-hidden'>
      <div
        className={cn(
          'relative aspect-[1/0.9] min-h-[140px] w-full overflow-hidden rounded-xl',
          'border border-default-200 shadow-sm transition-all duration-300 hover:border-default-300 hover:shadow-md',
        )}
      >
        <Image
          src={`/images/og-image.png`}
          alt={'product-1'}
          fill
          sizes='33vw'
          className='h-full w-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.2] group-hover/card:scale-110'
        />
      </div>

      <div className='grid gap-1'>
        <h3 className='line-clamp-2 font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda animi cumque eveniet, beatae adipisci,
          minima non impedit labore quo, consequuntur voluptate praesentium nemo reiciendis est et voluptatem ipsum
          fugiat?
        </h3>

        <span className='text-sm text-gray-500'>Product Description</span>
      </div>

      <div className='flex items-center gap-1 font-semibold transition-colors duration-400 group-hover/card:text-primary-500 [&_svg]:h-5 [&_svg]:w-5'>
        Check price
        <ChevronRight />
      </div>
    </Link>
  )
}

export default VerticalProductCardComponent
