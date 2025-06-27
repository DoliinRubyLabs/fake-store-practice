import { type Block } from 'payload'

import { actionFields } from '../../shared/fields/action'

// header block
export const headerBlock: Block = {
  slug: 'header',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  fields: [
    {
      label: 'Navigation',
      name: 'navigation',
      type: 'array',
      minRows: 1,
      maxRows: 7,
      fields: [
        {
          name: 'linkText',
          type: 'text',
          label: 'Text',
          required: true,
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            condition: (_data, siblingData) => !siblingData.hasLinks,
          },
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
          admin: {
            condition: (_data, siblingData) => !siblingData.hasLinks,
          },
        },
        {
          name: 'hasLinks',
          type: 'checkbox',
          label: 'Has Links',
          defaultValue: false,
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          required: true,
          minRows: 1,
          maxRows: 10,
          fields: [...actionFields('link')],
          admin: {
            condition: (_data, siblingData) => siblingData.hasLinks,
          },
        },
      ],
    },
    {
      label: 'Buttons',
      name: 'actions',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [...actionFields('button')],
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
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          required: true,
          minRows: 1,
          maxRows: 10,
          fields: [...actionFields('link')],
        },
      ],
    },
    {
      label: 'Copyright',
      name: 'copyright',
      type: 'text',
      defaultValue: '© 2025 All rights reserved.',
    },
    {
      name: 'copyrightAlignment',
      type: 'select',
      label: 'Copyright Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
      admin: {
        condition: (_data, siblingData) => !!siblingData.copyright,
      },
    },
  ],
}
