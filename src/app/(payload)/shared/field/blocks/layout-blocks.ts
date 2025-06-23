import { type Block } from 'payload'

// header block
export const headerBlock: Block = {
  slug: 'header',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'menu',
      type: 'array',
      label: 'Menu',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
  ],
}

// footer block
export const footerBlock: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'menuColumns',
      type: 'array',
      label: 'Menu Columns',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'columnTitle',
          type: 'text',
          label: 'Column Title',
          required: true,
          localized: true,
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          required: true,
          minRows: 1,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
              localized: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
      localized: true,
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Copyright Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
    },
  ],
}
