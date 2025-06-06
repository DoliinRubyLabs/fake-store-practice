'use client'

import { FC, ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from './service'

// interface
interface IProps {
  children: ReactNode
}

// component
const RestApiProvider: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  const getQueryClient = queryClient()

  // return
  return (
    <QueryClientProvider client={getQueryClient}>
      {children}

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default RestApiProvider
