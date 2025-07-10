import dynamic from 'next/dynamic'

export const StarsRatingComponent = dynamic(() => import('./stars-rating.component'))
