'use client'

import { ChevronDown } from 'lucide-react'
import { FC, Fragment } from 'react'

import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

import { useLayoutQuery } from '@/app/entities/api/layout'
import { useGlobalStore } from '@/app/shared/store/global.store'
import { ActionComponent } from '@/app/shared/ui/action'
import { LogoComponent } from '@/app/shared/ui/logo'
import { SelectThemeComponent } from '@/app/shared/ui/select/theme'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const { data } = useLayoutQuery()

  const headerBlock = data?.header

  const menu = useGlobalStore((s) => s.menu)
  const handleGlobalStore = useGlobalStore((s) => s.handleGlobalStore)

  // return
  return (
    <Navbar
      isMenuOpen={menu}
      onMenuOpenChange={() => handleGlobalStore({ menu: !menu })}
      classNames={{
        base: `w-auto backdrop-blur-lg bg-background/55 transition-shadow transition-background`,
        wrapper: `z-49 grid max-w-screen-lg h-[60px] items-center grid-cols-[0.5fr_1fr_0.5fr] py-0 w-full px-6`,
      }}
    >
      <NavbarContent justify='start'>
        <LogoComponent w={30} h={30} />
      </NavbarContent>

      <span className='sm:hidden' />

      <NavbarContent
        className='hidden h-fit w-fit gap-0 justify-self-center overflow-hidden rounded-full border-1 sm:flex'
        justify='center'
      >
        {headerBlock?.navigation?.map((nav, index) => (
          <Fragment key={`${nav?.id}-${index}-nav-fragment`}>
            {nav.hasLinks ? (
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button endContent={<ChevronDown className='h-3 w-3' />} radius='none' variant='light'>
                      {nav?.linkText}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>

                <DropdownMenu
                  aria-label='navigation'
                  classNames={{ list: 'grid gap-y-1' }}
                  itemClasses={{ base: 'gap-2' }}
                >
                  {nav?.links?.map((link, index) => (
                    <DropdownItem key={`${link?.id}-${index}-nav-link-dropdown`} className='h-[37px]'>
                      <ActionComponent {...link} radius='none' className='w-full' />
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <ActionComponent
                {...nav}
                actionText={nav?.linkText}
                actionType='button'
                radius='none'
                actionOpenInNewTab={nav?.openInNewTab}
                actionButtonUrl={nav?.linkUrl}
                actionButtonVariant='light'
                actionButtonColor='default'
                className='w-full'
              />
            )}
          </Fragment>
        ))}
      </NavbarContent>

      <NavbarContent className='gap-4 md:gap-2' justify='end'>
        <SelectThemeComponent className='hidden sm:flex' />

        {headerBlock?.actions?.map((button, index) => (
          <Fragment key={`${button?.id}-${index}-action-fragment`}>
            <ActionComponent {...button} className='hidden md:flex' />
          </Fragment>
        ))}

        <NavbarMenuToggle aria-label={menu ? 'Close menu' : 'Open menu'} className='md:hidden' />
      </NavbarContent>
    </Navbar>
  )
}

export default HeaderComponent
