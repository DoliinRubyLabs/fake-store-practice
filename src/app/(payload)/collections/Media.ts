import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../service/access.service'

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
    defaultColumns: ['filename', 'mimeType', 'size'],
    useAsTitle: 'filename',
  },
  labels: {
    singular: 'Media',
    plural: 'Media Storage',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      defaultValue: 'Image',
    },
  ],
  upload: true,
}
