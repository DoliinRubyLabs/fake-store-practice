import Image from 'next/image'
import { type FC } from 'react'

import { cn } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { ITitleDescriptionImageSection } from '@/app/(client)/shared/rest-api/interface'

// interface
interface IProps {
  isLoading?: boolean
  sectionType: 'titleDescriptionImage'
  data: ITitleDescriptionImageSection
}

// component
const BuilderSectionComponent: FC<Readonly<IProps>> = (props) => {
  const { sectionType, data, isLoading = false } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading} className={'rounded-2xl'}>
      <div className={cn('group relative overflow-hidden border-none')}>
        <div className={'relative p-8 md:p-12'}>
          {data?.layout === 'image-top' || data?.layout === 'image-bottom' ? (
            <div className={'space-y-8'}>
              {data?.layout === 'image-top' && data?.image?.url && (
                <div className={'w-full'}>
                  <div
                    className={
                      'group/image relative h-48 w-full overflow-hidden rounded-2xl ' +
                      'bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500' +
                      'hover:shadow-xl dark:from-gray-800 dark:to-gray-700 md:h-56 lg:h-64'
                    }
                  >
                    <div
                      className={
                        'absolute inset-0 z-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 ' +
                        'opacity-0 transition-opacity duration-500 group-hover/image:opacity-100'
                      }
                    />

                    <Image
                      src={data?.image?.url || ''}
                      alt={data?.image?.alt || data?.imageAlt || 'section image'}
                      fill
                      className={
                        'object-cover transition-all duration-700 ' +
                        'group-hover/image:scale-105 group-hover/image:brightness-110'
                      }
                      sizes='(max-width: 768px) 100vw, 100vw'
                    />

                    <div className={'absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'} />

                    <div
                      className={
                        'absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br ' +
                        'from-blue-400/20 to-purple-600/20 blur-lg transition-all duration-700' +
                        'group-hover/image:scale-150 group-hover/image:opacity-80'
                      }
                    />
                  </div>
                </div>
              )}

              <div
                className={`space-y-6 ${
                  data?.alignment === 'center'
                    ? 'text-center'
                    : data?.alignment === 'right'
                      ? 'text-right'
                      : 'text-left'
                }`}
              >
                <div
                  className={`flex items-center gap-4 ${
                    data?.alignment === 'center'
                      ? 'justify-center'
                      : data?.alignment === 'right'
                        ? 'justify-end'
                        : 'justify-start'
                  }`}
                >
                  <div
                    className={
                      'h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ' +
                      'transition-all duration-500 group-hover:w-20'
                    }
                  />

                  <h2
                    className={
                      'text-2xl font-bold text-default-800 transition-colors duration-300 ' +
                      'group-hover:text-blue-600 md:text-3xl lg:text-4xl'
                    }
                  >
                    {data?.title || ''}
                  </h2>
                </div>

                <p
                  className={
                    'text-base leading-relaxed text-default-600 ' +
                    'transition-colors duration-300 group-hover:text-default-700' +
                    'md:text-lg lg:text-xl'
                  }
                >
                  {data?.imageCaption || ''}
                </p>

                <RichText
                  data={data?.description || ''}
                  className={
                    'text-base leading-relaxed text-default-600 ' +
                    'transition-colors duration-300 group-hover:text-default-700' +
                    'md:text-lg lg:text-xl'
                  }
                />
              </div>

              {data?.layout === 'image-bottom' && data?.image?.url && (
                <div className={'w-full'}>
                  <div
                    className={
                      'group/image relative h-48 w-full overflow-hidden rounded-2xl ' +
                      'bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500' +
                      'hover:shadow-xl dark:from-gray-800 dark:to-gray-700 md:h-56 lg:h-64'
                    }
                  >
                    <div
                      className={
                        'absolute inset-0 z-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 ' +
                        'opacity-0 transition-opacity duration-500 group-hover/image:opacity-100'
                      }
                    />

                    {data?.image?.url && (
                      <Image
                        src={data?.image?.url || ''}
                        alt={data?.image?.alt || data?.imageAlt || 'section image'}
                        fill
                        className={
                          'object-cover transition-all duration-700 ' +
                          'group-hover/image:scale-105 group-hover/image:brightness-110'
                        }
                        sizes='(max-width: 768px) 100vw, 100vw'
                      />
                    )}

                    <div className={'absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'} />

                    <div
                      className={
                        'absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br ' +
                        'from-blue-400/20 to-purple-600/20 blur-lg transition-all duration-700' +
                        'group-hover/image:scale-150 group-hover/image:opacity-80'
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={'grid gap-8 md:grid-cols-2 md:items-center'}>
              <div
                className={cn('space-y-6', {
                  'order-2': data?.layout === 'image-left',
                  'order-1': data?.layout !== 'image-left',
                  'text-center': data?.alignment === 'center',
                  'text-right': data?.alignment === 'right',
                  'text-left': data?.alignment === 'left',
                })}
              >
                <div
                  className={cn('flex items-center gap-4', {
                    'justify-center': data?.alignment === 'center',
                    'justify-end': data?.alignment === 'right',
                    'justify-start': data?.alignment === 'left',
                  })}
                >
                  <div
                    className={
                      'h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ' +
                      'transition-all duration-500 group-hover:w-20'
                    }
                  />

                  <h2
                    className={
                      'text-2xl font-bold text-default-800 transition-colors duration-300 ' +
                      'group-hover:text-blue-600 md:text-3xl lg:text-4xl'
                    }
                  >
                    {data?.title || ''}
                  </h2>
                </div>

                <p
                  className={
                    'text-base leading-relaxed text-default-600 ' +
                    'transition-colors duration-300 group-hover:text-default-700' +
                    'md:text-lg lg:text-xl'
                  }
                >
                  {data?.imageCaption || ''}
                </p>

                <RichText
                  data={data?.description || ''}
                  className={
                    'text-base leading-relaxed text-default-600 ' +
                    'transition-colors duration-300 group-hover:text-default-700' +
                    'md:text-lg lg:text-xl'
                  }
                />
              </div>

              {data?.image?.url && (
                <div className={`${data?.layout === 'image-left' ? 'order-1' : 'order-2'}`}>
                  <div
                    className={
                      'group/image relative h-48 w-full overflow-hidden rounded-2xl ' +
                      'bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-500' +
                      'hover:shadow-xl dark:from-gray-800 dark:to-gray-700 md:h-56 lg:h-64'
                    }
                  >
                    <div
                      className={
                        'absolute inset-0 z-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 ' +
                        'opacity-0 transition-opacity duration-500 group-hover/image:opacity-100'
                      }
                    />

                    <Image
                      src={data?.image?.url || ''}
                      alt={data?.image?.alt || data?.imageAlt || 'section image'}
                      fill
                      className={
                        'object-cover transition-all duration-700 ' +
                        'group-hover/image:scale-105 group-hover/image:brightness-110'
                      }
                      sizes={'(max-width: 768px) 100vw, 50vw'}
                      placeholder={'blur'}
                    />

                    <div className={'absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'} />

                    <div
                      className={
                        'absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br ' +
                        'from-blue-400/20 to-purple-600/20 blur-lg transition-all duration-700' +
                        'group-hover/image:scale-150 group-hover/image:opacity-80'
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className={cn(
              'absolute right-4 top-4 h-16 w-16 rounded-full bg-gradient-to-br',
              'from-blue-400/10 to-purple-600/10 transition-all duration-700',
              'group-hover:scale-125 group-hover:opacity-50',
            )}
          />

          <div
            className={cn(
              'absolute bottom-4 left-4 h-12 w-12 rounded-full bg-gradient-to-tr',
              'from-teal-400/10 to-cyan-600/10 transition-all duration-700',
              'group-hover:scale-125 group-hover:opacity-50',
            )}
          />
        </div>
      </div>
    </Skeleton>
  )
}

export default BuilderSectionComponent
