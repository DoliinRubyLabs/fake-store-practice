import dynamic from 'next/dynamic'

export const RichTextBlockComponent = dynamic(() => import('./richtext-block.component'))
