// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function will run on each request that matches the specified route
export function middleware(request: NextRequest) {
  // Retrieve the 'auth-token' cookie from the request
  const token = request.cookies.get('auth-token');

  // Log the token for debugging purposes
  console.log('Auth Token:', token);

  // Define paths to protect from authenticated users
  const protectedPaths = ['/login', '/register', '/forgot-password'];

  // Check if the token exists and if the requested path is one of the protected paths
  if (token && protectedPaths.includes(request.nextUrl.pathname)) {
    // If the user is authenticated, redirect them to the user profile page or any other page
    return NextResponse.redirect(new URL('/user-profile', request.url));
  }

  // If the token does not exist, allow access to the login, register, and forgot password pages
  if (!token && protectedPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // If the token does not exist and the user is trying to access other pages, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the token exists, continue with the request
  return NextResponse.next();
}

// Configuration to match the routes where this middleware should run
export const config = {
  matcher: ['/login', '/register', '/forgot-password', '/user-profile', '/create-profile'], // Add all relevant paths here
};
