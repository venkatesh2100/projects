import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

function Links() {
  const links = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-blue-300" />,
      href: "https://www.linkedin.com/in/venkatesh2100/",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="h-full w-full text-orange-300" />,
      href: "https://leetcode.com/u/venkatesh2100/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/venky_officials",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/venkatesh2100",
    },

    {
      title: "Codeforces",
      icon: (
        <IconBrandYoutube className="h-full w-full text-red-500 dark:text-red-300" />
      ),
      href: "https://www.youtube.com/@codewithvenky",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full my-10 mb-20">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Links;
