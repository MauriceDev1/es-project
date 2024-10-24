import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    // Destructure and type the incoming data
    const { email, password, username, role }: { email: string; password: string; username: string; role: string } = await request.json();

    console.log("Received data:", { email, password, username, role });

    // Connect to the database
    await connect();

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Use 10 salt rounds

    // Create a new user object
    const newUser = new User({
        email,
        password: hashedPassword,
        username, // Ensure username is included
        role,     // Ensure role is included
    });

    try {
        // Attempt to save the user to the database
        const savedUser = await newUser.save();
        console.log("User registered successfully:", savedUser); // Log the saved user

        // Create the absolute URL for the redirect
        // const redirectUrl = new URL('/login', request.url).toString();

        // Redirect to the login page
        return NextResponse.json({ success: true, redirectTo: '/login' });// Use the absolute URL
    } catch (error) {
        console.error("Error registering user:", error); // Log the error for debugging
        return new NextResponse("Internal server error", {
            status: 500,
        });
    }
};
