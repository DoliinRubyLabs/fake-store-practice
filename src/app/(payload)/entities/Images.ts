import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../shared/services'

// images
export const Images: CollectionConfig = {
  slug: 'images',
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
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      defaultValue: 'image',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
    formatOptions: {
      format: 'webp',
      options: { quality: 75 },
    },
  },
}
