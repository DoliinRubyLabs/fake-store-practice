import dynamic from 'next/dynamic'

export const HeaderComponent = dynamic(() => import('./header.component'))
