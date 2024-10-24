// Import necessary packages
import Link from "next/link";
import SearchComponent from "@/app/components/SearchComponent";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import ProfileComponent from "./ProfileComponent";
import { cookies } from "next/headers"; // Import cookies utility from Next.js

async function fetchAuthStatus() {
  // Simulate checking for an authentication cookie
  const cookieStore = cookies();
  const authCookie = cookieStore.get("auth-token"); // Adjust the cookie name as necessary



  return !!authCookie; // Return true if the cookie exists, false otherwise
}

export default async function NavBar() {
  const isLoggedIn = await fetchAuthStatus(); // Get the login status

  return (
    <nav className="w-full h-14 border-b border-gray-200 z-50 sticky top-0 bg-white">
      <div className="w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 m-auto flex justify-between items-center h-full gap-10">
        <div className="flex items-center w-1/2 gap-x-5">
          <Link href={"/"}>Logo</Link>
          <SearchComponent />
        </div>
        <div className="hidden w-1/2 xl:flex justify-end items-center gap-6">
          <ul className="flex gap-8">
            <li className="flex gap-2 items-center cursor-pointer">
              Services<IoIosArrowDown />
            </li>
            <Link href={'/how-we-work'}>
              <li>How we Work</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          {/* Conditional rendering based on login status */}
          {!isLoggedIn ? (
            <Link href="/login">
              <button className="px-7 h-8 bg-black hover:bg-gray-500 rounded-3xl text-white duration-300">
                Login
              </button>
            </Link>
          ) : (
            <ProfileComponent />
          )}
        </div>
        <div className="xl:hidden">
          <CiMenuBurger />
        </div>
      </div>
    </nav>
  );
}
