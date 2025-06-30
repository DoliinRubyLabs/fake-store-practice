import dynamic from 'next/dynamic'

export const FeedbackBlockComponent = dynamic(() => import('./feedback-block.component'))
