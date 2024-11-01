import React from "react";
import { Timeline } from "./ui/Timeline";

const Education = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="">
          <div className="flex">
            <img
              src="/bbditm.png"
              className="w-10 lg:w-20 h-full "
              alt="University Logo"
            />

            <p className=" lg:mt-5 lg:text-lg   ">
              JAWAHAR NAVAODAYA VIDYALA ,YNM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-5">
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
              JAWAHAR NAVAODAYA VIDYALA ,YNM
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Nov 2022 - August 2026
              </p>
            </div>
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
            JAWAHAR NAVAODAYA VIDYALA ,YNM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-5">
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Intermediate - MBIPC
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm lg:text-base font-normal">
                Grade-(85.2%)
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
