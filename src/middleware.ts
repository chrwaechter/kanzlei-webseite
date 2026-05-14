import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!maintenance|_next/static|_next/image|favicon.ico).*)'],
}