import dynamic from 'next/dynamic'

export const FieldComponent = dynamic(() => import('./field.component'))
