import { Plugin } from 'payload'

import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle } from '@payloadcms/plugin-seo/types'

// import { s3Storage } from '@payloadcms/storage-s3'
import { Page } from '../payload-types'

// generate title
const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.name ? `${doc.name}` : 'Website Title'
}

// plugins
export const plugins: Plugin[] = [
  seoPlugin({ generateTitle }),
  payloadCloudPlugin(),
  // s3Storage({
  //   collections: {
  //     media: true,
  //     'media-with-prefix': {
  //       prefix: 'media',
  //     },
  //     'media-with-presigned-downloads': {
  //       // Filter only mp4 files
  //       signedDownloads: {
  //         shouldUseSignedURL: ({ collection, filename, req }) => {
  //           return filename.endsWith('.mp4')
  //         },
  //       },
  //     },
  //   },
  //   bucket: `${process.env.S3_BUCKET}`,
  //   config: {
  //     credentials: {
  //       accessKeyId: `${process.env.S3_ACCESS_KEY_ID}`,
  //       secretAccessKey: `${process.env.S3_SECRET_ACCESS_KEY}`,
  //     },
  //     region: `${process.env.S3_REGION}`,
  //   },
  // }),
]
