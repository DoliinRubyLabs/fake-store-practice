import Image from 'next/image'
import { type FC } from 'react'

import { cn } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'

import { type IHeroMainBlock } from '@/client/entities/models/block'
import { ActionComponent } from '@/client/shared/ui/action'

// interface
interface IProps {
  data: IHeroMainBlock
  isLoading?: boolean
}

// component
const HeroMainBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  // return
  return (
    <>
      <Skeleton
        isLoaded={!isLoading}
        classNames={{
          content: cn(
            'relative mx-auto flex w-full max-w-full flex-col-reverse md:flex-row md:items-end md:justify-between',
          ),
        }}
        id={data?.id}
      >
        <div className='relative z-[1] w-full'>
          <div className='relative grid gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8'>
            <div className='relative mx-auto max-w-md text-center sm:max-w-2xl sm:px-8 md:flex md:items-center md:px-0 md:text-left'>
              <div className='relative z-20 grid justify-items-center gap-6 py-4 pb-0 sm:gap-5 sm:py-8 md:justify-items-start md:py-20 md:pb-0'>
                <h1 className='xl:text-6xl text-4xl font-bold sm:text-6xl'>{data?.title}</h1>

                {data?.subtitle && (
                  <p className='xl:text-xl text-center text-base text-foreground/70 sm:text-xl md:text-left md:text-lg'>
                    {data?.subtitle}
                  </p>
                )}

                {data?.action && (
                  <ActionComponent
                    {...data?.action}
                    className='mt-6 w-full min-w-[200px] max-w-[300px] sm:mt-0 sm:w-auto'
                    size='lg'
                    radius='sm'
                  />
                )}
              </div>
            </div>

            <div className='pointer-events-none absolute left-1/2 top-[60%] z-10 h-[25rem] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-success/20 to-transparent blur-2xl md:hidden md:w-2/3 md:-translate-x-1/4' />

            <div className='relative hidden min-h-[240px] md:block md:min-h-[320px]'>
              <Image
                src={data?.image.url}
                alt={data?.image.alt}
                fill
                priority={true}
                sizes='30vw'
                className='aspect-square rounded-lg object-contain object-center'
              />
            </div>
          </div>
        </div>
      </Skeleton>
    </>
  )
}

export default HeroMainBlockComponent
