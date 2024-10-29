import React from "react";
import { Timeline } from "./ui/Timeline";

const Education = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="flex">
            <img
              src="/bbditm.png"
              className="w-10 lg:w-20 h-full "
              alt="University Logo"
            />

            <p className=" lg:mt-5 lg:text-lg   ">
              Babu Banarasi Das Institute of Technology and Management, AKTU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-5">
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Bachelor of Technology - BTech, Computer Science and Engineering
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Nov 2021 - August 2025
              </p>
            </div>
            {/* <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                I am currently pursuing a Bachelor's degree in Computer Science
                and Engineering at Babu Banarasi Das Institute of Technology and
                Management, Lucknow. As a pre-final year student, I have
                completed coursework in Data Structures, Algorithms,
                Object-Oriented Programming, Database Management Systems,
                Operating Systems, and Computer Networks.
              </p>
            </div> */}
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className=" ">
          <div className="flex">
            <img
              src="/images.png"
              className="w-10 lg:w-16 h-full bg-red-100  rounded-full "
              alt="School Logo"
            />

            <p className=" lg:mt-5 lg:text-lg   ml-5">
              Lucknow Public School, Lucknow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-5">
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Intermediate - Science
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Grade-(89.8%)
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* <div className="flex justify-center heading">Education</div> */}
      <div id="education" className="overflow-hidden mx-auto sm:px-10 px-5">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Education;
