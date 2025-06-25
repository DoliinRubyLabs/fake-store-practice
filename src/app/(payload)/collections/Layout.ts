import type { CollectionConfig } from 'payload'

import { footerBlock, headerBlock } from '../shared/field/blocks'
import { seoField } from '../shared/field/seo'
import { slugField } from '../shared/field/slug'
import { versionsField } from '../shared/field/versions'
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
          fields: seoField(),
        },
      ],
    },
    ...slugField(),
  ],
  versions: versionsField(),
}
