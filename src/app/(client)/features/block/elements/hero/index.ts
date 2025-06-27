import dynamic from 'next/dynamic'

export const HeroComponent = dynamic(() => import('./hero.component'))
