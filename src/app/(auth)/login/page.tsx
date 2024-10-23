import Link from "next/link";

function Login() {
    return (
        <>
            <h1 className="text-center text-xl">Login</h1>
            <form action="/api/login" method="POST" className="flex flex-col gap-4">
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
                <button type="submit" className="w-full h-10 bg-black text-white hover:bg-gray-700">
                    Login
                </button>
            </form>
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
