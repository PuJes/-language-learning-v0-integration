import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const WWW_HOST = 'www.easiestlanguage.site'
const PRIMARY_HOST = 'easiestlanguage.site'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  if (!host) {
    return NextResponse.next()
  }

  const normalizedHost = host.toLowerCase()
  const hostWithoutPort = normalizedHost.split(':')[0]

  // Redirect www subdomain to the primary (non-www) domain.
  if (hostWithoutPort === WWW_HOST) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.hostname = PRIMARY_HOST
    redirectUrl.protocol = 'https'
    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
      Match all request paths except for:
      - API routes
      - Next.js internals (_next)
      - Static files (common extensions)
    */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
