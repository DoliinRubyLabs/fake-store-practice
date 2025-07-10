import dynamic from 'next/dynamic'

export const ProductCardComponent = dynamic(() => import('./product-card.component'))
