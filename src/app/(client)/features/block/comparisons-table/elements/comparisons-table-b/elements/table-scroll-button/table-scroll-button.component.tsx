import { ChevronLeft } from 'lucide-react'

import { Button, cn } from '@heroui/react'

// interface
interface IProps {
  isRight?: boolean
  onClick: () => void
}

// component
const TableScrollButtonComponent = (props: Readonly<IProps>) => {
  const { isRight, onClick } = props

  // return
  return (
    <Button
      onPress={onClick}
      radius='full'
      isIconOnly
      className={cn(
        'pointer-events-auto border bg-white transition-all duration-300 hover:bg-default-50 hover:opacity-50',
        {
          '[&_svg]:rotate-180': isRight,
        },
      )}
    >
      <ChevronLeft />
    </Button>
  )
}
export default TableScrollButtonComponent
