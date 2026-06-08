import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
const PASSWORD_PROTECT = process.env.PASSWORD_PROTECT === 'true'
const AUTH_USER = process.env.BASIC_AUTH_USER || ''
const AUTH_PASS = process.env.BASIC_AUTH_PASS || ''

export function proxysimtory(request: NextRequest) {
  // 1. Passwortschutz (läuft vor allem anderen)
  if (PASSWORD_PROTECT) {
    const authHeader = request.headers.get('authorization')

    if (authHeader) {
      const authValue = authHeader.split(' ')[1]
      const [user, pass] = atob(authValue).split(':')

      if (user === AUTH_USER && pass === AUTH_PASS) {
        // Auth ok → weiter zur Maintenance-Prüfung
        if (MAINTENANCE_MODE) {
          return NextResponse.rewrite(new URL('/maintenance', request.url))
        }
        return NextResponse.next()
      }
    }

    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Simtory - Geschützter Bereich"',
      },
    })
  }

  // 2. Maintenance-Mode (wenn kein Passwortschutz aktiv)
  if (MAINTENANCE_MODE) {
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!maintenance|_next/static|_next/image|favicon.ico).*)'],
}