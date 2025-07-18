'use client'

import { ArrowUpIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useRef, useState } from 'react'

import { cn } from '@heroui/react'

// interface
interface IProps {
  className?: string
}

// component
const BackToTopComponent: FC<IProps> = (props) => {
  const { className } = props

  const t = useTranslations()

  const lastScrollY = useRef(0)
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY.current && currentScrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // return
  return (
    <div
      onClick={handleClick}
      className={cn(
        'fixed right-5 bottom-5 z-20 flex cursor-pointer items-center gap-2 rounded-full bg-white p-3',
        'opacity-0 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg',
        { 'opacity-100': isVisible },
        className,
      )}
    >
      <ArrowUpIcon height={20} width={20} />

      <p className='hidden text-sm sm:block'>{t('back_to_top')}</p>
    </div>
  )
}

export default BackToTopComponent
