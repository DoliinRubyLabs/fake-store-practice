import type { CollectionConfig } from 'payload'

import { footerBlock, headerBlock } from '../features'
import { seoFields } from '../shared/fields/seo'
import { slugField } from '../shared/fields/slug'
import { versionsField } from '../shared/fields/versions'
import { authenticated, authenticatedOrPublished } from '../shared/service'

// pages
export const Layout: CollectionConfig = {
  slug: 'layout',
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
    livePreview: {
      url: (data) => `/${data.locale}`,
    },
  },
  labels: {
    singular: 'Layout',
    plural: 'Layouts',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    ...slugField(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              label: 'Blocks',
              name: 'blocks',
              type: 'blocks',
              blocks: [headerBlock, footerBlock],
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: seoFields,
        },
      ],
    },
  ],
  versions: versionsField(),
}
