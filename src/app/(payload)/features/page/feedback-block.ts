import { type Block } from 'payload'

import { actionFields } from '../../shared/fields/action'
import { formFields } from '../../shared/fields/form-field'

// feedback block
export const FeedbackBlock: Block = {
  slug: 'feedbackBlock',
  labels: {
    singular: 'Feedback block',
    plural: 'Feedback blocks',
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
      type: 'richText',
      label: 'Subtitle',
      admin: {
        className: 'rich-text-container',
      },
    },
    {
      type: 'group',
      name: 'formField',
      fields: [...formFields('emailInput')],
    },
    {
      type: 'group',
      name: 'formAction',
      fields: [...actionFields('button')],
      admin: {
        condition: (_data, siblingData) => siblingData.showSubmitButton,
      },
    },
    {
      name: 'showSubmitButton',
      type: 'checkbox',
      label: 'Show Submit Button',
      defaultValue: true,
    },
  ],
}
