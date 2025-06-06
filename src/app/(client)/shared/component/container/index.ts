import dynamic from 'next/dynamic'

export const ContainerComponent = dynamic(() => import('./container.component'))
