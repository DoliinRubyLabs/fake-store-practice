// storage-adapter-import-placeholder
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Layout } from './collection/Layout'
import { Media } from './collection/Media'
import { Pages } from './collection/Pages'
import { Users } from './collection/Users'
import { plugins } from './plugin'
import { locales } from './shared/constant'

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
  collections: [Layout, Pages, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  maxDepth: 3,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    },
  }),
  sharp,
  plugins: plugins(),
  localization: locales,
})
