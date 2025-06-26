import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import { envServer } from '@/config/env'

import { Images } from './collections/Images'
import { Layout } from './collections/Layout'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { locales } from './shared/constant'
import { generateTitle } from './shared/service'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// config
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, '(web)/admin/importMap.js'),
    },
    routes: {
      createFirstUser: '/create-root-user',
    },
    meta: {
      title: 'CMS Template',
      description: 'CMS Template - manage your content',
    },
  },
  routes: {
    admin: '/admin',
    api: '/api/rest',
  },
  collections: [Layout, Pages, Images, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'secret-key',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  maxDepth: 3,
  db: postgresAdapter({
    idType: 'uuid',
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
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
  ],
  localization: locales,
})
