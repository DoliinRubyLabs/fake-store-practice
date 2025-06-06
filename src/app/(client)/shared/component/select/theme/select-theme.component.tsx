'use client'

import { Moon, Sun } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@heroui/button'

import { useSelectThemeService } from './select-theme.service'

// interface
interface IProps {
  variant?: 'light' | 'bordered'
}

// component
const SelectThemeComponent: FC<Readonly<IProps>> = (props) => {
  const { variant = 'light' } = props

  const thisService = useSelectThemeService()

  // return
  return (
    <Button onPress={thisService.handleChangeTheme} variant={variant} isIconOnly aria-label={'change theme'}>
      <Moon key={'theme-light'} size={20} className={'dark:hidden'} />

      <Sun key={'theme-dark'} size={20} className={'hidden dark:block'} />
    </Button>
  )
}

export default SelectThemeComponent
