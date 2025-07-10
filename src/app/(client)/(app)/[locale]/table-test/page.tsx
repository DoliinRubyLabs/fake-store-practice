import { type FC } from 'react'

import { ComparisonsTableComponent } from '@/app/(client)/features/block/comparisons-table'
import { ContainerComponent } from '@/client/shared/ui/container'

// temporary file for dev purpose
const Page: FC = () => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-[72px]'>
      <ComparisonsTableComponent variant={'a'} />

      <ComparisonsTableComponent variant={'b'} />
    </ContainerComponent>
  )
}

export default Page
