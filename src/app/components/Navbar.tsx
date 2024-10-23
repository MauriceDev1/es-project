"use client"

import Link from "next/link";
import SearchComponent from "@/app/components/SearchComponent";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import ProfileComponent from "./ProfileComponent";
import { useState, useEffect } from "react"; // to manage auth state

function NavBar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example check for user login status
  useEffect(() => {
    // Replace this with your actual authentication check logic
    const checkAuthStatus = async () => {
      const user = false; // You can replace this with a real check
      setIsLoggedIn(!!user);
    };

    checkAuthStatus();
  }, []);

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
            <button
              className="px-7 h-8 bg-black hover:bg-gray-500 rounded-3xl text-white duration-300"
              onClick={() => router.push('/login')}
            >
              Login
            </button>
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

export default NavBar;
