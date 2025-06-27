'use client'

import { type FC } from 'react'

import { AboutInfoComponent } from '@/app/features/block/elements/about-info'
import { ContactFormComponent } from '@/app/features/block/elements/contact-form'
import { HeroComponent } from '@/app/features/block/elements/hero'
import { TopComparisonsComponent } from '@/app/features/block/elements/top-comparisons'
import { ContainerComponent } from '@/app/shared/ui/container'

// interface
interface IProps {}

// component
const HomeModule: FC<IProps> = () => {
  // return
  return (
    <ContainerComponent className='w-full space-y-12 pb-44'>
      <HeroComponent />

      <TopComparisonsComponent />

      <AboutInfoComponent />

      <ContactFormComponent />

      {/* <BlockComponent /> */}
    </ContainerComponent>
  )
}

export default HomeModule
