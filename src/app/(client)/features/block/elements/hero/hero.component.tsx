import { Info } from 'lucide-react'
import Image from 'next/image'
import { type FC } from 'react'

import { useDisclosure } from '@heroui/modal'
import { Button, cn } from '@heroui/react'

import { InfoModalComponent } from './element/info-modal'

// interface
interface IProps {}

// component
const HeroComponent: FC<Readonly<IProps>> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // return
  return (
    <>
      <section
        className={cn(
          'relative mx-auto flex w-full max-w-full flex-col-reverse overflow-hidden bg-white dark:bg-transparent md:flex-row md:items-end md:justify-between',
        )}
      >
        <div className='relative z-[1] w-full'>
          <div className='pointer-events-none absolute left-1/2 top-1/2 h-[25rem] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-success-50 from-secondary/20 to-transparent blur-2xl md:w-2/3 md:-translate-x-1/4' />

          <div className='relative grid gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8'>
            <div className='mx-auto max-w-md px-6 text-center sm:max-w-2xl md:flex md:items-center md:px-0 md:text-left'>
              <div className='grid justify-items-center gap-3 sm:gap-5 md:justify-items-start md:py-24'>
                <h1 className='xl:text-6xl text-3xl font-bold sm:text-6xl md:mt-6'>
                  Explore comparisons across various
                  <br />
                  <span className='bg-gradient-to-r from-primary-800 to-primary-400 bg-clip-text text-transparent'>
                    categories
                  </span>
                </h1>

                <p className='xl:text-xl text-center text-base sm:text-xl md:text-left md:text-lg'>
                  Discover smart shopping with us
                </p>

                <Button
                  onPress={onOpen}
                  variant='light'
                  disableRipple
                  color='primary'
                  className='hidden rounded-lg pl-0 data-[hover=true]:!bg-transparent data-[hover=true]:opacity-[0.8] md:flex'
                >
                  <Info /> Advertising Disclosure
                </Button>
              </div>
            </div>

            <div className='relative min-h-[300px]'>
              <Image
                src={'/images/og-image.png'}
                alt={'data.image.alt'}
                fill
                className='object-cover object-center'
                sizes='40vw'
              />
            </div>

            <Button onPress={onOpen} variant='light' color='primary' className='rounded-lg md:hidden'>
              <Info /> Advertising Disclosure
            </Button>
          </div>
        </div>
      </section>

      <InfoModalComponent isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

export default HeroComponent
