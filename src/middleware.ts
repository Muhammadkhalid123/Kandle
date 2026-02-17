import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    const hostname = request.headers.get('host')

    // Check if it's production and doesn't start with www
    if (
        process.env.NODE_ENV === 'production' &&
        hostname &&
        !hostname.startsWith('www.') &&
        !hostname.includes('localhost') &&
        !hostname.includes('vercel.app') // Allow Vercel preview URLs
    ) {
        url.hostname = `www.${hostname}`
        return NextResponse.redirect(url, 301)
    }

    // Handle index.html and index.php (already in next.config.ts, but good to have here too if needed)
    if (url.pathname === '/index.html' || url.pathname === '/index.php') {
        url.pathname = '/'
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
