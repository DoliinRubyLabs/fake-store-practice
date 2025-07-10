import { EmblaCarouselType } from 'embla-carousel'
import { ChevronLeft } from 'lucide-react'
import type { FC } from 'react'

import { Button, cn } from '@heroui/react'

import { useNavigationButtons } from './navigation-btn.service'

// interface
interface IProps {
  emblaApi?: EmblaCarouselType | undefined
  direction: 'prev' | 'next'
  className?: string
}

// component
const NavigationButton: FC<Readonly<IProps>> = (props) => {
  const { emblaApi, direction, className } = props

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useNavigationButtons(emblaApi)

  return (
    <Button
      onPress={direction === 'prev' ? onPrevButtonClick : onNextButtonClick}
      variant='faded'
      disabled={direction === 'prev' ? prevBtnDisabled : nextBtnDisabled}
      radius='full'
      isIconOnly
      className={cn(className, 'pointer-events-auto bg-white', { '[&_svg]:rotate-180': direction === 'next' })}
    >
      <ChevronLeft />
    </Button>
  )
}

export default NavigationButton
