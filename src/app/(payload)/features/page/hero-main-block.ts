import { type Block } from 'payload'

import { actionFields } from '@/payload/shared/fields/action'

// hero main block
export const HeroMainBlock: Block = {
  slug: 'heroMainBlock',
  labels: {
    singular: 'Hero Main Block',
    plural: 'Hero Main Blocks',
  },
  fields: [
    {
      type: 'upload',
      name: 'image',
      label: 'Image',
      required: true,
      relationTo: 'images',
    },
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
      type: 'group',
      name: 'action',
      label: 'Action',
      admin: {
        className: 'group-last-container',
      },
      fields: [...actionFields('button')],
    },
  ],
}
