import { Plugin } from 'payload'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle } from '@payloadcms/plugin-seo/types'

import { Page } from '../payload-types'

// generate title
const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.name ? `${doc.name} | Website` : 'Website'
}

// plugins
export const plugins: Plugin[] = [seoPlugin({ generateTitle }), payloadCloudPlugin()]
