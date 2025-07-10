import { type FC } from 'react'

import { Skeleton } from '@heroui/skeleton'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { IRichTextBlock } from '@/client/entities/models/block'

// interface
interface IProps {
  data: IRichTextBlock
  isLoading?: boolean
}

// component
const RichTextBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading} as='section' id={data?.id}>
      <RichText data={data.content} />
    </Skeleton>
  )
}

export default RichTextBlockComponent
