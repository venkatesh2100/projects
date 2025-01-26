import React from "react";
import { EvervaultCard, Icon } from "./ui/EvervaultCard";

const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden mx-auto sm:px-10 px-5">
      <div className="relative mt-[11rem] md:mt-8">
        <div className="heading flex justify-center font-semibold ">Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2 gap-x-0 mt-5 justify-items-center  space-y-6 ">
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] mt-6 ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="Next.js" img="/nextjs.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="React" img="/react.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem]  ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="TypeScript" img="/typescript.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="JavaScript" img="/JS.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem]">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="Node.js" img="/nodejs.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="PostMan" img="/postman.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="GitHub" img="/github.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem]">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="Docker" img="/docker.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="Tailwind" img="/tailwind.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="MongoDB" img="/mongodb.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="RecoilJs" img="/recoiljs.png" />
          </div>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-2 relative h-[10rem] ">
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />
            <EvervaultCard text="Prisma" img="/prisma.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
