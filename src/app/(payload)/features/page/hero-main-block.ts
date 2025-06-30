import { type Block } from 'payload'

import { actionFields } from '../../shared/fields/action'

// hero main block
export const HeroMainBlock: Block = {
  slug: 'heroMainBlock',
  labels: {
    singular: 'Hero main block',
    plural: 'Hero main blocks',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      type: 'text',
      name: 'subtitle',
      label: 'Subtitle',
    },
    {
      type: 'upload',
      name: 'image',
      label: 'Image',
      required: true,
      relationTo: 'images',
    },
    {
      type: 'group',
      name: 'action',
      label: 'Action',
      fields: [...actionFields('button')],
    },
    {
      type: 'group',
      name: 'disclosure',
      label: 'Disclosure',
      required: true,
      admin: {
        className: 'group-last-container',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'info',
          type: 'richText',
          label: 'Info',
          required: true,
          admin: {
            className: 'rich-text-container',
          },
        },
      ],
    },
  ],
}
