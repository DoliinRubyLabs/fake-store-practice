import { useTranslations } from 'next-intl'

import { Chip } from '@heroui/chip'

// interface
interface IProps {
  discount: string
  className?: string
}

// component
const DiscountBadgeComponent = (props: IProps) => {
  const { discount, className } = props

  const t = useTranslations()

  // return
  return (
    <Chip color='warning' variant='bordered' radius='md' className={className}>
      <p className='font-semibold'>{t('product_get_discount', { discount })}</p>
    </Chip>
  )
}

export default DiscountBadgeComponent
