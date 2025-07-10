import { type FC } from 'react'

import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { type TRichText } from '@/app/(client)/entities/models'

// interface
interface IProps {
  isOpen: boolean
  title: string
  description?: TRichText
  onOpenChange: (open: boolean) => void
}

// component
const RankInfoModalComponent: FC<Readonly<IProps>> = (props) => {
  const { isOpen, onOpenChange, title, description } = props

  // return
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
      <ModalContent>
        <ModalHeader className='flex flex-col'>{title}</ModalHeader>

        <ModalBody className='pb-6 pt-0'>{description && <RichText data={description} />}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default RankInfoModalComponent
