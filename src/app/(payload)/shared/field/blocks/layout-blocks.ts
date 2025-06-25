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
      label: 'Navigation',
      name: 'navigation',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
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
      label: 'Buttons',
      name: 'buttons',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
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
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
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
      label: 'Copyright',
      name: 'copyright',
      type: 'richText',
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
