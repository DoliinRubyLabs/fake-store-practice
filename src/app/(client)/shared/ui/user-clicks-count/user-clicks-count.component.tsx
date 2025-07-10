import { MousePointerClick } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type FC } from 'react'

import { cn } from '@heroui/react'

// interface
interface IProps {
  className?: string
}

// component
const UserClicksCountComponent: FC<Readonly<IProps>> = (props) => {
  const { className } = props

  const t = useTranslations()

  // return
  return (
    <div className={cn(className, 'items-center gap-1 text-sm text-default-500 [&_svg]:h-4 [&_svg]:w-4')}>
      <MousePointerClick />

      <span>{t('user_clicks_count', { amount: 456 })}</span>
    </div>
  )
}

export default UserClicksCountComponent
