import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from '@/pkg/libraries/locale/routing'

// middleware
export async function middleware(req: NextRequest) {
  const response = createMiddleware(routing)(req)

  const country =
    req.headers.get('cf-ipcountry') ||
    req.headers.get('cloudfront-viewer-country') ||
    req.headers.get('X-Country') ||
    req.cookies.get('country')?.value ||
    'US'

  response.headers.set('x-country', country)
  response.cookies.set('x-country', country)

  return response
}

// config
export const config = {
  matcher: [
    '/((?!api|trpc|_next|_next/static|_next/image|_vercel|static|.well-known|admin|fonts|sitemap|images|icons|robots|webmanifest|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.svg$|.*\\.txt$|.*\\.js$).*)',
  ],
}
