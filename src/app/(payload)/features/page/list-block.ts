import { type Block } from 'payload'

import { actionFields } from '@/payload/shared/fields/action'
import { disclosureFields } from '@/payload/shared/fields/disclosure'

// list block
export const ListBlock: Block = {
  slug: 'listBlock',
  labels: {
    singular: 'List Block',
    plural: 'List Blocks',
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
      type: 'checkbox',
      name: 'showDisclosure',
      label: 'Show disclosure',
      defaultValue: false,
    },
    {
      type: 'group',
      name: 'disclosure',
      label: 'Disclosure',
      admin: {
        condition: (_, siblingData) => siblingData?.showDisclosure,
      },
      fields: [...disclosureFields],
    },
    {
      name: 'rows',
      type: 'array',
      label: 'Rows',
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
      ],
    },
    {
      type: 'group',
      name: 'action',
      label: 'Action',
      admin: {
        condition: (_, siblingData) => siblingData?.showAction,
      },
      fields: [...actionFields('button')],
    },
    {
      type: 'checkbox',
      name: 'showAction',
      label: 'Show action',
      defaultValue: true,
    },
  ],
}
