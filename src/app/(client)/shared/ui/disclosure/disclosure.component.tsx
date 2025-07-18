import { Info } from 'lucide-react'
import { type FC } from 'react'

import { Button, useDisclosure } from '@heroui/react'

import { IDisclosure } from '@/app/(client)/entities/models'

import { InfoModalComponent } from './elements'

// interface
interface IProps {
  data?: IDisclosure
}

// component
const DisclosureComponent: FC<Readonly<IProps>> = (props) => {
  const { data } = props

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // return
  return (
    <>
      <Button
        onPress={onOpen}
        variant='light'
        disableAnimation
        disableRipple
        className='text-default-500 p-0 text-xs font-light underline underline-offset-4 data-[hover=true]:bg-transparent sm:text-sm'
      >
        <Info size={16} /> {data?.title ?? 'Additional info'}
      </Button>

      <InfoModalComponent isOpen={isOpen} onOpenChange={onOpenChange} title={data?.title} info={data?.info} />
    </>
  )
}

export default DisclosureComponent
