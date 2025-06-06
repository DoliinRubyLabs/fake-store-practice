import { usePathname } from 'next/navigation'

// service
export const useLogoService = () => {
  const pathname = usePathname()

  // return
  return { pathname }
}
