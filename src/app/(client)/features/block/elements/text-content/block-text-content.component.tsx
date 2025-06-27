import Image from 'next/image'
import { type FC } from 'react'

import { cn } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { ITextContentSection } from '@/app/entities/models/page.model'

// interface
interface IProps {
  isLoading?: boolean
  data: ITextContentSection
}

// component
const BlockTextContentComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading = false } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading} className='rounded-2xl'>
      <section
        className={cn('relative flex min-h-[70vh] w-full overflow-hidden', {
          'justify-center': data.contentAlignment === 'contentCenter',
          'justify-start': data.contentAlignment === 'contentLeft',
          'justify-end': data.contentAlignment === 'contentRight',
        })}
      >
        {data.image?.url && (
          <div className='absolute inset-0 z-0 overflow-hidden rounded-2xl'>
            <Image src={data.image.url} alt={data.image.alt} fill className='object-cover object-center' sizes='80vw' />

            <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60' />

            <div className='absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10' />
          </div>
        )}

        <div className='relative z-10 flex items-center'>
          <div className='container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
            <div
              className={cn('space-y-8', {
                'text-center': data?.textAlignment === 'textCenter',
                'text-right': data?.textAlignment === 'textRight',
                'text-left': data?.textAlignment === 'textLeft' || !data?.textAlignment,
              })}
            >
              {data?.subtitle && (
                <div
                  className={cn('flex items-center gap-3', {
                    'justify-center': data?.textAlignment === 'textCenter',
                    'justify-end': data?.textAlignment === 'textRight',
                    'justify-start': data?.textAlignment === 'textLeft' || !data?.textAlignment,
                  })}
                >
                  <div className='h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent' />

                  <p className='text-sm font-medium uppercase tracking-wider text-white/80 sm:text-base'>
                    {data.subtitle}
                  </p>

                  <div className='h-px w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent' />
                </div>
              )}

              <div className='space-y-4'>
                <h1 className='xl:text-7xl text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl'>
                  {data.title}
                </h1>

                <div
                  className={cn('flex', {
                    'justify-center': data?.textAlignment === 'textCenter',
                    'justify-end': data?.textAlignment === 'textRight',
                    'justify-start': data?.textAlignment === 'textLeft' || !data?.textAlignment,
                  })}
                >
                  <div className='h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg' />
                </div>
              </div>

              {data.content && (
                <RichText
                  data={data.content}
                  className='text-lg leading-relaxed text-white/90 drop-shadow-lg sm:text-xl lg:text-2xl'
                />
              )}
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform'>
          <div className='flex flex-col items-center space-y-2'>
            <div className='animate-bounce'>
              <svg className='h-6 w-6 text-white/60' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
            </div>

            <span className='text-xs uppercase tracking-wider text-white/40'>Scroll</span>
          </div>
        </div>

        <div className='absolute right-10 top-20 z-10 hidden lg:block'>
          <div className='to-white/1 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 backdrop-blur-sm' />
        </div>

        <div className='absolute bottom-20 left-10 z-10 hidden lg:block'>
          <div className='h-24 w-24 rounded-full bg-gradient-to-tr from-blue-400/10 to-purple-500/10 backdrop-blur-sm' />
        </div>

        {data.image?.url && (
          <div className='z-5 absolute inset-0'>
            <div className='absolute left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-white/20' />
            <div className='absolute right-1/3 top-1/3 h-1 w-1 animate-pulse rounded-full bg-blue-300/30 delay-1000' />
            <div className='absolute bottom-1/4 left-1/3 h-3 w-3 animate-pulse rounded-full bg-purple-300/20 delay-500' />
          </div>
        )}
      </section>
    </Skeleton>
  )
}

export default BlockTextContentComponent
