import type { CollectionConfig } from 'payload'

import { publishedField } from '../fields/published'
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
    defaultColumns: ['title', 'slug', 'status', 'createdAt'],
    useAsTitle: 'title',
    group: 'Content',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [],
        },
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
    publishedField(),
    ...slugField(),
  ],
  versions: versionsField(),
}
