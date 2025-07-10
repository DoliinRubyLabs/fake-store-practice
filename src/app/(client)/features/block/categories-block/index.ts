import dynamic from 'next/dynamic'

export const CategoriesBlockComponent = dynamic(() => import('./categories-block.component'))
