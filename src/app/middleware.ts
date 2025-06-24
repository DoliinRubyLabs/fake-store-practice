import { NextResponse } from 'next/server'

// middleware
export async function middleware() {
  const response = NextResponse.next()

  return response
}

// config
export const config = {
  matcher: [
    '/((?!api|trpc|_next|_next/static|_next/image|_vercel|static|.well-known|admin|fonts|sitemap|images|games|icons|robots|webmanifest|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.ico$|.*\\.svg$|.*\\.txt$|.*\\.js$).*)',
  ],
}
