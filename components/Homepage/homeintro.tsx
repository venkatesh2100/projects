'use client';
import { useEffect, useState } from 'react';
import { Spotlight } from '../aboutme/ui/Spotlight';
import { TextGenerateEffect } from '../aboutme/ui/TextGenerateEffect';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import { SocialLink } from '../ui/socialink';
import { HeroBtn } from './aboutme';
// import { NotebookTabs } from 'lucide-react';
import { toast } from 'sonner';

export const HomeIntro = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = Math.round(window.devicePixelRatio * 100);
      setIsZoomed(zoomLevel === 125);
    };
    checkZoom();
    window.addEventListener('resize', checkZoom);

    return () => window.addEventListener('resize', checkZoom);
  }, []);

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
      <Spotlight
        className="-top-40 -left-10  md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      <section className="md:flex md:items-center md:space-x-8 ">
        <div className="p-10">
          {/* <h1 className="font-medium text-3xl md:text-5xl mb-4 text-black dark:text-white">
            Hi, I&apos;m
            <span className="text-blue-500 text-edge-outline font-display  z-10 animate-shimmer "> Venkatesh</span>
            <span className="wave text-black dark:text-white">👋</span>
          </h1> */}
          <TextGenerateEffect
            className="text-center pr-40 text-3xl md:text-4xl lg:text-5xl"
            words="Hi 👋, I'm Venkatesh "

            // highlightedWordIndex={5} // Specify the index of the word to highlight
          />

          <div className="col-span-3 max-w-2xl">
            <p className="px-0 text-lg text-left text-text2 md:leading-8 mb-4">
              A software engineer from India, specializing in JavaScript,
              TypeScript, React, and 69 other technologies. Passionate about
              serverless architectures and full-stack development, I’m always
              exploring new technologies. I do fullstack and a bit of everything
              ❤️ All About living life at its best.
            </p>
            <div className="mb-4  flex ">
              <div>
                <SocialLink />
              </div>
              {/* <TextGenerateEffect
                className="text-sm  pl-10 hidden md:block"
                words="𝔇𝔢𝔰𝔦𝔤𝔫𝔢𝔡 🛠️ 𝔣𝔬𝔯 80% ℨ𝔬𝔬𝔪 𝔠𝔥𝔢𝔠𝔨𝔬𝔲𝔱    "
                // highlightedWordIndex={5} // Specify the index of the word to highlight
              /> */}
            </div>
            <div className="flex-col justify-between">
              <HeroBtn />

              <button
                onClick={() => {
                  toast.success('OK');
                }}
                className="relative group inline-flex items-center justify-center py-2 px-4 sm:py-4 md:py-6 sm:px-7 md:px-9 mt-1 ml-1 text-2xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black dark:border-black dark:text-slate-500 hover:text-slate-900 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:bg-green-400 dark:bg-black gap-2 animate-shimmer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
                <a
                  href="/blogs"
                  className="relative z-10 text-white dark:text-slate-300"
                  onClick={(e) => e.stopPropagation()} // Prevent conflict with button's onClick
                >
                  Check out my blog
                </a>
              </button>
                {/* <NotebookTabs /> */}
            </div>
          </div>
        </div>

        {/* Rocket and Moon (Only visible in dark mode) */}
        {/* {isDarkMode
        ?  */}
        {/* ( */}
        <div className={`relative ${isZoomed ? 'hidden' : ''}`}>
          <div className={`pt-20 ${isZoomed ? 'hidden' : ''}`}>
            <iframe
              src="https://giphy.com/embed/kmUvauX8TMWg0OsqKW"
              width="90%"
              height="100%"
              className="absolute"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          {/* <p><a href="https://giphy.com/stickers/Emoji-transparent-kmUvauX8TMWg0OsqKW"></a></p> */}
          <div className="sm:text-9xl text-9xl  pt-10 ml-20 animate-bounce">
            🚀
          </div>

          {/* <div className="sm:text-9xl text-9xl  pr-30 pt-1 0 animate-spin-slow">🌎</div>
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
