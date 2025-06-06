import type { CollectionConfig } from 'payload'

import { seoField } from '../field/seo'
import { slugField } from '../field/slug'
import { versionsField } from '../field/versions'
import { authenticated, authenticatedOrPublished } from '../service/access.service'

// pages
export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'slug', '_status', 'createdAt'],
    useAsTitle: 'name',
    group: 'Content',
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
      localized: true,
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
      localized: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'sections',
              type: 'array',
              fields: [{ name: 'section', type: 'relationship', relationTo: 'sections', maxDepth: 2 }],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: seoField(),
        },
      ],
    },
    ...slugField(),
  ],
  versions: versionsField(),
}
