import { GenerateTitle } from '@payloadcms/plugin-seo/types'

import { Page } from '../../payload-types'

// generate title
export const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.name ? `${doc.name}` : 'Website Title'
}
