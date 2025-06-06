import { FC } from 'react'

import { HomeModule } from '@/app/(client)/module/home'

// interface
interface IProps {}

// component
const Page: FC<Readonly<IProps>> = async () => {
  // return
  return <HomeModule />
}

export default Page
