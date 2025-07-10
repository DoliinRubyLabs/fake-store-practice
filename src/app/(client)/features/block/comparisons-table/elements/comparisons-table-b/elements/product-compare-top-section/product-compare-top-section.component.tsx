import Image from 'next/image'

import { cn } from '@heroui/react'

import { IProduct } from '@/app/(client)/entities/models'
import { TopChoiceBadgeComponent } from '@/app/(client)/shared/ui/badge/top-choice-badge'
import { PriceButtonComponent } from '@/client/shared/ui/button/price-button'
import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {
  product: IProduct
}

// component
const ProductCompareTopSectionComponent = (props: IProps) => {
  const { product } = props

  // return
  return (
    <div className='relative h-full w-full'>
      {product.isBestChoice && (
        <TopChoiceBadgeComponent
          isBestChoice
          badgeText='Best Choice'
          size='sm'
          className={'border-default-100 [&_svg]:text-warning-400'}
        />
      )}

      {product.isValueForMoney && (
        <TopChoiceBadgeComponent
          isValueForMoney
          badgeText='Best Value'
          size='sm'
          className={'border-default-100 [&_svg]:text-success-400'}
        />
      )}

      <Link href={product.productLink} target='_blank'>
        <div className='grid h-full w-full place-content-start gap-2 border bg-white p-3 shadow-sm'>
          <div
            className={cn(
              'relative aspect-[1/0.75] min-h-[100px] w-full overflow-hidden rounded-lg',
              'border border-default-200 shadow-sm transition-all duration-300 hover:border-default-300 hover:shadow-md',
            )}
          >
            <Image
              src={product.image.url}
              alt={product.image.alt}
              fill
              sizes='33vw'
              className='h-full w-full max-w-full object-contain transition-transform duration-300 hover:scale-[1.2] group-hover/card:scale-110'
            />
          </div>

          <div className='grid gap-1 text-center'>
            <h3 className='line-clamp-2 text-sm font-bold leading-tight'>{product.fullName}</h3>

            <p className='text-xs text-gray-500'>{product.shortName}</p>
          </div>

          <PriceButtonComponent
            size='sm'
            linkUrl={'/'}
            btnImage={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'}
          />
        </div>
      </Link>
    </div>
  )
}

export default ProductCompareTopSectionComponent
