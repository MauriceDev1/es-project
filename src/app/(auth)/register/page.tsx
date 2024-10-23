import Link from "next/link";

function Register() {
    return (
        <>
            <h1 className="text-center text-xl">Register</h1>
            <form action="/api/register" method="POST" className="flex flex-col gap-4">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Username"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 h-10 rounded-sm px-2"
                    placeholder="Password"
                    required
                />

                {/* New select field */}
                <label htmlFor="role">Role</label>
                <select
                    id="role"
                    name="role"
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
