'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { Button, ButtonGroup } from '@heroui/button'
import { cn } from '@heroui/react'

import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {
  className?: string
  linkUrl?: string
  btnImage?: string
  btnText?: string
  size?: 'sm' | 'lg'
}

// component
const PriceButtonComponent: FC<Readonly<IProps>> = (props) => {
  const { className, linkUrl, btnImage, btnText, size = 'lg' } = props

  const t = useTranslations()

  // return
  return (
    <ButtonGroup
      as={Link}
      href={linkUrl}
      target='_blank'
      size={size}
      className={cn('grid w-full grid-cols-2', className)}
    >
      <Button
        radius='lg'
        className='pointer-events-none grid items-center border bg-white align-middle'
        disableAnimation
      >
        <Image
          alt='Amazon logo'
          src={btnImage || ''}
          fill
          sizes='10vw'
          className={cn('mx-auto mt-0.5 object-contain object-center', {
            'max-w-[50px]': size === 'sm',
            'max-w-[70px]': size === 'lg',
          })}
        />
      </Button>

      <Button
        color='primary'
        radius='lg'
        disableAnimation
        className={cn('font-semibold !transition-all duration-300', {
          'text-xs': size === 'sm',
          'text-sm': size === 'lg',
        })}
      >
        {btnText || t('product_price_btn')}
      </Button>
    </ButtonGroup>
  )
}

export default PriceButtonComponent
