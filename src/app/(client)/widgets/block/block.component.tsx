'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { type FC, Fragment } from 'react'

import { useQuery } from '@tanstack/react-query'

import { pagesQueryOptions } from '@/client/entities/api/page'
import { EPageKey } from '@/client/entities/models'

const ArticleBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.ArticleBlockComponent))
const CategoriesBlockComponent = dynamic(() =>
  import('@/client/features/block').then((m) => m.CategoriesBlockComponent),
)
const ComparisonsBlockComponent = dynamic(() =>
  import('@/client/features/block').then((m) => m.ComparisonsBlockComponent),
)
const FeedbackBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.FeedbackBlockComponent))
const HeroMainBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.HeroMainBlockComponent))
const ImageScrollerBlockComponent = dynamic(() =>
  import('@/client/features/block').then((m) => m.ImageScrollerBlockComponent),
)
const ListBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.ListBlockComponent))
const RichTextBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.RichTextBlockComponent))
const TabsBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.TabsBlockComponent))
const TitleBlockComponent = dynamic(() => import('@/client/features/block').then((m) => m.TitleBlockComponent))
const TitleComparisonBlockComponent = dynamic(() =>
  import('@/client/features/block').then((m) => m.TitleComparisonBlockComponent),
)

// interface
interface IProps {
  pageKey: EPageKey
}

// component
const BlockComponent: FC<Readonly<IProps>> = (props) => {
  const { pageKey } = props

  const locale = useLocale()
  const { category_slug } = useParams()

  const { data, isLoading } = useQuery(pagesQueryOptions({ pageKey, locale, categorySlug: category_slug as string }))

  // return
  return (
    <>
      {data?.blocks?.map((block) => (
        <Fragment key={`${block?.id}-block`}>
          {block?.blockType === 'heroMainBlock' && (
            <HeroMainBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'titleBlock' && (
            <TitleBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'comparisonsTitleBlock' && (
            <TitleComparisonBlockComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
            />
          )}

          {block?.blockType === 'imageScrollerBlock' && (
            <ImageScrollerBlockComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
            />
          )}

          {block?.blockType === 'listBlock' && (
            <ListBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'tabsBlock' && (
            <TabsBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'richTextBlock' && (
            <RichTextBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'feedbackBlock' && (
            <FeedbackBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'categoriesBlock' && (
            <CategoriesBlockComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
            />
          )}

          {block?.blockType === 'articleBlock' && (
            <ArticleBlockComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
              // !ISSUE: fix this - we put only data no specific props
              menu={data?.blocks?.map((item) => ({ id: item?.id, title: (item as { title?: string }).title ?? '' }))}
            />
          )}

          {block?.blockType === 'productsBlock' && (
            <ComparisonsBlockComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
            />
          )}

          {block?.blockType === 'templateBlock' &&
            block?.template?.blocks?.map((template) => (
              <Fragment key={`${block?.id}-${template?.id}-${template?.blockType}-block`}>
                {template?.blockType === 'heroMainBlock' && (
                  <HeroMainBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'imageScrollerBlock' && (
                  <ImageScrollerBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'listBlock' && (
                  <ListBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'tabsBlock' && (
                  <TabsBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'richTextBlock' && (
                  <RichTextBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'feedbackBlock' && (
                  <FeedbackBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'categoriesBlock' && (
                  <CategoriesBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                  />
                )}

                {template?.blockType === 'articleBlock' && (
                  <ArticleBlockComponent
                    key={`${template?.id}-${template?.blockType}-block`}
                    data={template}
                    isLoading={isLoading}
                    // !ISSUE: fix this - we put only data no specific props
                    menu={block?.template?.blocks?.map((item) => ({
                      id: item?.id,
                      title: (item as { title?: string }).title ?? '',
                    }))}
                  />
                )}
              </Fragment>
            ))}
        </Fragment>
      ))}
    </>
  )
}

export default BlockComponent
