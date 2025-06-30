import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'

import { Divider } from '@heroui/divider'
import { Skeleton } from '@heroui/skeleton'

import { IListBlock } from '@/app/(client)/entities/models/page.model'
import { ActionComponent } from '@/client/shared/ui/action'

// interface
interface IProps {
  data: IListBlock
  isLoading?: boolean
}

// component
const ListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  const topComparisons = data.list?.filter((item) => item.asTop)
  const additionalComparisons = data.list?.filter((item) => !item.asTop)

  // return
  return (
    <Skeleton
      isLoaded={!isLoading}
      as='section'
      classNames={{
        content: 'rounded-3xl bg-primary-50/50 px-6 py-10 md:p-8',
      }}
    >
      <h2 className='mb-1 flex items-center gap-2 text-3xl font-bold text-primary-900 md:text-4xl'>{data.title}</h2>

      <p className='xl:text-xl mb-6 text-foreground/70 sm:text-xl md:text-lg'>{data.subtitle}</p>

      {topComparisons?.map((item, index) => (
        <div key={`${item.title}-${index}-top`} className='mb-6 flex flex-col gap-6 md:flex-row'>
          <div className='h-[180px] w-full flex-shrink-0 overflow-hidden rounded-xl bg-default-100 md:w-[320px]'>
            <Image
              src={item.image?.url}
              alt={item.image?.alt}
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex flex-1 flex-col justify-center'>
            <h3 className='mb-2 text-2xl font-bold'>{item.title}</h3>

            <div className='mb-2 text-base text-foreground/70 md:text-lg'>
              <p className='mb-1 text-sm text-foreground/70 md:text-base'>
                {item.description}{' '}
                <Link href={item.url} className='ml-1 text-primary-600 underline'>
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      ))}

      <Divider className='my-4' />

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {additionalComparisons?.map((item, index) => (
          <div key={`${item.title}-${index}-additional`} className='flex items-start gap-4'>
            <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-default-100'>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={80}
                height={80}
                className='h-full w-full object-cover'
              />
            </div>

            <div className='flex-1'>
              <h4 className='mb-1 text-lg font-bold'>{item.title}</h4>

              <p className='mb-1 text-sm text-foreground/70 md:text-base'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center'>
        <ActionComponent {...data.action} />
      </div>
    </Skeleton>
  )
}

export default ListBlockComponent
