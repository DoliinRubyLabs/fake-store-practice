import { type FC } from 'react'

import { ITextContentSection } from '@/app/entities/models/page.model'

import { BlockTextContentComponent } from './elements/title-description-image-block'

// interface
interface IProps {
  isLoading?: boolean
  blockType: 'textContent'
  data: ITextContentSection
}

// component
const BlockComponent: FC<Readonly<IProps>> = (props) => {
  const { blockType, data, isLoading = false } = props

  // return
  return (
    <>
      {blockType === 'textContent' && (
        <BlockTextContentComponent data={data as ITextContentSection} isLoading={isLoading} />
      )}
    </>
  )
}

export default BlockComponent
