'use client'

import { ChevronDownIcon, WalletMinimal } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { type FC, useState } from 'react'

import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { cn } from '@heroui/react'

import { IProduct } from '@/app/(client)/entities/models'
import { DiscountBadgeComponent } from '@/app/(client)/shared/ui/badge/discount-badge'
import { TopChoiceBadgeComponent } from '@/app/(client)/shared/ui/badge/top-choice-badge'
import { PriceButtonComponent } from '@/client/shared/ui/button/price-button'
import { StarsRatingComponent } from '@/client/shared/ui/stars-rating'
import { UserClicksCountComponent } from '@/client/shared/ui/user-clicks-count'
import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {
  order?: number
  reverseOrder?: number
  product: IProduct
}

// component
const ProductCardComponent: FC<Readonly<IProps>> = (props) => {
  const { order, reverseOrder, product } = props

  const t = useTranslations()

  const [moreIsOpen, setMoreIsOpen] = useState(false)

  const handleMoreInfo = () => {
    setMoreIsOpen((prev) => !prev)
  }

  // return
  return (
    <div
      className={cn(
        'group/product-card border-default-100 relative grid rounded-3xl border shadow-md',
        'hover:border-default-200 transition-all duration-300 hover:shadow-lg sm:grid sm:grid-cols-[1fr_260px]',
        'md:grid-cols-3 md:grid-rows-1 md:gap-x-6 md:pb-0',
        {
          'sm:grid-cols-[1fr_260px]': Boolean(product?.details?.length),
          'pb-[80px] sm:pb-[50px]': product.hasDetails && product.isBestChoice,
          'pb-[50px]': product.hasDetails && !product.isBestChoice,
          'sm:pb-0': moreIsOpen,
          'border-primary-100 hover:border-primary-200': product?.isBestChoice,
          'mt-4': product?.isBestChoice || product?.isValueForMoney,
        },
      )}
    >
      {product?.isBestChoice && (
        <TopChoiceBadgeComponent
          isBestChoice
          badgeText='Best Choice'
          size='lg'
          className={'border-primary-100 group-hover/product-card:border-primary-200 [&_svg]:text-warning-400'}
        />
      )}

      {product?.isValueForMoney && (
        <TopChoiceBadgeComponent
          isValueForMoney
          size='lg'
          badgeText='Best Value'
          className={'border-default-100 group-hover/product-card:border-default-200 [&_svg]:text-success-400'}
        />
      )}

      {order && (
        <div
          className={cn(
            'absolute top-16 -left-4 flex h-8 w-8 items-center justify-center rounded-full border bg-white',
            'group-hover/product-card:border-default-200 transition-all duration-300',
            { 'border-primary-100 group-hover/product-card:border-primary-200': product?.isBestChoice },
          )}
        >
          <p className='text-sm font-bold text-gray-500'>{order}</p>
        </div>
      )}

      <div className='grid grid-cols-[0.6fr_auto_0.4fr] items-center justify-between gap-6 p-5 sm:grid-cols-[1fr_auto_1fr] sm:flex-row sm:p-0 sm:pl-5'>
        <div className='order-3 grid justify-items-center sm:order-1'>
          {reverseOrder && <p className='text-3xl font-bold text-gray-800'>{reverseOrder}</p>}

          <p className='mb-1 text-sm text-gray-500'>{product?.rank?.label}</p>

          <StarsRatingComponent rating={String(product?.rank?.value)} />
        </div>

        <Divider
          orientation='vertical'
          className={cn('order-2 bg-gray-100 transition-colors duration-300 group-hover/product-card:bg-gray-200', {
            'bg-primary-100 group-hover/product-card:bg-primary-200': product?.isBestChoice,
          })}
        />

        <Link href={product?.productLink} className='order-1 sm:order-3' target='_blank'>
          <div className='grid justify-items-center gap-2 sm:pt-5 sm:pr-5 sm:pb-2 md:px-0 md:pb-5'>
            <Image
              src={product?.image?.url}
              alt={product?.image?.alt}
              width={150}
              height={150}
              className='aspect-square rounded-md object-contain'
            />

            <p className='line-clamp-1 text-sm text-gray-500'>{product?.shortName}</p>
          </div>
        </Link>
      </div>

      <div
        className={cn(
          'border-default-100 flex flex-col justify-between gap-5 pt-4 transition-colors',
          'group-hover:border-default-100 duration-300 sm:col-span-full sm:row-[2] sm:border-t',
          'sm:px-5 sm:pb-5 md:col-[2] md:row-[1] md:border-none md:p-5',
          { 'border-primary-100 group-hover/product-card:border-primary-200': product?.isBestChoice },
        )}
      >
        <Link href={product?.productLink} target='_blank' className='flex flex-col gap-2 sm:mb-0 md:mb-0'>
          <p className={cn('line-clamp-2 px-5 text-base font-semibold sm:px-0')}>{product?.fullName}</p>

          {product?.hasDiscount && (
            <div className='px-5 sm:px-0'>
              <DiscountBadgeComponent discount={String(product?.discountPercent)} />
            </div>
          )}

          {product?.isBestChoice && <UserClicksCountComponent className='hidden justify-start sm:flex' />}
        </Link>

        {product?.hasDetails && (
          <div className={cn('absolute right-5 bottom-4 left-5 z-10 sm:bottom-5 sm:w-fit md:static md:z-auto')}>
            <Button
              onPress={handleMoreInfo}
              endContent={
                <ChevronDownIcon
                  className={cn('h-4 w-4 transition-transform duration-300', { 'rotate-180': moreIsOpen })}
                />
              }
              fullWidth
              className='bg-default-100 font-semibold'
            >
              {moreIsOpen ? t('less_info') : t('more_info')}
            </Button>

            {product?.isBestChoice && <UserClicksCountComponent className='mt-2 flex justify-center sm:hidden' />}
          </div>
        )}
      </div>

      <div
        className={cn(
          'flex items-center justify-center px-5 py-4 transition-colors duration-300 sm:bg-[#fbfcfd]',
          'sm:col-[2] sm:row-[1] sm:rounded-tr-3xl sm:border-l md:col-[3] md:rounded-tr-3xl md:rounded-br-3xl',
          {
            'border-primary-100 group-hover/product-card:border-primary-200': product?.isBestChoice,
            'border-default-100 group-hover/product-card:border-default-200': !product?.isBestChoice,
          },
        )}
      >
        <PriceButtonComponent
          linkUrl={product?.productLink}
          btnImage={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'}
        />
      </div>

      {product?.hasDetails && (
        <div
          className={cn('relative col-span-full grid grid-rows-[0fr] transition-all duration-300', {
            'grid-rows-[1fr]': moreIsOpen,
          })}
        >
          <div
            className={cn(
              'grid overflow-hidden transition-all duration-500 sm:grid-cols-2 md:grid-cols-3',
              'border-default-100 border-opacity-0 group-hover/product-card:border-default-200 px-5',
              {
                'border-opacity-100': moreIsOpen,
                'border-primary-100 group-hover/product-card:border-primary-200': product?.isBestChoice,
              },
            )}
          >
            <Divider
              className={cn(
                'absolute top-0 right-0 left-0 order-2 bg-gray-100 opacity-0 transition-all duration-300 group-hover/product-card:bg-gray-200',
                {
                  'bg-primary-100 group-hover/product-card:bg-primary-200': product?.isBestChoice,
                  'opacity-100': moreIsOpen,
                },
              )}
            />

            <div className='py-3 sm:col-span-full md:col-span-2 md:py-5'>
              {product?.details?.map((item, index) => (
                <div key={`${index}-item-title`} className='mb-3 md:mb-5'>
                  <p className='mb-1 text-base font-semibold'>{item.title}</p>

                  {item.rows.map((text, index) => (
                    <div
                      key={`${index}-text-${item.title}`}
                      className='mb-1 grid grid-cols-[20px_1fr] items-start gap-3 [&_svg]:h-4 [&_svg]:w-4'
                    >
                      <div
                        className={cn(
                          'flex h-6 w-6 items-center justify-center rounded-md',
                          'bg-default-100 text-default-600',
                        )}
                      >
                        <span className='[&_svg]:h-4 [&_svg]:w-4' dangerouslySetInnerHTML={{ __html: text.iconSvg }} />
                      </div>

                      <li className='list-none'>{text.label}</li>
                    </div>
                  ))}
                </div>
              ))}

              <div className='mb-3 md:mb-5'>
                <p className='mb-1 text-base font-semibold'>{t('product_estimated_price')}</p>

                <div className='mb-1 grid grid-cols-[20px_1fr] items-start gap-3 [&_svg]:h-4 [&_svg]:w-4'>
                  <div
                    className={cn(
                      'flex h-6 w-6 items-center justify-center rounded-md',
                      'bg-default-100 text-default-600',
                    )}
                  >
                    <WalletMinimal className='h-4 w-4' />
                  </div>

                  <li className='list-none'>${product?.estimatedPrice}</li>
                </div>
              </div>
            </div>

            <div className='hidden w-fit self-end justify-self-end sm:col-[2] sm:block sm:pt-5 md:col-[3]'>
              <PriceButtonComponent
                className='mb-5'
                linkUrl={product?.productLink}
                btnImage={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCardComponent
