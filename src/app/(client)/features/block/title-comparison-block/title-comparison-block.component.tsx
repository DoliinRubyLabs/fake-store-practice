import { type FC, useState } from 'react'

import { Chip } from '@heroui/chip'
import { Divider } from '@heroui/divider'
import { Select, SelectItem } from '@heroui/select'
import { Skeleton } from '@heroui/skeleton'

import { IComparisonsTitleBlock } from '@/client/entities/models/block'
import { DisclosureComponent } from '@/client/shared/ui/disclosure'

// interface
interface IProps {
  data: IComparisonsTitleBlock
  isLoading?: boolean
}

// component
const TitleComparisonBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  const [value, setValue] = useState<string>('price-asc')

  // return
  return (
    <Skeleton isLoaded={!isLoading} as='section' classNames={{ base: '!mt-0' }} id={data?.id}>
      <div>
        <div className='flex items-center justify-between gap-2'>
          {data?.showSubtitle ? (
            <div className='flex items-center gap-1 text-xs text-default-500 sm:text-sm'>
              <span
                className='[&_svg]:h-4 [&_svg]:w-4'
                dangerouslySetInnerHTML={{ __html: data?.subtitle?.iconSvg || '' }}
              />

              <div>{data?.subtitle?.label}</div>
            </div>
          ) : (
            <span />
          )}

          {data?.showDisclosure && data.disclosure ? <DisclosureComponent data={data?.disclosure} /> : <span />}
        </div>

        <h2 className='mb-2 flex items-center gap-2 text-2xl font-bold md:text-3xl'>{data?.title}</h2>
      </div>

      <Divider className='mx-auto mt-3' />

      <div className='grid grid-cols-[auto_1fr] justify-between gap-2 py-1.5 sm:grid-cols-[auto_auto]'>
        {data?.showBadge ? (
          <Chip variant='flat' color='default' size='lg' radius='sm' className='bg-default-100 text-sm'>
            {data?.badge?.label} <span className='font-semibold text-warning-400'>{data?.badge?.value}</span>
          </Chip>
        ) : (
          <span />
        )}

        {data?.showSortBy && data?.sortBy ? (
          <Select
            defaultSelectedKeys={['price-asc']}
            label={'Sort:'}
            size={'sm'}
            value={value}
            className='w-full min-w-[120px] sm:w-fit sm:min-w-[200px]'
            classNames={{
              label: 'text-foreground/70 text-sm hidden sm:block',
            }}
            onSelectionChange={(e) => setValue(e.currentKey || '')}
            labelPlacement='outside-left'
          >
            {data?.sortBy?.map((option) => (
              <SelectItem key={option.value}>{option.label}</SelectItem>
            ))}
          </Select>
        ) : (
          <span />
        )}
      </div>

      <Divider className='mx-auto' />
    </Skeleton>
  )
}

export default TitleComparisonBlockComponent
