"use client"

import Link from "next/link";
import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission

        // Prepare the data to send
        const formData = {
            username,
            email,
            password,
            role,
        };

        // Send data to the API
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                window.location.href = data.redirectTo; // Redirect to login
            }
        } else {
            const errorData = await response.json();
            console.error(errorData);
        }
    };

    return (
        <>
            <h1 className="text-center text-xl">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Username"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Password"
                    required
                />

                {/* New select field */}
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    required
                >
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="work">Work</option>
                </select>

                <button type="submit" className="w-full h-10 bg-black text-white hover:bg-gray-700">
                    Register
                </button>
            </form>
            <p className="text-sm">Have an account:
                <span className="hover:text-blue-400 text-blue-500">
                    <Link href="/login">
                        &nbsp;&nbsp;Login
                    </Link>
                </span>
            </p>
        </>
    );
}

export default Register;
