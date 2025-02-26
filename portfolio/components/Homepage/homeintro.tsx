'use client';
import { Spotlight } from '../aboutme/ui/Spotlight';
import { TextGenerateEffect } from '../aboutme/ui/TextGenerateEffect';
import { SocialLink } from '../ui/socialink';
import { HeroBtn } from './aboutme';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const HomeIntro = () => {
  return (
    <div className="border-black over-flow-x-hidden cursor-rock">
      <Spotlight
        className="hidden sm:block top-40 -left-10  md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="hidden sm:block top-10 left-full h-[80vh] w-[50vh]"
        fill="purple"
      />
      <Spotlight
        className="hidden sm:block top-28 left-80 h-[9=80vh] w-[50vh]"
        fill="blue"
      />
      <section className="md:flex md:items-center md:space-x-8 ">
        <div className="p-10">
          <TextGenerateEffect
            className="text-center pr-40 text-3xl md:text-4xl lg:text-5xl"
            words="Hi 👋, I'm Venkatesh "
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
            </div>

            <div className="flex-col  justify-between">
              <HeroBtn />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  toast.success('OK');
                }}
                className="relative group inline-flex items-center justify-center py-2 px-4 sm:py-4 md:py-6 sm:px-7 md:px-9 mt-1 ml-1 text-2xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black dark:border-black dark:text-slate-500 hover:text-slate-900 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:bg-green-400 dark:bg-black gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
                <a
                  href="/blogs"
                  className="relative z-10 text-white dark:text-slate-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Check out my blog
                </a>
              </motion.button>
            </div>
          </div>
        </div>

        <div className={`relative `}>
          <div className={`pt-20 `}>
            {/* <iframe
              // src="https://giphy.com/embed/kmUvauX8TMWg0OsqKW"
              width="90%"
              height="100%"
              className="absolute sm:hidden"
              frameBorder="0"
              allowFullScreen
            ></iframe> */}
          </div>
          {/* <div className="sm:text-9xl text-9xl sm:hidden  pt-10 ml-20 animate-bounce">
            🚀
          </div> */}
          <div className="absolute  text-9xl animate-rise -top-20 left-60 sm:left-0">
            🌕
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-60px); 
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
