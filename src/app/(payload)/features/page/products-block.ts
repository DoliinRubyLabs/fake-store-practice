import { type Block } from 'payload'

// products block
export const ProductsBlock: Block = {
  slug: 'productsBlock',
  labels: {
    singular: 'Products Block',
    plural: 'Products Blocks',
  },
  fields: [
    {
      type: 'select',
      name: 'includeProducts',
      label: 'Include Products',
      required: true,
      options: [{ label: 'By Slug', value: 'bySlug' }],
      defaultValue: 'bySlug',
      dbName: 'include_products',
      custom: { postgres: { type: 'text' } },
    },
  ],
}
