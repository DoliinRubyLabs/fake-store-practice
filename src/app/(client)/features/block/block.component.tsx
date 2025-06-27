import { type FC, Fragment } from 'react'

import { usePagesQuery } from '@/app/entities/api/page/page.hook'

import { BlockTextContentComponent } from './elements/text-content'

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
          {block?.blockType === 'textContent' && (
            <BlockTextContentComponent
              key={`${block?.id}-${block?.blockType}-block`}
              data={block}
              isLoading={isLoading}
            />
          )}
        </Fragment>
      ))}
    </>
  )
}

export default BlockComponent
