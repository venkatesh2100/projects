// import Image from "next/image";
import { PinContainer } from "../aboutme/ui/3dPin";
import { FaLocationArrow } from "react-icons/fa6";

// Project Data Component
const Projects = () => {
  const data = [
    {
      name: "Paytm",
      link: "",
      description:
        "A simple web application for money transfers that includes user signup, authentication, secure data storage, and robust transaction functionality.",
      stack: ["Typescript", "Express", "Nextjs"],
      image: "/paytm.png", // Path should be relative to 'public' for Next.js
      icon: "/wallet.svg",
      source: "https://github.com/venkatesh2100/paytm ",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mdb.svg", "/recoiljs.svg"],
    },
    {
      name: "Blog-site",
      link: "",
      description:
        "A clean web application using TypeScript for creating and managing a blog. Implement user authentication, and a robust database system to store blog posts, and user data.",
      stack: ["React", "Prisma", "Postgres"],
      image: "/blog.jpeg", // Path should be relative to 'public' for Next.js
      icon: "/blog.svg",
      source: "https://github.com/venkatesh2100/Blog-site",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mdb.svg", "/recoiljs.svg"],
    },
    {
      name: "Dukaan",
      link: "https://dukkan-codewithvenky.vercel.app/",
      description: "A Tailwind-oriented project utilizing React and Next.js to develop a simple online money wallet transaction web interface.",
      stack: ["Nextjs", "Tailwind CSS"],
      image: "/dukkan.png", // Use the correct image file here
      icon: "/dukkan.svg",
      source: "https://github.com/venkatesh2100/Dukkan",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mdb.svg", "/recoiljs.svg"],
    },
    {
      name: "Tic-Tac-Toe",
      link: "",
      description: "It is a full-stack application that allows users to play the classic Tic Tac Toe game in both single-player and multiplayer modes.",
      stack: ["React", "Python", "Flask"],
      image: "/AI.png", // Path should be relative to 'public' for Next.js
      icon: "/tic.svg",
      source: "https://github.com/venkatesh2100/TIC_TAC",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mdb.svg", "/recoiljs.svg"],
    },
    // Removed duplicated Dukaan entries
  ];

  return (
    <div className="flex flex-wrap items-center  justify-center  gap-16">
      {data.map((item, index) => (
        <div
          className="lg:min-h-[32.5rem]  h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={index} // Using index here, consider using a unique id if available
        >
          <PinContainer title="Visit" href={item.source}>
            <div className="relative  flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <img
                src={item.image}
                alt="cover"
                className="z-10 absolute w-full h-full bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {item.name}
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.description}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon-${index}`} className="p-2" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

// Component export
export default Projects;
