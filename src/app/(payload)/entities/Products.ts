import type { CollectionConfig } from 'payload'

import {
  CategoriesBlock,
  FeedbackBlock,
  HeroBlock,
  ImageScrollerBlock,
  ListBlock,
  SectionBlock,
  TabsBlock,
} from '../features/page'
import { TemplateBlock } from '../features/template/template-block'
import { seoFields } from '../shared/fields/seo'
import { slugField } from '../shared/fields/slug/slug-field'
import { versionField } from '../shared/fields/version'
import { authenticated, authenticatedOrPublished } from '../shared/services'

// products
export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: [
      'image',
      'shortName',
      'slug',
      '_status',
      'categories',
      'estimatedPrice',
      'isBestChoice',
      'isValueForMoney',
      'createdAt',
    ],
    useAsTitle: 'shortName',
    group: 'Content',
  },
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  fields: [
    ...slugField('shortName'),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Product',
          fields: [
            {
              type: 'text',
              name: 'image',
              label: 'Image URL',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'text',
                  name: 'shortName',
                  label: 'Short Name',
                  required: true,
                  admin: {
                    width: '20%',
                  },
                },

                {
                  type: 'text',
                  name: 'fullName',
                  label: 'Full Name',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'number',
                  name: 'estimatedPrice',
                  label: 'Estimated Price',
                  required: true,
                  admin: {
                    step: 1,
                    width: '20%',
                  },
                },
                {
                  type: 'relationship',
                  name: 'categories',
                  relationTo: 'categories',
                  label: 'Category',
                  hasMany: false,
                  required: true,
                },
              ],
            },
            {
              type: 'text',
              name: 'description',
              label: 'Description',
              required: false,
            },
            {
              type: 'text',
              name: 'productLink',
              label: 'Product Link',
              required: false,
            },
            {
              type: 'array',
              name: 'details',
              label: 'Details',
              admin: {
                condition: (_, siblingData) => Boolean(siblingData?.hasDetails),
              },
              fields: [
                {
                  type: 'text',
                  name: 'title',
                  label: 'Title',
                  required: false,
                },
                {
                  type: 'array',
                  name: 'rows',
                  label: 'Rows',
                  admin: {
                    className: 'group-last-container',
                  },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          type: 'text',
                          name: 'iconSvg',
                          label: 'Icon SVG',
                          required: false,
                          admin: {
                            width: '50%',
                            description: 'Copy and paste the icon svg code from: https://lucide.dev/icons',
                          },
                        },
                        {
                          type: 'text',
                          name: 'label',
                          label: 'Label',
                          required: false,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Page',
          fields: [
            {
              type: 'blocks',
              name: 'blocks',
              label: 'Blocks',
              labels: {
                singular: 'Block',
                plural: 'Blocks',
              },
              blocks: [
                TemplateBlock,
                HeroBlock,
                ImageScrollerBlock,
                SectionBlock,
                ListBlock,
                TabsBlock,
                CategoriesBlock,
                FeedbackBlock,
              ],
              minRows: 1,
              maxRows: 10,
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: seoFields,
        },
      ],
    },
  ],
  versions: versionField,
}
