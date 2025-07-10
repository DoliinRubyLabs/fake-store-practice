import { FC } from 'react'

import { ComparisonsTableAComponent } from './elements/comparisons-table-a'
import { ComparisonsTableBComponent } from './elements/comparisons-table-b'

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
