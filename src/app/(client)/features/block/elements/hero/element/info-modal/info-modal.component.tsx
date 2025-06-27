import { type FC } from 'react'

import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/modal'

// interface
interface IProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

// component
const InfoModalComponent: FC<Readonly<IProps>> = (props) => {
  const { isOpen, onOpenChange } = props

  // return
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Advertising Disclosure</ModalHeader>

            <ModalBody>
              <p>
                Our rankings are cleverly generated from the algorithmic analysis of thousands of customer reviews about
                products, brands, merchant’s customer service levels, popularity trends, and more. The rankings reflect
                our opinion and should be a good starting point for shopping. By purchasing the products we rank, you’ll
                get the lowest price we found while we may receive a commission at no cost to you, which will help us
                continue to provide you with value.
              </p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default InfoModalComponent
