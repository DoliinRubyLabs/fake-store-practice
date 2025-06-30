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

import { Images, LayoutGlobal, Pages, Users } from './entities'
import { locales } from './shared/constants'
import { generateTitle } from './shared/services'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// config
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, '(app)/admin/importMap.js'),
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
  collections: [Pages, Images, Users],
  globals: [LayoutGlobal],
  editor: lexicalEditor(),
  secret: envServer.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  maxDepth: 3,
  db: postgresAdapter({
    idType: 'uuid',
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: envServer.DATABASE_URI,
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
