import Link from 'next/link'

import { Button } from '@heroui/button'

import { ContainerComponent } from '@/app/(client)/shared/component/container'
import { LogoComponent } from '@/app/(client)/shared/component/logo'

import { getHomeService } from './home.service'

// interface
interface IProps {}

// component
const HomeModule: React.FC<IProps> = async () => {
  const thisService = await getHomeService()

  // return
  return (
    <ContainerComponent className={'items-center justify-center'}>
      <LogoComponent w={100} h={100} />

      {!thisService.user && <h1>Welcome to your new project.</h1>}

      {thisService.user && <h1>Welcome back, {thisService.user.email}</h1>}

      <Button as={Link} href={thisService.payloadConfig.routes.admin} rel={'noopener noreferrer'} target={'_blank'}>
        Go to admin panel
      </Button>
    </ContainerComponent>
  )
}

export default HomeModule
