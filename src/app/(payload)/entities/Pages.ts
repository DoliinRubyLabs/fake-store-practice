import type { CollectionConfig } from 'payload'

import {
  ArticleBlock,
  CategoriesBlock,
  FeedbackBlock,
  HeroMainBlock,
  ImageScrollerBlock,
  ListBlock,
  RichTextBlock,
  TabsBlock,
  TitleBlock,
} from '../features/page'
import { TemplateBlock } from '../features/template'
import { seoFields } from '../shared/fields/seo'
import { slugField } from '../shared/fields/slug/slug-field'
import { versionField } from '../shared/fields/version'
import { authenticated, authenticatedOrPublished } from '../shared/services'

// pages
export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'slug', '_status', 'blocksInfo', 'seoInfo', 'createdAt'],
    useAsTitle: 'name',
    group: 'Content',
    livePreview: {
      url: ({ locale }) => `/${locale.code}`,
    },
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      defaultValue: 'Home Page',
    },
    ...slugField(),
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              label: 'Blocks',
              labels: {
                singular: 'Block',
                plural: 'Blocks',
              },
              blocks: [
                TemplateBlock,
                HeroMainBlock,
                TitleBlock,
                ImageScrollerBlock,
                ListBlock,
                TabsBlock,
                RichTextBlock,
                CategoriesBlock,
                ArticleBlock,
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
    {
      name: 'blocksInfo',
      type: 'text',
      access: { read: ({ req }) => Boolean(req.user) },
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (!data?.blocks) return 'No blocks'

            const blocksCount = data.blocks.length
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const blockTypes = data.blocks.map((block: any) => block.blockType).join(', ')

            return `${blocksCount} blocks: ${blockTypes || 'No blocks'}`
          },
        ],
      },
    },
    {
      name: 'seoInfo',
      type: 'text',
      access: { read: ({ req }) => Boolean(req.user) },
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            const meta = data?.meta
            if (!meta) return 'No SEO data'

            const hasTitle = Boolean(meta.title)
            const hasDescription = Boolean(meta.description)
            const hasImage = Boolean(meta.image)

            const completedFields = [hasTitle, hasDescription, hasImage].filter(Boolean).length
            return `SEO: ${completedFields}/3 fields completed`
          },
        ],
      },
    },
  ],
  versions: versionField,
}
