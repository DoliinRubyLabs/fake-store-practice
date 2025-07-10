import dynamic from 'next/dynamic'

export const DiscountBadgeComponent = dynamic(() => import('./discount-badge.component'))
