import { type Block } from 'payload'

import { disclosureFields } from '@/payload/shared/fields/disclosure'

// comparisons block
export const ComparisonsTitleBlock: Block = {
  slug: 'comparisonsTitleBlock',
  labels: {
    singular: 'Comparisons Title Block',
    plural: 'Comparisons Title Blocks',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      type: 'checkbox',
      name: 'showSubtitle',
      label: 'Show subtitle',
      defaultValue: true,
    },
    {
      type: 'group',
      name: 'subtitle',
      label: 'Subtitle',
      admin: {
        condition: (_, siblingData) => siblingData?.showSubtitle,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'iconSvg',
              label: 'Icon SVG',
              required: true,
              admin: {
                description: 'Copy and paste the icon svg code from: https://lucide.dev/icons',
              },
            },
            {
              type: 'text',
              name: 'label',
              label: 'Label',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'showBadge',
      label: 'Show badge',
      defaultValue: true,
    },
    {
      type: 'group',
      name: 'badge',
      label: 'Badge',
      admin: {
        condition: (_, siblingData) => siblingData?.showBadge,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'text',
              name: 'value',
              label: 'Value',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'showSortBy',
      label: 'Show sort by',
      defaultValue: true,
    },
    {
      type: 'array',
      name: 'sortBy',
      label: 'Sort By',
      minRows: 1,
      maxRows: 3,
      admin: {
        condition: (_, siblingData) => siblingData?.showSortBy,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'label',
              label: 'Label',
              required: true,
            },
            {
              type: 'text',
              name: 'value',
              label: 'Value',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'checkbox',
      name: 'showDisclosure',
      label: 'Show disclosure',
      defaultValue: false,
    },
    {
      type: 'group',
      name: 'disclosure',
      label: 'Disclosure',
      admin: {
        condition: (_, siblingData) => siblingData?.showDisclosure,
        className: 'group-last-container',
      },
      fields: [...disclosureFields],
    },
  ],
}
