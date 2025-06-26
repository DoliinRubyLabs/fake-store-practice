import type { CollectionConfig } from 'payload'

import { formBuilderBlock, textContentBlock } from '../features'
import { seoFields } from '../shared/fields/seo'
import { slugField } from '../shared/fields/slug'
import { versionsField } from '../shared/fields/versions'
import { authenticated, authenticatedOrPublished } from '../shared/service'

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
    livePreview: {
      url: (data) => (data.data.slug !== 'home-page' ? `/${data.locale}/${data.data.slug}` : `/${data.locale}`),
    },
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
      defaultValue: 'Home Page',
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
              blocks: [textContentBlock, formBuilderBlock],
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
