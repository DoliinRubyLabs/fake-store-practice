import dynamic from 'next/dynamic'

export const UserClicksCountComponent = dynamic(() => import('./user-clicks-count.component'))
