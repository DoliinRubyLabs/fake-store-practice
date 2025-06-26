import { type Block } from 'payload'

// text content block
export const textContentBlock: Block = {
  slug: 'textContent',
  labels: {
    singular: 'Text Content',
    plural: 'Text Contents',
  },
  fields: [
    {
      name: 'underTitle',
      type: 'text',
      label: 'Under Title',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'images',
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Text Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
    },
  ],
}

// form builder block
export const formBuilderBlock: Block = {
  slug: 'formBuilder',
  labels: {
    singular: 'Form Builder',
    plural: 'Form Builders',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Form Description',
      localized: true,
    },
    {
      name: 'fields',
      type: 'array',
      label: 'Form Fields',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'fieldType',
          type: 'select',
          label: 'Field Type',
          required: true,
          options: [
            { label: 'Text Input', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Radio', value: 'radio' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Field Label',
          localized: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: 'Placeholder',
          localized: true,
          admin: {
            condition: (_data, siblingData) =>
              siblingData.fieldType !== 'radio' && siblingData.fieldType !== 'checkbox',
          },
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Required Field',
          defaultValue: false,
        },
        {
          name: 'options',
          type: 'array',
          label: 'Options',
          admin: {
            condition: (_data, siblingData) =>
              siblingData.fieldType === 'select' ||
              siblingData.fieldType === 'radio' ||
              siblingData.fieldType === 'checkbox',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Option Label',
              required: true,
              localized: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Option Value',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'showSubmitButton',
      type: 'checkbox',
      label: 'Show Submit Button',
      defaultValue: true,
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      defaultValue: 'Submit',
      localized: true,
      admin: {
        condition: (_data, siblingData) => siblingData.showSubmitButton,
      },
    },
  ],
}
