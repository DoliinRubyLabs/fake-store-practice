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

// video block
export const videoBlock: Block = {
  slug: 'videoBlock',
  labels: {
    singular: 'Video Block',
    plural: 'Video Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Video Title',
      localized: true,
    },
    {
      name: 'videoType',
      type: 'select',
      label: 'Video Type',
      required: true,
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Vimeo', value: 'vimeo' },
        { label: 'Upload', value: 'upload' },
        { label: 'URL', value: 'url' },
      ],
      defaultValue: 'youtube',
    },
    {
      name: 'videoUrl',
      type: 'text',
      label: 'Video URL',
      admin: {
        condition: (data, siblingData) =>
          siblingData.videoType === 'youtube' || siblingData.videoType === 'vimeo' || siblingData.videoType === 'url',
      },
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Video File',
      admin: {
        condition: (data, siblingData) => siblingData.videoType === 'upload',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Video Thumbnail',
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      label: 'Autoplay',
      defaultValue: false,
    },
    {
      name: 'controls',
      type: 'checkbox',
      label: 'Show Controls',
      defaultValue: true,
    },
  ],
}

// button block
export const buttonBlock: Block = {
  slug: 'buttonBlock',
  labels: {
    singular: 'Button Block',
    plural: 'Button Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      localized: true,
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          required: true,
          localized: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
          ],
          defaultValue: 'primary',
        },
        {
          name: 'size',
          type: 'select',
          label: 'Button Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'medium',
        },
        {
          name: 'newWindow',
          type: 'checkbox',
          label: 'Open in New Window',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      label: 'Alignment',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
    },
  ],
}

// cards block
export const cardsBlock: Block = {
  slug: 'cardsBlock',
  labels: {
    singular: 'Cards Block',
    plural: 'Cards Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Section Subtitle',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      localized: true,
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
      defaultValue: 'center',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Icon',
          required: true,
        },
        {
          name: 'iconAlt',
          type: 'text',
          label: 'Icon Alt Text',
          localized: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
          required: true,
          localized: true,
        },
        {
          name: 'hasButton',
          type: 'checkbox',
          label: 'Add Button',
          defaultValue: false,
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          localized: true,
          admin: {
            condition: (data, siblingData) => siblingData.hasButton,
          },
        },
        {
          name: 'buttonUrl',
          type: 'text',
          label: 'Button URL',
          admin: {
            condition: (data, siblingData) => siblingData.hasButton,
          },
        },
        {
          name: 'buttonStyle',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
          ],
          defaultValue: 'primary',
          admin: {
            condition: (data, siblingData) => siblingData.hasButton,
          },
        },
        {
          name: 'newWindow',
          type: 'checkbox',
          label: 'Open in New Window',
          defaultValue: false,
          admin: {
            condition: (data, siblingData) => siblingData.hasButton,
          },
        },
      ],
    },
  ],
}

// faq block
export const faqBlock: Block = {
  slug: 'faqBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Section Subtitle',
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      localized: true,
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ Items',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
          localized: true,
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Answer',
          required: true,
          localized: true,
        },
        {
          name: 'isExpanded',
          type: 'checkbox',
          label: 'Expanded by Default',
          defaultValue: false,
        },
      ],
    },
  ],
}
