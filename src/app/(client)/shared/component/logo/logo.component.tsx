'use client'

import Link from 'next/link'
import { FC } from 'react'

import { cn } from '@heroui/react'

import { IconLogo } from '@/app/(client)/shared/asset/icon'
import { ESiteRoute } from '@/app/(client)/shared/routes/route.interface'

import { useLogoService } from './logo.service'

// interface
interface IProps {
  w?: number
  h?: number
  className?: string
}

// component
const LogoComponent: FC<Readonly<IProps>> = (props) => {
  const { w = 50, h = 50, className = '' } = props

  const thisService = useLogoService()

  // return
  return (
    <Link
      href={ESiteRoute.BASE}
      className={cn([
        `h-fit w-fit items-center`,
        { 'pointer-events-none': thisService.pathname === ESiteRoute.BASE },
        className,
      ])}
      aria-label={'logo'}
    >
      <IconLogo width={w} height={h} className={'fill-foreground'} />
    </Link>
  )
}

export default LogoComponent
