import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField } from '@payloadcms/plugin-seo/fields'

// seo field
export const seoField = () => {
  return [
    OverviewField({
      titlePath: 'meta.title',
      descriptionPath: 'meta.description',
      imagePath: 'meta.image',
    }),
    MetaTitleField({
      hasGenerateFn: true,
    }),
    MetaDescriptionField({}),
    MetaImageField({
      relationTo: 'images',
    }),
  ]
}
