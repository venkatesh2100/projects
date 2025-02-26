'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Hamburger } from './ui/hamburger';
import { useRouter } from 'next/navigation';
import ToggleButton from './ui/togglebutton';
// import { AnimatedThemeToggle, TransitionEffect } from './ui/theme-toggle';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b ">
      <div className="flex items-center justify-between  md:flex-wrap md:mx-60">
        <div className="flex items-center">
          <Image
            alt="profile pic"
            src="/profile.jpeg"
            width={80}
            height={40}
            className="p-4  rounded-full hover:animate-pulse "
          ></Image>

          <a
            className="text-3xl uppercase focus:ring-4   py-2 flex title-font   font-semibold   ml-2"
            href="/"
          >
            Venky
            <span className="text-blue-500">.</span>
          </a>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="sm:hidden  flex space-x-4 pl-20  items-center">
          <ToggleButton />
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Menu links for larger screens */}
        <div className="hidden  text-text2 sm:flex space-x-8 text-lg font-bold">
          <a
            href="/blogs"
            className="hover:text-green-500 transition-colors duration-200"
          >
            Blogs
          </a>
          <a
            href="/projects"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/aboutme"
            className="hover:text-red-400 transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="/resume"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        <div className="flex  items-center ">
          <div
            onClick={() => router.push(`/api/auth/signin`)}
            className="hidden lg:flex items-center hover:rotate-12 justify-center space-x-2 dark:bg-gray-300  text-black-600 font-bold border rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-grey-600 text-black shadow-lg dark:hover:shadow-pink-500/50 white:hover:shadow-indigo-500/50"
          >
            <div className="relative group">
              <div className="absolute inset-0 dark:text-black bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-45   dark:opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:rotate-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <span className="z-10">Hire me</span>
              </div>
            </div>
          </div>
          <div className="pl-2 hidden sm:block">
            <ToggleButton />

            {/* <AnimatedThemeToggle />
            <TransitionEffect /> */}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white dark:text-white dark:bg-black shadow-md z-50 p-6 transition-transform transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } sm:hidden`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="/blogs"
            className="text-lg font-bold hover:text-green-500 transition-colors duration-200"
          >
            Blogs
          </a>
          <a
            href="/projects"
            className="text-lg bg  font-bold hover:text-blue-500 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/aboutme"
            className="text-lg font-bold hover:text-red-400 transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="/resume"
            className="text-lg font-bold hover:text-green-400 transition-colors duration-200"
          >
            Resume
          </a>
          <div
            onClick={() => router.push(`/api/auth/signin`)}
            className="lg:flex dark:text-black items-center hover:rotate-12 justify-center space-x-2 dark:bg-white text-black-600 font-bold border rounded-md px-4 py-2 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-grey-600 hover:text-black shadow-lg dark:hover:shadow-pink-500/50 white:hover:shadow-indigo-500/50"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 hover:rotate-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <span className="z-10 ">Hire me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
