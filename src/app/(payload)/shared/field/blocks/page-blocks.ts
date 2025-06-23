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
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
      localized: true,
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

// title description image block
export const titleDescriptionImageBlock: Block = {
  slug: 'titleDescriptionImage',
  labels: {
    singular: 'Title Description Image',
    plural: 'Title Description Images',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      options: [
        { label: 'Image Left - Content Right', value: 'image-left' },
        { label: 'Image Right - Content Left', value: 'image-right' },
        { label: 'Image Top - Content Bottom', value: 'image-top' },
        { label: 'Image Bottom - Content Top', value: 'image-bottom' },
      ],
      defaultValue: 'image-left',
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Content Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
    },
  ],
}

// image block
export const imageBlock: Block = {
  slug: 'imageBlock',
  labels: {
    singular: 'Image Block',
    plural: 'Image Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      localized: true,
    },
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      localized: true,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Image Size',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Full Width', value: 'full' },
      ],
      defaultValue: 'medium',
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Image Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
    },
  ],
}

// image gallery block
export const imageGalleryBlock: Block = {
  slug: 'imageGallery',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Gallery Title',
      localized: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
          localized: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          localized: true,
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Gallery Layout',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Masonry', value: 'masonry' },
        { label: 'Carousel', value: 'carousel' },
      ],
      defaultValue: 'grid',
    },
    {
      name: 'columns',
      type: 'select',
      label: 'Columns',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
      defaultValue: '3',
      admin: {
        condition: (data, siblingData) => siblingData.layout === 'grid' || siblingData.layout === 'masonry',
      },
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
      required: true,
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
          required: true,
          localized: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: 'Placeholder',
          localized: true,
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
            condition: (data, siblingData) =>
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
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      defaultValue: 'Submit',
      localized: true,
    },
    {
      name: 'successMessage',
      type: 'textarea',
      label: 'Success Message',
      defaultValue: 'Thank you for your submission!',
      localized: true,
    },
    {
      name: 'emailNotification',
      type: 'group',
      label: 'Email Notification',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Send Email Notification',
          defaultValue: false,
        },
        {
          name: 'recipient',
          type: 'email',
          label: 'Recipient Email',
          admin: {
            condition: (data, siblingData) => siblingData.enabled,
          },
        },
        {
          name: 'subject',
          type: 'text',
          label: 'Email Subject',
          admin: {
            condition: (data, siblingData) => siblingData.enabled,
          },
        },
      ],
    },
  ],
}
