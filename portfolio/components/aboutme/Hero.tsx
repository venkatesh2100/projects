import React from "react";
import { Spotlight } from "./ui/Spotlight";
// import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import RandomQuote from "./qoute";

const Hero = () => {
  return (
    <div className="pb-20 dark:bg-red pt-20 overflow-hidden mx-auto sm:px-10 px-5">
      <div>
        <Spotlight
          className="-top-40 -left-10  md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
        {/* <GridBackground /> */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <h2 className=" text-3xl text-center text-blue-100 max-w-80  font-bold ">
              Hi 👋
            </h2> */}
            <TextGenerateEffect
              className="text-center text-3xl md:text-4xl lg:text-5xl"
              words="Hi 👋, I'm Venkatesh <>developer</>"
              // highlightedWordIndex={5} // Specify the index of the word to highlight
            />

            {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              "The only way to learn to code is to code." - Linus Torvalds.
            </p> */}
            <RandomQuote />
            <div>
              <MagicButton

                url="https://drive.google.com/file/d/12On21ITk5sjUdR78xcMG5v-pNwNQ1RWi/view?usp=sharing"
                text="Download Resume"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
