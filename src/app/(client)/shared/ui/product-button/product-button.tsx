import React from 'react'

import { Button } from '@heroui/react'

interface ProductButtonProps {
  children: React.ReactNode
  onPress?: () => void
}

export default function ProductButton({ children, onPress }: ProductButtonProps) {
  return (
    <Button color='primary' className='mt-10 max-w-fit' onPress={onPress}>
      {children}
    </Button>
  )
}
