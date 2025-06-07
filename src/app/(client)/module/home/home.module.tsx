'use client'

import Image from 'next/image'

import { Card, CardBody, Skeleton } from '@heroui/react'

import { ContainerComponent } from '@/app/(client)/shared/component/container'

import { useHomeService } from './home.service'

// interface
interface IProps {}

// component
const HomeModule: React.FC<IProps> = () => {
  const thisService = useHomeService()

  // return
  return (
    <ContainerComponent>
      <div className={'relative mt-8 w-full'}>
        <div className={'relative z-10 grid gap-6 text-center'}>
          <Skeleton isLoaded={!thisService.isLoading} className={'mx-auto rounded-lg'}>
            <div className={'mt-8 space-y-4'}>
              <h1
                className={
                  'bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent ' +
                  'text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'
                }
              >
                {thisService.data?.title}
              </h1>

              <p className={'mx-auto max-w-3xl text-lg text-default-600 md:text-xl lg:text-2xl'}>
                {thisService.data?.subTitle}
              </p>
            </div>
          </Skeleton>
        </div>

        <div className={'mt-12'}>
          <Skeleton isLoaded={!thisService.isLoading} className={'rounded-3xl'}>
            <Card className={'group relative overflow-hidden border-none'}>
              <div
                className={
                  'relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[500px] ' +
                  'transition-transform duration-700 group-hover:scale-105'
                }
              >
                <div
                  className={'absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent'}
                />

                <Image
                  src={thisService.data?.mainImage?.url || ''}
                  alt={thisService.data?.mainImage?.alt || 'hero image'}
                  fill
                  className={'object-cover transition-transform duration-700 group-hover:scale-110'}
                  quality={100}
                  priority
                />

                {/* Floating gradient overlay */}
                <div
                  className={
                    'absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br ' +
                    'from-blue-400/20 to-purple-600/20 blur-3xl transition-all duration-1000' +
                    'group-hover:scale-150 group-hover:opacity-70'
                  }
                />

                <div
                  className={
                    'absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr ' +
                    'from-teal-400/20 to-cyan-600/20 blur-3xl transition-all duration-1000' +
                    'group-hover:scale-150 group-hover:opacity-70'
                  }
                />
              </div>
            </Card>
          </Skeleton>
        </div>
      </div>

      <div className={'mt-16 w-full space-y-12'}>
        {thisService.data?.sections?.map((data, index) => (
          <Skeleton
            key={`${data?.section?.title}-${index}`}
            isLoaded={!thisService.isLoading}
            className={'rounded-2xl'}
          >
            <Card
              className={
                'group relative overflow-hidden border-none bg-gradient-to-br from-white/80 to-gray-50/50 ' +
                'shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl' +
                'hover:scale-[1.02] dark:from-gray-900/80 dark:to-gray-800/50'
              }
            >
              <CardBody className={'relative p-8 md:p-12'}>
                <div className={'grid gap-8 md:grid-cols-2 md:items-center'}>
                  {/* Content Section */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} space-y-6`}>
                    <div className={'flex items-center gap-4'}>
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
                        {data?.section?.title || ''}
                      </h2>
                    </div>

                    <p
                      className={
                        'text-base leading-relaxed text-default-600 ' +
                        'transition-colors duration-300 group-hover:text-default-700' +
                        'md:text-lg lg:text-xl'
                      }
                    >
                      {data?.section?.subTitle || ''}
                    </p>
                  </div>

                  {/* Image Section */}
                  {data?.section?.mainImage?.url && (
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
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
                          src={data?.section?.mainImage?.url || ''}
                          alt={data?.section?.mainImage?.alt || data?.section?.title || 'section image'}
                          fill
                          className={
                            'object-cover transition-all duration-700 ' +
                            'group-hover/image:scale-105 group-hover/image:brightness-110'
                          }
                          quality={85}
                          sizes='(max-width: 768px) 100vw, 50vw'
                        />

                        <div
                          className={'absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent'}
                        />

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

                <div
                  className={
                    'absolute right-4 top-4 h-16 w-16 rounded-full bg-gradient-to-br ' +
                    'from-blue-400/10 to-purple-600/10 transition-all duration-700' +
                    'group-hover:scale-125 group-hover:opacity-50'
                  }
                />

                <div
                  className={
                    'absolute bottom-4 left-4 h-12 w-12 rounded-full bg-gradient-to-tr ' +
                    'from-teal-400/10 to-cyan-600/10 transition-all duration-700' +
                    'group-hover:scale-125 group-hover:opacity-50'
                  }
                />
              </CardBody>
            </Card>
          </Skeleton>
        ))}
      </div>
    </ContainerComponent>
  )
}

export default HomeModule
