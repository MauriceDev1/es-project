import { cookies } from "next/headers"; // Import from next/headers
import { NextResponse } from "next/server";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export const POST = async (request: Request) => {
    const { email, password }: { email: string; password: string } = await request.json();
    try {
        await connect();
        const user = await User.findOne({ email });
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new NextResponse("Invalid credentials", { status: 401 });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Set the token as a cookie using next/headers
        cookies().set('auth-token', token, {
          httpOnly: true,  // This makes it inaccessible to JavaScript
          secure: process.env.NODE_ENV === 'production', // Ensure this is true in production
          maxAge: 60 * 60, // 1 hour
          path: '/' // Ensure it's accessible across the entire application
        });

        // Redirect to the user-profile page
        return NextResponse.redirect(new URL('/user-profile', request.url));
    } catch (error) {
        console.error("Error during login:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
};
