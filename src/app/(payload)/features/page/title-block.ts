import { type Block } from 'payload'

import { disclosureFields } from '@/payload/shared/fields/disclosure'

// title block
export const TitleBlock: Block = {
  slug: 'titleBlock',
  labels: {
    singular: 'Title Block',
    plural: 'Title Blocks',
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
      type: 'group',
      name: 'disclosure',
      label: 'Disclosure',
      admin: {
        condition: (_, siblingData) => siblingData?.showDisclosure,
      },
      fields: [...disclosureFields],
    },
    {
      type: 'checkbox',
      name: 'showDisclosure',
      label: 'Show disclosure',
      defaultValue: false,
    },
  ],
}
