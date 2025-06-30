import { type FC } from 'react'
import { useForm } from 'react-hook-form'

import { cn, Skeleton } from '@heroui/react'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { FieldComponent } from '@/app/(client)/shared/ui/field'
import { IFeedbackBlock } from '@/client/entities/models/page.model'
import { ActionComponent } from '@/client/shared/ui/action'

// interface
interface IProps {
  data: IFeedbackBlock
  isLoading: boolean
}

// component
const FeedbackBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading } = props

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({ defaultValues: { email: '' } })

  const onSubmit = handleSubmit((_data) => {
    reset()
  })

  // return
  return (
    <Skeleton
      isLoaded={!isLoading}
      as='section'
      classNames={{
        content: cn(
          'mx-auto grid w-full max-w-[1050px] gap-4 rounded-3xl bg-primary-50/50 p-6 align-middle sm:grid-cols-[1fr_auto] md:p-8',
        ),
      }}
    >
      {data?.title && <h3 className='text-2xl font-semibold md:text-3xl'>{data?.title}</h3>}

      {data?.description && <RichText data={data?.description} />}

      <div className='grid sm:w-[468px]'>
        <form onSubmit={onSubmit} className='grid w-full align-top sm:grid-cols-[1fr_auto]'>
          <FieldComponent
            {...data?.formField}
            name='email'
            control={control}
            isDisabled={isSubmitting}
            size='lg'
            className='bg-white sm:mr-2 sm:w-[360px]'
          />

          {data?.showSubmitButton && (
            <ActionComponent
              {...data?.formAction}
              isDisabled={isSubmitting}
              className='mt-4 sm:mt-0'
              type={data?.formAction?.asLink ? 'button' : 'submit'}
              size='lg'
            />
          )}
        </form>
      </div>
    </Skeleton>
  )
}

export default FeedbackBlockComponent
