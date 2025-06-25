'use client'

import { usePathname } from 'next/navigation'
import { FC } from 'react'

import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'
import { cn } from '@heroui/react'

import { useScroll } from '@/app/(client)/shared/hooks'
import { ESiteRoute } from '@/app/(client)/shared/routes/route.interface'
import { useGlobalStore } from '@/app/(client)/shared/store/global.store'
import { BreadcrumbsComponent } from '@/app/(client)/shared/ui/breadcrumbs'
import { SelectThemeComponent } from '@/app/(client)/shared/ui/select/theme'

import { headerService } from './header.service'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const thisService = headerService()

  const pathname = usePathname()
  const isScroll = useScroll()

  const menu = useGlobalStore((s) => s.menu)
  const handleGlobalStore = useGlobalStore((s) => s.handleGlobalStore)

  // return
  return (
    <Navbar
      isMenuOpen={menu}
      onMenuOpenChange={() => handleGlobalStore({ menu: !menu })}
      classNames={{
        base: cn(
          `w-auto backdrop-blur-lg bg-transparent mx-2 md:mx-4 mt-2 top-2 transition-shadow transition-background shadow-none rounded-large`,
          { 'shadow-small': isScroll },
        ),
        wrapper: cn(`z-49 grid max-h-[60px] grid-cols-[auto_1fr_auto] py-0 w-full max-w-none px-2`),
      }}
    >
      <NavbarContent className={'gap-4 md:gap-2'}>
        <NavbarMenuToggle
          className={'h-[40px] w-[40px] rounded-medium md:hidden'}
          aria-label={menu ? 'Close menu' : 'Open menu'}
        />

        <NavbarItem className={'hidden sm:block'}>
          {pathname !== ESiteRoute.BASE && <BreadcrumbsComponent />}
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
