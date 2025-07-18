import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Rediriger favicon.ico vers favicon.svg
  if (request.nextUrl.pathname === '/favicon.ico') {
    return NextResponse.redirect(new URL('/images/Bleu-favicone.png', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/favicon.ico']
}
