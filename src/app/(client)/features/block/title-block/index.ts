import dynamic from 'next/dynamic'

export const TitleBlockComponent = dynamic(() => import('./title-block.component'))
