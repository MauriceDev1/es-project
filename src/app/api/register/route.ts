// src/app/api/register/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        // Extract values from FormData
        const username = formData.get('username')?.toString();
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        const role = formData.get('role')?.toString();

        // Optional: Validate inputs here
        if (!username || !email || !password || !role) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Connect to the database
        const client = await clientPromise;
        const db = client.db("your_database_name"); // Replace with your database name

        // Insert the new user into the database
        const result = await db.collection("users").insertOne({
            username,
            email,
            password, // Make sure to hash the password before saving
            role,
        });

        return NextResponse.json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
