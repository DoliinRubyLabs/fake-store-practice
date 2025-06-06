import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'
import { slugField } from '../fields/slug'
import { versionsField } from '../fields/versions'
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
    defaultColumns: ['name', 'slug', 'status', 'createdAt'],
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
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [],
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
