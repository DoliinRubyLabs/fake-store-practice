import type { CollectionConfig } from 'payload'

import { formBuilderBlock, textContentBlock } from '../shared/field/blocks'
import { seoField } from '../shared/field/seo'
import { slugField } from '../shared/field/slug'
import { versionsField } from '../shared/field/versions'
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
              blocks: [textContentBlock, formBuilderBlock],
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
