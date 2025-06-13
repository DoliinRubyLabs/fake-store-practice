import type { CollectionConfig } from 'payload'

import {
  buttonBlock,
  cardsBlock,
  faqBlock,
  formBuilderBlock,
  imageBlock,
  imageGalleryBlock,
  textContentBlock,
  titleDescriptionImageBlock,
  videoBlock,
} from '../shared/field/blocks'
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
              name: 'sections',
              type: 'blocks',
              blocks: [
                textContentBlock,
                imageBlock,
                imageGalleryBlock,
                formBuilderBlock,
                videoBlock,
                buttonBlock,
                cardsBlock,
                titleDescriptionImageBlock,
                faqBlock,
              ],
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
