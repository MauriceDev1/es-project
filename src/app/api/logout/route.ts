import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    // Remove the cookie by setting an expired date
    const response = NextResponse.redirect(new URL('/login', req.url));
    response.cookies.set('auth-token', '', { maxAge: -1 }); // Set cookie to expire
    return response;
}
