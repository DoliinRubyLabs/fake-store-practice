import { type Block } from 'payload'

// rich text block
export const RichTextBlock: Block = {
  slug: 'richTextBlock',
  labels: {
    singular: 'Rich Text Block',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      admin: {
        className: 'rich-text-container',
      },
    },
  ],
}
