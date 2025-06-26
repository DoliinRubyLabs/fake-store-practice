import { Plugin } from 'payload'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { s3Storage } from '@payloadcms/storage-s3'

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
      bucket: `${process.env.S3_BUCKET}`,
      config: {
        credentials: {
          accessKeyId: `${process.env.S3_ACCESS_KEY_ID}`,
          secretAccessKey: `${process.env.S3_SECRET_ACCESS_KEY}`,
        },
        region: `${process.env.S3_REGION}`,
        endpoint: `${process.env.S3_ENDPOINT}`,
        forcePathStyle: true,
      },
    }),
  ]

  return appPlugins
}
