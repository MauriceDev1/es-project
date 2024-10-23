"use client"

import { usePathname } from "next/navigation";

function Footer() {
    const pathname = usePathname();

    if(pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/user-profile'){
        return null;
    }

    return (
        <div className="w-full py-16 bg-gray-200">
            <div className="w-8/12 m-auto">
                <h1>
                    Footer
                </h1>
            </div>
        </div>
    )
}

export default Footer;
