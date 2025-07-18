'use client'

import { type FC } from 'react'

import { Divider, Skeleton } from '@heroui/react'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { IArticleBlock } from '@/app/(client)/entities/models'

// interface
interface IProps {
  data: IArticleBlock
  isLoading?: boolean
  menu?: { id: string; title: string }[]
}

// component
const ArticleBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading, menu } = props

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // return
  return (
    <Skeleton isLoaded={!isLoading} as='section'>
      <div className='px-4 md:px-8'>
        <h2 className='mb-2 flex items-center gap-2 text-3xl font-bold md:text-4xl'>{data?.title}</h2>

        {data?.subtitle && <p className='text-foreground/70 sm:text-xl md:text-lg xl:text-xl'>{data?.subtitle}</p>}
      </div>

      <Divider className='mx-auto mt-4 max-w-[95%]' />

      <div className='mx-auto grid w-full gap-12 p-4 md:grid-cols-[0.3fr_0.7fr] md:p-8'>
        <div className='hidden md:block'>
          <div className='sticky top-20'>
            <div className='rounded-xl border bg-white p-4 shadow-md'>
              {/* TODO add translations */}
              <h2 className='mb-2 text-lg font-bold'>Table of content</h2>

              <ul className='border-primary-400 space-y-2 border-l-[3px] pl-2 text-sm'>
                {menu?.map((item) => (
                  <li key={item?.id}>
                    <div
                      onClick={() => handleScrollToSection(item?.id)}
                      className='hover:text-primary-400 cursor-pointer transition-colors'
                    >
                      {item?.title ?? 'Section'}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>{data?.content && <RichText data={data?.content} />}</div>
      </div>
    </Skeleton>
  )
}

export default ArticleBlockComponent
