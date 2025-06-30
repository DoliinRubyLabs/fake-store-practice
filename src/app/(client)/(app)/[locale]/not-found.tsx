import type { NextPage } from 'next'
import Link from 'next/link'

import { ContainerComponent } from '@/client/shared/ui/container'

// page
const NotFound: NextPage = () => {
  // return
  return (
    <ContainerComponent>
      <div className='flex h-screen flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl font-bold'>404</h1>
        <p className='text-lg'>Page not found</p>

        <Link href={'/'} className={'text-blue-500 underline'}>
          Go to home
        </Link>
      </div>
    </ContainerComponent>
  )
}

export default NotFound
