import { type Block } from 'payload'

// article block
export const ArticleBlock: Block = {
  slug: 'articleBlock',
  labels: {
    singular: 'Article Block',
    plural: 'Article Blocks',
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
      type: 'richText',
      name: 'content',
      label: 'Content',
      required: true,
    },
  ],
}
