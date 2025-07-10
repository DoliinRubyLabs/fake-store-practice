import { cn } from '@heroui/react'

// interface
interface IProps {
  children: React.ReactNode
  isLabel?: boolean
  hasBackground?: boolean
}

// component
const TableTextComponent = (props: IProps) => {
  const { children, isLabel, hasBackground } = props

  // return
  return (
    <p
      className={cn('px-5 py-2 sm:py-1', {
        'bg-default-100': hasBackground,
        'font-semibold sm:hidden': isLabel,
      })}
    >
      {children}
    </p>
  )
}

export default TableTextComponent
