import dynamic from 'next/dynamic'

export const FooterComponent = dynamic(() => import('./footer.component'))
