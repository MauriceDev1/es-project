import Link from "next/link";

function ForgotPassword() {
    return (
        <>
            <h1 className="text-center text-xl">Forgot Password</h1>
            <label htmlFor="">Email</label>
            <input
                type="text"
                className="border border-gray-300 h-10 rounded-sm px-2"
                placeholder="Email"/>
            <button className="w-full h-10 bg-black text-white hover:bg-gray-700">Sumit</button>
            <div className="text-sm">
                <p>Remember my password:
                    <span className="text-blue-500 hover:text-blue-400">
                        <Link href="/login">
                            &nbsp;&nbsp;Login
                        </Link>
                    </span>
                </p>
            </div>
        </>
    )
}

export default ForgotPassword;
