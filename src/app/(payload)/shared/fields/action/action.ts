import { Field } from 'payload'

import { buttonColorOptions, buttonVariantOptions, linkColorOptions } from '../../constants/ui.constant'

// interface
type IValue = 'link' | 'button'

// action field
export const actionFields = (value?: IValue): Field[] => {
  return [
    {
      name: 'actionType',
      type: 'select',
      label: 'Action Type',
      required: true,
      options: [
        { label: 'Link', value: 'link' },
        { label: 'Link with Icon', value: 'linkWithIcon' },
        { label: 'Link with Icon Only', value: 'linkIconOnly' },
        { label: 'Button', value: 'button' },
        { label: 'Button with Icon', value: 'buttonWithIcon' },
        { label: 'Button with Icon Only', value: 'buttonIconOnly' },
      ],
      filterOptions: (args) => {
        return args.options.filter((option) => {
          if (value === 'link') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return option.value === 'link' || option.value === 'linkWithIcon' || option.value === 'linkIconOnly'
          }
          if (value === 'button') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return option.value === 'button' || option.value === 'buttonWithIcon' || option.value === 'buttonIconOnly'
          }

          return true
        })
      },
      dbName: 'action_type',
      custom: { postgres: { type: 'text' } },
    },
    {
      name: 'actionText',
      type: 'text',
      label: 'Text',
      required: true,
      admin: {
        condition: (_data, siblingData) => {
          return (
            siblingData.actionType === 'link' ||
            siblingData.actionType === 'button' ||
            siblingData.actionType === 'linkWithIcon' ||
            siblingData.actionType === 'buttonWithIcon'
          )
        },
      },
    },
    {
      name: 'actionLinkUrl',
      type: 'text',
      label: 'URL',
      required: true,
      admin: {
        condition: (_data, siblingData) =>
          value !== 'button' &&
          (siblingData.actionType === 'link' ||
            siblingData.actionType === 'linkWithIcon' ||
            siblingData.actionType === 'linkIconOnly'),
      },
    },
    {
      name: 'actionButtonUrl',
      type: 'text',
      label: 'URL',
      defaultValue: '',
      admin: {
        condition: (_data, siblingData) =>
          value !== 'link' &&
          (siblingData.actionType === 'button' ||
            siblingData.actionType === 'buttonWithIcon' ||
            siblingData.actionType === 'buttonIconOnly'),
      },
    },
    {
      name: 'actionOpenInNewTab',
      type: 'checkbox',
      label: 'Open in New Tab',
      defaultValue: false,
      admin: {
        condition: (_data, siblingData) =>
          siblingData.actionButtonUrl !== '' ||
          siblingData.actionType === 'link' ||
          siblingData.actionType === 'linkWithIcon' ||
          siblingData.actionType === 'linkIconOnly',
      },
    },
    {
      name: 'actionIconSvg',
      type: 'text',
      label: 'Icon',
      admin: {
        condition: (_data, siblingData) =>
          siblingData.actionType === 'linkWithIcon' ||
          siblingData.actionType === 'buttonWithIcon' ||
          siblingData.actionType === 'linkIconOnly' ||
          siblingData.actionType === 'buttonIconOnly',
        description: 'Copy and paste the icon svg code from: https://lucide.dev/icons',
      },
    },
    {
      name: 'actionIconPosition',
      type: 'select',
      label: 'Icon Position',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        condition: (_data, siblingData) => !!siblingData.actionIconSvg,
      },
      dbName: 'icon_position',
      custom: { postgres: { type: 'text' } },
    },
    {
      name: 'actionLinkColor',
      type: 'select',
      label: 'Color',
      defaultValue: 'foreground',
      options: linkColorOptions,
      admin: {
        condition: (_data, siblingData) =>
          value !== 'button' &&
          (siblingData.actionType === 'link' ||
            siblingData.actionType === 'linkWithIcon' ||
            siblingData.actionType === 'linkIconOnly'),
      },
      dbName: 'link_color',
      custom: { postgres: { type: 'text' } },
    },
    {
      name: 'actionButtonColor',
      type: 'select',
      label: 'Color',
      defaultValue: 'default',
      options: buttonColorOptions,
      admin: {
        condition: (_data, siblingData) =>
          value !== 'link' &&
          (siblingData.actionType === 'button' ||
            siblingData.actionType === 'buttonWithIcon' ||
            siblingData.actionType === 'buttonIconOnly'),
      },
      dbName: 'btn_color',
      custom: { postgres: { type: 'text' } },
    },
    {
      name: 'actionButtonVariant',
      type: 'select',
      label: 'Variant',
      defaultValue: 'light',
      options: buttonVariantOptions,
      admin: {
        condition: (_data, siblingData) =>
          value !== 'link' &&
          (siblingData.actionType === 'button' ||
            siblingData.actionType === 'buttonWithIcon' ||
            siblingData.actionType === 'buttonIconOnly'),
      },
      dbName: 'btn_variant',
      custom: { postgres: { type: 'text' } },
    },
  ]
}
