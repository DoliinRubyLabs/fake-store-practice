import dynamic from 'next/dynamic'

export const TextContentComponent = dynamic(() => import('./title-block.component'))
