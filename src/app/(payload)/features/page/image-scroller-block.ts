import { type Block } from 'payload'

// image scroller block
export const ImageScrollerBlock: Block = {
  slug: 'imageScrollerBlock',
  labels: {
    singular: 'Image Scroller Block',
    plural: 'Image Scroller Blocks',
  },
  fields: [
    {
      name: 'list',
      type: 'array',
      label: 'Images',
      minRows: 1,
      maxRows: 10,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          required: true,
          relationTo: 'images',
        },
      ],
    },
  ],
}
