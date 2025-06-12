import { NextResponse } from 'next/server'

// middleware
export async function middleware() {
  const response = NextResponse.next()

  return response
}

// config
export const config = {
  matcher: ['/((?!api|_next|_next/static|_next/image|admin|fonts|ico|png|txt|sitemap|robots|webmanifest).*)'],
}
