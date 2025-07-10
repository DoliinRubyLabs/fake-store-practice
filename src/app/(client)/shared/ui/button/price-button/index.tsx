import dynamic from 'next/dynamic'

export const PriceButtonComponent = dynamic(() => import('./price-button.component'))
