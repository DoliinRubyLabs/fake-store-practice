import { type FC } from 'react'

import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { type TRichText } from '@/app/(client)/entities/models'

// interface
interface IProps {
  isOpen: boolean
  title?: string
  info?: TRichText
  onOpenChange: (open: boolean) => void
}

// component
const InfoModalComponent: FC<Readonly<IProps>> = (props) => {
  const { isOpen, onOpenChange, title, info } = props

  // return
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
      <ModalContent>
        <ModalHeader className='flex flex-col'>{title}</ModalHeader>

        <ModalBody className='pb-6 pt-0'>{info && <RichText data={info} />}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default InfoModalComponent
