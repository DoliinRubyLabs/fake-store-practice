import { usePathname } from 'next/navigation'

import { useConfigQuery } from '@/app/shared/rest-api/api/config'
import { useConfigMutation } from '@/app/shared/rest-api/api/config'
import { useGlobalStore } from '@/app/shared/store/global.store'
import { useScroll } from '@/pkg/hook'

// service
export const useHeaderService = () => {
  const pathname = usePathname()

  const isScroll = useScroll()

  const menu = useGlobalStore((s) => s.menu)

  const handleGlobalStore = useGlobalStore((s) => s.handleGlobalStore)

  const { data, refetch } = useConfigQuery()
  const { mutate } = useConfigMutation({ onSuccess: refetch })

  const toggleSideBar = () => {
    mutate({ isSideBarOpen: !data?.data?.isSideBarOpen })
  }

  // return
  return {
    pathname,
    isScroll,
    sideBar: data?.data?.isSideBarOpen,
    menu,
    handleGlobalStore,
    toggleSideBar,
  }
}
