import { type FC, ReactNode } from 'react'

// interface
interface IProps {
  children: ReactNode
}

// component
const MidSectionComponent: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <div className='border-primary-200 bg-primary-50 text-default-700 flex h-14 items-center justify-center gap-1 rounded-2xl border-1 p-4 px-6 py-1 text-sm font-medium'>
      {children}
    </div>
  )
}

export default MidSectionComponent
