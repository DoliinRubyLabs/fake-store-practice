import dynamic from 'next/dynamic'

export const NotFoundComponent = dynamic(() => import('./not-found.component'))
