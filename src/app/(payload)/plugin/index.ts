import { Plugin } from 'payload'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

import { Page } from '../payload-types'

// generate title
const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Website` : 'Website'
}

// generate url
const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = process.env.NEXT_PUBLIC_CLIENT_WEB_URL || 'http://localhost:3000'

  return doc?.slug ? `${url}/${doc.slug}` : url
}

// plugins
export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  payloadCloudPlugin(),
]
