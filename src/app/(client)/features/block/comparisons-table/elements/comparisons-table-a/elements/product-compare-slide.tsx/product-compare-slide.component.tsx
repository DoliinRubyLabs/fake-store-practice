'use client'

import Image from 'next/image'

import { cn } from '@heroui/react'

import { IProduct } from '@/client/entities/models'
import { TopChoiceBadgeComponent } from '@/client/shared/ui/badge/top-choice-badge'
import { PriceButtonComponent } from '@/client/shared/ui/button/price-button'
import { Link } from '@/pkg/libraries/locale'

import { TableTextComponent } from './elements/table-text'

// interface
interface IProps {
  product: IProduct
}

// component
const ProductCompareSlideComponent = (props: IProps) => {
  const { product } = props

  // return
  return (
    <div className='group/card embla__slide relative min-w-[280px] max-w-[180px] shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3'>
      <Link href={product?.productLink ?? '/'} target='_blank'>
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

        <div className='grid h-full w-full place-content-start gap-3 border bg-white p-4 shadow-sm'>
          <div
            className={cn(
              'relative aspect-[1/0.9] min-h-[140px] w-full overflow-hidden rounded-xl',
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
            <h3 className='line-clamp-2 font-bold'>{product.fullName}</h3>

            <p className='text-sm text-gray-500'>{product.shortName}</p>
          </div>

          <PriceButtonComponent
            size='lg'
            linkUrl={'/'}
            btnImage={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'}
          />

          <div className='mx-[-16px] grid grid-cols-[75px_1fr] sm:grid-cols-1'>
            <TableTextComponent isLabel>Key Specs</TableTextComponent>

            <div className={cn('flex flex-col gap-1 text-center')}>
              {product?.details?.map((detail) =>
                detail.rows.map((row) => <TableTextComponent key={row.label}>{row.label}</TableTextComponent>),
              ) || '-'}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCompareSlideComponent
