import React from "react";
// import { socials } from "../data";
import { Vortex } from "./ui/Vortex";
import Links from "./Links";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

function Contact() {
  const socials = [
    {
      id: 1,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/venkatesh2100/",
      icon: <IconBrandLinkedin className="h-full w-full text-blue-300" />,
    },
    {
      id: 2,
      title: "Leetcode",
      link: "https://leetcode.com/u/venkatesh2100/",
      icon: <IconBrandLeetcode className="h-full w-full text-orange-300" />,
    },
    {
      id: 3,
      title: "Twitter",
      link: "https://x.com/venky_officals",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      id: 4,
      title: "Github",
      link: "https://github.com/venkatesh2100",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      id: 5,
      title: "CodeForces",
      link: "https://www.youtube.com/@codewithvenky",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];

  return (
    <div
      className="w-[calc(100%)] rounded-md  h-[30rem] overflow-hidden pt-10 mt-10 "
      id="contact"
    >
      <Vortex className="flex items-center flex-col justify-center py-4 w-full h-full ">
        <h2 className="text-white px-2  md:px-10  text-3xl md:text-6xl font-bold text-center">
          Wanna <span className="text-purple-200">Connect ?</span>
        </h2>
        <p className="text-white text-md md:text-2xl max-w-xl mt-6 text-center">
          Join me on my social and coding adventures:
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <div className="hidden md:block">
            <Links />
          </div>
          <div className="block md:hidden">
            <div className="flex justify-center items-center my-10">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className=" rounded-full  flex justify-center items-center overflow-hidden bg-transparent mx-2 sm:mx-3 hover:bg-purple-500 hover:scale-110 transition duration-300 ease-in-out relative"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:max-w-[90%]"
                  >
                    <div className="p-2">{social.icon}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
}

export default Contact;
