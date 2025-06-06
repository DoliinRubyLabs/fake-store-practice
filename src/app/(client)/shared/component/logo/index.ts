import dynamic from 'next/dynamic'

export const LogoComponent = dynamic(() => import('./logo.component'))
