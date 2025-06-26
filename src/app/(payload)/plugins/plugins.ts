import { Plugin } from 'payload'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { s3Storage } from '@payloadcms/storage-s3'

import { envServer } from '@/config/env'

import { Page } from '../payload-types'

// generate title
const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.name ? `${doc.name}` : 'Website Title'
}

// plugins
export const plugins = (): Plugin[] => {
  const appPlugins = [
    payloadCloudPlugin(),
    seoPlugin({ generateTitle }),
    s3Storage({
      collections: {
        images: { prefix: 'images' },
      },
      bucket: envServer.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: envServer.S3_ACCESS_KEY_ID,
          secretAccessKey: envServer.S3_SECRET_ACCESS_KEY,
        },
        region: envServer.S3_REGION,
        endpoint: envServer.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ]

  return appPlugins
}
