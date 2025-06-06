import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { FC } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/component/container'
import config from '@/payload.config'

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = async () => {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // return
  return (
    <ContainerComponent>
      <picture>
        <source srcSet='https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg' />
        <Image
          src='https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg'
          alt='Payload Logo'
          height={65}
          width={65}
        />
      </picture>

      {!user && <h1>Welcome to your new project.</h1>}

      {user && <h1>Welcome back, {user.email}</h1>}

      <div className='links'>
        <a className='admin' href={payloadConfig.routes.admin} rel='noopener noreferrer' target='_blank'>
          Go to admin panel
        </a>
      </div>
    </ContainerComponent>
  )
}

export default Page
