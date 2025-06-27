import dynamic from 'next/dynamic'

export const ContactFormComponent = dynamic(() => import('./contact-form.component'))
