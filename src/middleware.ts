// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function will run on each request that matches the specified route
export function middleware(request: NextRequest) {
  // Retrieve the 'auth-token' cookie from the request
  const token = request.cookies.get('auth-token');

  // Log the token for debugging purposes
  console.log('Auth Token:', token);

  // If the token does not exist, redirect the user to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the token exists, continue with the request
  return NextResponse.next();
}

// Configuration to match the routes where this middleware should run
export const config = {
  matcher: ['/user-profile'], // Matches /user-profile and all its sub-paths
};
