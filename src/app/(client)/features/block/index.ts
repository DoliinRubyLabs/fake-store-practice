import dynamic from 'next/dynamic'

export const BlockComponent = dynamic(() => import('./block.component'))
