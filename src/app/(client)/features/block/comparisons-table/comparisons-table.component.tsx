import { FC } from 'react'

import { ComparisonsTableAComponent, ComparisonsTableBComponent } from './elements'

// interface
interface IComparisonsTableProps {
  variant: 'a' | 'b'
}

// component
const ComparisonsTableComponent: FC<Readonly<IComparisonsTableProps>> = (props) => {
  const { variant } = props

  // return
  return (
    <>
      {variant === 'a' && <ComparisonsTableAComponent key={'a'} />}

      {variant === 'b' && <ComparisonsTableBComponent key={'b'} />}
    </>
  )
}

export default ComparisonsTableComponent
