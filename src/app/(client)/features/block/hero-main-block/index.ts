import dynamic from 'next/dynamic'

export const HeroMainBlockComponent = dynamic(() => import('./hero-main-block.component'))
