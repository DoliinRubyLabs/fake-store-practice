import { Coins, Gift } from 'lucide-react'
import Image from 'next/image'
import { type FC } from 'react'

import { Tab, Tabs } from '@heroui/tabs'

// interface
interface IProps {}

// component
const AboutInfoComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <section>
      <div className='px-4 md:px-6'>
        <h2 className='mb-2 flex items-center gap-2 text-3xl font-bold text-primary-900 md:text-4xl'>Our mission</h2>

        <p className='xl:text-xl text-default-500 sm:text-xl md:text-lg'>
          Our Mission Is To Make It Easy For You To Pick The Best Product And Be Confident In Your Decision
        </p>
      </div>

      <div className='flex flex-col gap-0 rounded-lg p-4 md:flex-row md:gap-6 md:p-6'>
        <div className='flex min-w-0 flex-1 flex-col gap-4'>
          <Tabs aria-label='Options' color='primary' variant='bordered' radius='sm'>
            <Tab
              key='photos'
              title={
                <div className='flex items-center space-x-2'>
                  <Gift />

                  <span>About us</span>
                </div>
              }
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </div>
            </Tab>

            <Tab
              key='videos'
              title={
                <div className='flex items-center space-x-2'>
                  <Coins />

                  <span>Who we are?</span>
                </div>
              }
            >
              <div>
                Bonuh nihil dolor adipisci eaque error aliquam nobis voluptatibus accusamus ad dicta incidunt? Id,
                officia?
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className='mt-6 flex flex-shrink-0 items-center justify-center md:ml-6 md:mt-0'>
          <div className='relative h-[150px] w-[220px] overflow-hidden rounded-xl bg-default-100 md:h-[180px] md:w-[260px] lg:h-[200px] lg:w-[320px]'>
            <Image
              src='/images/og-image.png'
              alt='About us'
              fill
              sizes='(max-width: 768px) 75vw, 33vw'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutInfoComponent
