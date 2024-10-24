"use client"

import { useState } from "react";
import Link from "next/link";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default form submission
        setErrorMessage(""); // Clear any existing error messages
        setSuccessMessage(""); // Clear any existing success messages

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password
            });

            if (response.redirected) {
                // If the response was a redirect, you can navigate to the new location
                window.location.href = response.url; // Redirect to the user-profile page
            } else {
                const data = await response.json(); // Try to read the JSON response
                setErrorMessage(data.message || "Login failed. Please try again."); // Display error message
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An unexpected error occurred. Please try again."); // Display generic error message
        }
    };

    return (
        <>
            <h1 className="text-center text-xl">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full h-10 bg-black text-white hover:bg-gray-700">
                    Login
                </button>
            </form>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <div className="w-full flex text-sm">
                <div className="w-1/2">
                    <p>Dont have an account:
                        <span className="text-blue-500 hover:text-blue-400">
                            <Link href="/register">
                                &nbsp;&nbsp;Register
                            </Link>
                        </span>
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Link href="/forgot-password" className="text-blue-500 hover:text-blue-400">Forgot Password</Link>
                </div>
            </div>
        </>
    );
}

export default Login;
