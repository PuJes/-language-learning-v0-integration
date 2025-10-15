import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const PRIMARY_HOST = (process.env.PRIMARY_DOMAIN ?? 'easiestlanguage.site').toLowerCase()
const ROOT_HOST = PRIMARY_HOST.replace(/^www\./, '')
const WWW_HOST = `www.${ROOT_HOST}`

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
    redirectUrl.hostname = ROOT_HOST
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
