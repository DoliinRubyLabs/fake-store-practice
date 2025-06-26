'use client'

import { FC } from 'react'

import { Divider } from '@heroui/divider'
import { cn } from '@heroui/react'

import { ActionComponent } from '@/app/(client)/shared/ui/action'
import { useLayoutQuery } from '@/app/entities/api/layout'
import { LogoComponent } from '@/app/shared/ui/logo'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = () => {
  const { data } = useLayoutQuery()

  const footerBlock = data?.blocks?.find((block) => block.blockType === 'footer')

  // return
  return (
    <footer className='bg-content2 px-6 pb-8 pt-16'>
      <section className='mx-auto grid max-w-screen-lg gap-6 md:grid-cols-[auto_1fr] md:justify-items-end md:pb-10'>
        <div className='grid content-start gap-6'>
          <LogoComponent w={90} h={30} />
        </div>

        <div className='grid md:grid-cols-[auto_1fr]'>
          <div className='my-6 grid gap-4 md:my-0 md:grid-cols-2 md:gap-20'>
            {footerBlock?.menuColumns?.map((column, index) => (
              <div key={`${column?.id}-${index}-menu-column`}>
                <h4 className='mb-4 font-semibold'>{column?.columnTitle}</h4>

                <ul className='space-y-2'>
                  {column?.links?.map((link, index) => (
                    <li key={`${link?.id}-${index}-menu-column-link`}>
                      <ActionComponent {...link} actionLinkVariant='underline' />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {footerBlock?.copyright && (
        <>
          <Divider className='mx-auto mb-4 max-w-screen-lg' />

          <div
            className={cn('mx-auto max-w-screen-lg opacity-50', {
              'justify-items-center': footerBlock?.copyrightAlignment === 'center',
              'justify-items-start': footerBlock?.copyrightAlignment === 'left',
              'justify-items-end': footerBlock?.copyrightAlignment === 'right',
            })}
          >
            <p className='max-w-xs text-sm'>{footerBlock?.copyright}</p>
          </div>
        </>
      )}
    </footer>
  )
}

export default FooterComponent
