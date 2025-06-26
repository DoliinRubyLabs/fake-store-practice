import { Field } from 'payload'

// content alignment field
export const contentAlignmentField: Field = {
  name: 'contentAlignment',
  type: 'select',
  label: 'Content Alignment',
  options: [
    { label: 'Content Left', value: 'contentLeft' },
    { label: 'Content Center', value: 'contentCenter' },
    { label: 'Content Right', value: 'contentRight' },
  ],
  defaultValue: 'contentLeft',
  required: true,
  dbName: 'content_alignment',
  custom: { postgres: { type: 'text' } },
}

// text alignment field
export const textAlignmentField: Field = {
  name: 'textAlignment',
  type: 'select',
  label: 'Text Alignment',
  options: [
    { label: 'Text Left', value: 'textLeft' },
    { label: 'Text Center', value: 'textCenter' },
    { label: 'Text Right', value: 'textRight' },
  ],
  defaultValue: 'textLeft',
  required: true,
  dbName: 'text_alignment',
  custom: { postgres: { type: 'text' } },
}
