'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { SocialLink } from '../ui/socialink';
import { HeroBtn } from './aboutme';
import { NotebookTabs } from 'lucide-react';
import { toast } from 'sonner';

export const HomeIntro = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);//making always True

  // // Function to handle theme change based on user preference or system setting
  // const updateTheme = () => {
  //   const theme = window.localStorage.getItem('theme') || 'light';
  //   setIsDarkMode(theme === 'dark');
  // };

  // // UseEffect to monitor changes in the theme
  // useEffect(() => {
  //   // Initial theme setup
  //   updateTheme();

  //   // Event listener for theme change
  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //   const handleThemeChange = (e: MediaQueryListEvent) => {
  //     setIsDarkMode(e.matches);
  //   };

  //   // Add event listener for changes in system theme
  //   mediaQuery.addListener(handleThemeChange);

  //   return () => {
  //     // mediaQuery.removeListener(handleThemeChange);
  //   };
  // }, []);



  return (
    <div className="border-black cursor-rock">
      <section className="md:flex md:items-center md:space-x-8 ">
        <div className="p-10">
          <h1 className="font-medium text-3xl md:text-5xl mb-4 text-black dark:text-white">
            Hi, I&apos;m
            <span className="text-blue-500 text-edge-outline font-display  z-10 animate-shimmer "> Venkatesh</span>
            <span className="wave text-black dark:text-white">👋</span>
          </h1>

          <div className="col-span-3 max-w-2xl">
            <p className="px-0 text-lg text-left text-text2 md:leading-8 mb-4">
              I&apos;m a software engineer from India, specializing in
              JavaScript, TypeScript, React, and 69 other technologies.
              Passionate about serverless architectures and full-stack
              development, I’m always exploring new technologies. I do fullstack
              and a bit of everything ❤️ All About living life at its best.
            </p>
            <div className="mb-4">
              <SocialLink />
            </div>
            <div className="flex-col justify-between">
              <HeroBtn />

              <button
                onClick={() => toast.success('OK')}
                className="inline-flex dark:border-black mt-1 ml-1 py-2 hover:bg-green-400  px-2 sm:py-4 md:py-6 sm:px-7 md:px-9 animate-shimmer items-center text-2xl justify-center rounded-md border  dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium dark:text-slate-500 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-black focus:ring-offset-slate-50 gap-2"
              >
                <a href="/blogs">check out my blog </a> <NotebookTabs />
              </button>
            </div>
          </div>
        </div>

        {/* Rocket and Moon (Only visible in dark mode) */}
        {/* {isDarkMode
        ?  */}
        {/* ( */}
          <div className="relative">
            <div className="pt-20"><iframe src="https://giphy.com/embed/kmUvauX8TMWg0OsqKW" width="90%" height="100%" className="absolute" frameBorder="0"  allowFullScreen>
            </iframe>
            </div>
            {/* <p><a href="https://giphy.com/stickers/Emoji-transparent-kmUvauX8TMWg0OsqKW"></a></p> */}
            <div className="sm:text-9xl text-9xl  pt-10 ml-20 animate-bounce">🚀</div>

            {/* <div className="sm:text-9xl text-9xl  pr-30 pt-10 animate-spin-slow">🌎</div>
             */}




            <div className="absolute  text-9xl animate-rise -top-20 left-60">
              🌕
            </div>
          </div>
        {/* ) */}
        {/* : */}
         {/* ( */}
          {/* // Image (Only visible in light mode) */}
          {/* <Image
            alt="profile pic"
            src="/luffy.jpeg"
            width={300}
            height={50}
            className="p-4 mx-auto border-black rounded-md shadow-xl"
          /> */}
        {/* )} */}
      </section>

      {/* Custom Animations for Rocket and Moon */}
      <style jsx>{`
    @keyframes rise {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-60px); /* Move moon upwards */
      }
    }
    .animate-rise {
      animation: rise 2s infinite alternate;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px); /* Bounce effect for the rocket */
      }
    }
    .animate-bounce {
      animation: bounce 3s infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(-90deg);
      }
    }
    .animate-spin-slow {
      animation: spin 5s linear infinite; /* Slower spin for the earth */
    }
  `}</style>
    </div>
  );
};
