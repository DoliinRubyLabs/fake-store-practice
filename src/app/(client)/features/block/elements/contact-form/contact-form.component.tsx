import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Input } from '@heroui/input'
import { Button } from '@heroui/react'

// interface
interface IProps {}

// component
const ContactFormComponent: FC<Readonly<IProps>> = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    defaultValues: { email: '' },
  })

  const onSubmit = handleSubmit((_data) => {
    reset()
  })

  // return
  return (
    <section className='flex flex-col items-center justify-between gap-3 rounded-lg bg-primary-50/50 px-6 py-10 md:flex-row md:px-8 md:py-14'>
      <div className='flex flex-col items-center justify-center gap-1 md:items-start'>
        <h3 className='text-[28px] font-semibold leading-[45px] text-primary-900 md:text-[39px]'>
          Subscribe and get exclusive special deal
        </h3>

        <p className='hidden text-default-500 sm:block sm:text-lg md:mt-3'>
          Emails submitted are subject to our Privacy Notice
        </p>
      </div>

      <div className='xs-l:w-fit flex w-full items-center justify-center md:justify-end'>
        <form onSubmit={onSubmit} className='flex w-full max-w-md flex-col sm:flex-row sm:gap-3'>
          <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                value={value}
                onChange={onChange}
                isInvalid={!!error}
                errorMessage={error?.message}
                size={'lg'}
                radius={'sm'}
                type='email'
                classNames={{
                  inputWrapper: 'bg-white',
                }}
                placeholder='Your email'
                disabled={isSubmitting}
              />
            )}
          />

          <Button color='primary' size='lg' radius='sm' type='submit' disabled={isSubmitting} className='mt-4 sm:mt-0'>
            Subscribe
          </Button>

          <p className='mt-2 text-sm text-default-500 sm:hidden'>Emails submitted are subject to our Privacy Notice1</p>
        </form>
      </div>
    </section>
  )
}

export default ContactFormComponent
