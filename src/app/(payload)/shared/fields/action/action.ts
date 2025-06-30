import { Field } from 'payload'

// interface
type IValue = 'link' | 'button'

// action fields
export const actionFields = (value?: IValue): Field[] => {
  return [
    {
      name: 'actionType',
      type: 'select',
      label: 'Action Type',
      required: true,
      options: [
        { label: 'Link', value: 'link' },
        { label: 'Link with Icon', value: 'linkIcon' },
        { label: 'Link with Icon Only', value: 'linkIconOnly' },
        { label: 'Button', value: 'button' },
        { label: 'Button with Icon', value: 'buttonIcon' },
        { label: 'Button with Icon Only', value: 'buttonIconOnly' },
      ],
      defaultValue: value || 'link',
      filterOptions: (args) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return args.options.filter((option: any) => {
          if (value === 'link') {
            return option.value === 'link' || option.value === 'linkIcon' || option.value === 'linkIconOnly'
          }
          if (value === 'button') {
            return option.value === 'button' || option.value === 'buttonIcon' || option.value === 'buttonIconOnly'
          }

          return true
        })
      },
      dbName: 'action_type',
      custom: { postgres: { type: 'text' } },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
          admin: {
            condition: (_data, siblingData) => {
              return siblingData.actionType !== 'linkIconOnly' && siblingData.actionType !== 'buttonIconOnly'
            },
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            condition: (_data, siblingData) => siblingData.asLink || siblingData.actionType.includes('link'),
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'iconSvg',
          type: 'text',
          label: 'Icon SVG',
          required: true,
          admin: {
            condition: (_data, siblingData) => siblingData.actionType !== 'button' && siblingData.actionType !== 'link',
            description: 'Copy and paste the icon svg code from: https://lucide.dev/icons',
          },
        },
        {
          name: 'iconPosition',
          type: 'select',
          label: 'Icon Position',
          required: true,
          defaultValue: 'left',
          options: [
            { label: 'Icon Left', value: 'left' },
            { label: 'Icon Right', value: 'right' },
          ],
          admin: {
            condition: (_data, siblingData) => siblingData.actionType !== 'link' && siblingData.actionType !== 'button',
          },
          dbName: 'icon_position',
          custom: { postgres: { type: 'text' } },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'linkColor',
          type: 'select',
          label: 'Link Color',
          required: true,
          options: [
            { label: 'Foreground', value: 'foreground' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
          ],
          defaultValue: 'foreground',
          dbName: 'link_color',
          custom: { postgres: { type: 'text' } },
        },
        {
          name: 'linkVariant',
          type: 'select',
          label: 'Link Variant',
          required: true,
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Underline', value: 'underline' },
          ],
          defaultValue: 'underline',
          dbName: 'link_variant',
          custom: { postgres: { type: 'text' } },
        },
      ],
      admin: {
        condition: (_data, siblingData) => siblingData.actionType.includes('link'),
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonColor',
          type: 'select',
          label: 'Color',
          required: true,
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Success', value: 'success' },
            { label: 'Danger', value: 'danger' },
            { label: 'Warning', value: 'warning' },
          ],
          defaultValue: 'primary',
          dbName: 'btn_color',
          custom: { postgres: { type: 'text' } },
        },
        {
          name: 'buttonVariant',
          type: 'select',
          label: 'Variant',
          required: true,
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Solid', value: 'solid' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Faded', value: 'faded' },
            { label: 'Flat', value: 'flat' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Bordered', value: 'bordered' },
          ],
          defaultValue: 'solid',
          dbName: 'btn_variant',
          custom: { postgres: { type: 'text' } },
        },
      ],
      admin: {
        condition: (_data, siblingData) => siblingData.actionType.includes('button'),
      },
    },
    {
      name: 'asLink',
      type: 'checkbox',
      label: 'As Link?',
      defaultValue: false,
      admin: {
        condition: (_data, siblingData) => siblingData.actionType.includes('button'),
      },
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in New Tab',
      defaultValue: false,
      admin: {
        condition: (_data, siblingData) =>
          siblingData.asLink ||
          siblingData.actionType === 'link' ||
          siblingData.actionType === 'linkIcon' ||
          siblingData.actionType === 'linkIconOnly',
      },
    },
  ]
}
