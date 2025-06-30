import { type Block } from 'payload'

import { actionFields } from '../../shared/fields/action'

// list block
export const ListBlock: Block = {
  slug: 'listBlock',
  labels: {
    singular: 'List block',
    plural: 'List blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'list',
      type: 'array',
      label: 'List',
      minRows: 1,
      maxRows: 11,
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          required: true,
          relationTo: 'images',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          type: 'checkbox',
          name: 'asTop',
          label: 'Mark as top',
          defaultValue: false,
        },
      ],
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
