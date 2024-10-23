import { auth } from '@/app/config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse form data to get email and password
    const formData = await req.formData();
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    // Validate email and password
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Authenticate the user with Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get Firebase ID token for setting as a cookie
    const token = await user.getIdToken();

    // Create a response and set the ID token as a secure, httpOnly cookie
    const response = NextResponse.redirect(new URL('/user-profile', req.url)); // Use req.url here
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 // 1 hour
    });

    return response;
  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }
}
