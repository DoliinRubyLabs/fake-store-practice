import { type FC } from 'react'

import { Skeleton } from '@heroui/skeleton'

import { ITitleBlock } from '@/client/entities/models/block'
import { DisclosureComponent } from '@/client/shared/ui/disclosure'

// interface
interface IProps {
  data: ITitleBlock
  isLoading?: boolean
}

// component
const TitleBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  // return
  return (
    <Skeleton isLoaded={!isLoading} as='section' classNames={{ base: '!mt-0' }} id={data?.id}>
      {data?.showDisclosure && data?.disclosure && <DisclosureComponent data={data?.disclosure} />}

      <h2 className='mt-6 flex items-center gap-2 text-3xl font-bold text-primary-900 md:text-4xl'>{data.title}</h2>

      {data?.subtitle && (
        <p className='xl:text-xl mb-6 mt-2 text-foreground/70 sm:text-xl md:text-lg'>{data.subtitle}</p>
      )}
    </Skeleton>
  )
}

export default TitleBlockComponent
