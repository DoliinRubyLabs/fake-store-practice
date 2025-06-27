import { type Block } from 'payload'

import { contentAlignmentField, textAlignmentField } from '../../shared/fields/alignment'

// text content block
export const textContentBlock: Block = {
  slug: 'textContent',
  labels: {
    singular: 'Text Content',
    plural: 'Text Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'images',
    },
    contentAlignmentField,
    textAlignmentField,
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
      name: 'formTitle',
      type: 'text',
      label: 'Form Title',
    },
    {
      name: 'formDescription',
      type: 'richText',
      label: 'Form Description',
    },
    {
      name: 'fields',
      type: 'array',
      label: 'Form Fields',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'fieldType',
          type: 'select',
          label: 'Field Type',
          required: true,
          defaultValue: 'textInput',
          options: [
            { label: 'Text Input', value: 'textInput' },
            { label: 'Email', value: 'emailInput' },
            { label: 'Phone', value: 'phoneInput' },
            { label: 'Textarea', value: 'textareaInput' },
            { label: 'Select', value: 'select' },
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Radio', value: 'radio' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Field Label',
        },
        {
          name: 'placeholder',
          type: 'text',
          label: 'Placeholder',
          admin: {
            condition: (_data, siblingData) => {
              return siblingData.fieldType !== 'radio' && siblingData.fieldType !== 'checkbox'
            },
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
            condition: (_data, siblingData) => {
              return (
                siblingData.fieldType === 'select' ||
                siblingData.fieldType === 'radio' ||
                siblingData.fieldType === 'checkbox'
              )
            },
          },
          fields: [
            {
              name: 'optionLabel',
              type: 'text',
              label: 'Option Label',
              required: true,
            },
            {
              name: 'optionValue',
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
      admin: {
        condition: (_data, siblingData) => siblingData.showSubmitButton,
      },
    },
  ],
}
