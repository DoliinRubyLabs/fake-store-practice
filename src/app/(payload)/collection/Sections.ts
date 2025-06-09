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
import { versionsField } from '../shared/field/versions'
import { authenticated, authenticatedOrPublished } from '../shared/service'

// sections
export const Sections: CollectionConfig = {
  slug: 'templates',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: ['name', '_status', 'createdAt'],
    useAsTitle: 'name',
    group: 'Content',
  },
  labels: {
    singular: 'Template',
    plural: 'Templates',
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
      name: 'blocks',
      type: 'blocks',
      label: 'Content Blocks',
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
  versions: versionsField(),
}
