import dynamic from 'next/dynamic'

export const ArticleBlockComponent = dynamic(() => import('./article-block.component'))
