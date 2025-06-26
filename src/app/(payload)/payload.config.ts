import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { envServer } from '@/config/env'

import { Images } from './collections/Images'
import { Layout } from './collections/Layout'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { plugins } from './plugins'
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
  collections: [Layout, Pages, Images, Users],
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
  plugins: plugins(),
  localization: locales,
})
