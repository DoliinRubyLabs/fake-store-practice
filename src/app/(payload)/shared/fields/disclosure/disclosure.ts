import { Field } from 'payload'

// disclosure fields
export const disclosureFields: Field[] = [
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
]
