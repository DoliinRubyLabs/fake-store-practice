import { Gem, Trophy } from 'lucide-react'
import { type FC } from 'react'

import { cn } from '@heroui/react'

// interface
interface IProps {
  isBestChoice?: boolean
  isValueForMoney?: boolean
  badgeText: string
  size?: 'sm' | 'lg'
  className?: string
}

// component
const TopChoiceBadgeComponent: FC<Readonly<IProps>> = (props) => {
  const { isBestChoice, isValueForMoney, badgeText, size, className } = props

  // return
  return (
    <div
      className={cn(
        className,
        'absolute z-10 grid grid-cols-[auto_1fr] items-center gap-2 rounded-full border-1 bg-white font-semibold transition-colors duration-300',
        {
          '-top-5 left-5 px-4 py-1.5 text-sm [&_svg]:h-5 [&_svg]:w-5': size === 'lg',
          'top-2 left-2 px-2 py-1 text-xs shadow-md [&_svg]:h-4 [&_svg]:w-4': size === 'sm',
        },
      )}
    >
      {isBestChoice && <Trophy />}

      {isValueForMoney && <Gem />}

      <p>{badgeText}</p>
    </div>
  )
}

export default TopChoiceBadgeComponent
