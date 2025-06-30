'use client'

import { type FC, Fragment } from 'react'

import { usePagesQuery } from '@/client/entities/api/page/page.hook'

import { FeedbackBlockComponent } from './elements/feedback-block'
import { HeroMainBlockComponent } from './elements/hero-main-block'
import { ListBlockComponent } from './elements/list-block'
import { TabsBlockComponent } from './elements/tabs-block'

// interface
interface IProps {}

// component
const BlockComponent: FC<Readonly<IProps>> = () => {
  const { data, isLoading } = usePagesQuery()

  // return
  return (
    <>
      {data?.blocks?.map((block) => (
        <Fragment key={`${block?.id}-block`}>
          {block?.blockType === 'heroMainBlock' && (
            <HeroMainBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'listBlock' && (
            <ListBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'tabsBlock' && (
            <TabsBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}

          {block?.blockType === 'feedbackBlock' && (
            <FeedbackBlockComponent key={`${block?.id}-${block?.blockType}-block`} data={block} isLoading={isLoading} />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default BlockComponent
