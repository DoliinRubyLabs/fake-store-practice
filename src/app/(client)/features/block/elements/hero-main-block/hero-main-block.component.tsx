import { Info } from 'lucide-react'
import Image from 'next/image'
import { type FC } from 'react'

import { Button } from '@heroui/button'
import { useDisclosure } from '@heroui/modal'
import { cn } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'

import { ActionComponent } from '@/app/(client)/shared/ui/action'
import { type IHeroMainBlock } from '@/client/entities/models/page.model'

import { InfoModalComponent } from './element/info-modal'

// interface
interface IProps {
  data: IHeroMainBlock
  isLoading?: boolean
}

// component
const HeroMainBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
      >
        <div className='relative z-[1] w-full'>
          <div className='relative grid gap-4 md:grid-cols-[auto_1fr] md:items-center md:gap-8'>
            <div className='mx-auto max-w-md px-8 text-center sm:max-w-2xl md:flex md:items-center md:px-0 md:text-left'>
              <div className='grid justify-items-center gap-3 py-4 sm:gap-5 sm:py-12 md:justify-items-start md:py-28'>
                <h1
                  className='xl:text-6xl text-3xl font-bold sm:text-6xl'
                  dangerouslySetInnerHTML={{ __html: data?.title }}
                />

                {data?.subtitle && (
                  <p
                    className='xl:text-xl text-center text-base text-foreground/70 sm:text-xl md:text-left md:text-lg'
                    dangerouslySetInnerHTML={{ __html: data?.subtitle }}
                  />
                )}

                {data?.action && <ActionComponent {...data?.action} className='mt-4 min-w-[200px] sm:mt-0' size='lg' />}

                <Button
                  onPress={onOpen}
                  variant='light'
                  color='primary'
                  className='mt-4 hidden p-0 data-[hover=true]:bg-transparent data-[hover=true]:opacity-[0.8] md:flex'
                >
                  <Info /> {data?.disclosure.title}
                </Button>
              </div>
            </div>

            <div className='relative min-h-[240px] md:min-h-[320px]'>
              <Image
                src={data?.image.url}
                alt={data?.image.alt}
                fill
                sizes='(max-width: 768px) 80vw, 40vw'
                className='aspect-square rounded-lg object-contain object-center'
              />
            </div>

            <Button onPress={onOpen} variant='light' color='primary' className='md:hidden'>
              <Info /> {data?.disclosure.title}
            </Button>
          </div>
        </div>
      </Skeleton>

      <InfoModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title={data?.disclosure.title}
        info={data?.disclosure.info}
      />
    </>
  )
}

export default HeroMainBlockComponent
