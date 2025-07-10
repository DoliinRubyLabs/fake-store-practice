import { type Block } from 'payload'

// template block
export const TemplateBlock: Block = {
  slug: 'templateBlock',
  labels: {
    singular: 'Template Block',
    plural: 'Template Blocks',
  },
  fields: [
    {
      name: 'template',
      type: 'relationship',
      label: 'Template',
      required: true,
      relationTo: 'templates',
    },
  ],
}
