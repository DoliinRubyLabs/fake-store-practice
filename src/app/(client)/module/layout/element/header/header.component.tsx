'use client'

import { PanelRightClose, PanelRightOpen } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@heroui/button'
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'
import { cn } from '@heroui/react'

import { SelectThemeComponent } from '@/app/shared/component/select/theme'
import { ESiteRoute } from '@/app/shared/routes'
import { deLocalizeHref } from '@/pkg/library/i18n/paraglide/runtime'

import { BreadcrumbsComponent } from './element/breadcrumbs'
import { useHeaderService } from './header.service'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const thisService = useHeaderService()

  // return
  return (
    <Navbar
      isMenuOpen={thisService.menu}
      onMenuOpenChange={() => thisService.handleGlobalStore({ menu: !thisService.menu })}
      classNames={{
        base: cn(
          `w-auto backdrop-blur-lg bg-transparent mx-2 md:mx-4 mt-2 top-2 transition-shadow transition-background shadow-none rounded-large`,
          { 'shadow-small': thisService.isScroll },
        ),
        wrapper: cn(`z-49 grid max-h-[60px] grid-cols-[auto_1fr_auto] py-0 w-full max-w-none px-2`),
      }}
    >
      <NavbarContent className={'gap-4 md:gap-2'}>
        <NavbarMenuToggle
          className={'h-[40px] w-[40px] rounded-medium md:hidden'}
          aria-label={thisService.menu ? 'Close menu' : 'Open menu'}
        />

        <Button
          onPress={thisService.toggleSideBar}
          isIconOnly
          className={'hidden justify-items-center md:block'}
          variant={'light'}
          startContent={
            thisService.sideBar ? (
              <PanelRightOpen size={20} className={'rotate-180'} />
            ) : (
              <PanelRightClose size={20} className={'rotate-180'} />
            )
          }
        />

        <NavbarItem className={'hidden sm:block'}>
          {deLocalizeHref(thisService.pathname) !== ESiteRoute.DASHBOARD && <BreadcrumbsComponent />}
        </NavbarItem>
      </NavbarContent>

      <span />

      <NavbarContent justify={'end'}>
        <NavbarItem>
          <SelectThemeComponent />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default HeaderComponent
