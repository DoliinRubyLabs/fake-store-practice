import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../shared/service/access.service'

// media
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['filename', 'mimeType', 'createdAt'],
    useAsTitle: 'filename',
    group: 'Storage',
  },
  labels: {
    singular: 'Media',
    plural: 'Medias',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      defaultValue: 'image',
      localized: true,
    },
  ],
  upload: true,
}
