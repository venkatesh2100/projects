import React from "react";

const FeatureCircle: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "/water-drop-drop-svgrepo-com.svg",  // SVG file located in public folder
      text: "Freshly prepared at home with love and care",
      bgColor: "bg-[#82A000] bg-opacity-70",
      position: "lg:absolute lg:top-[10%] lg:left-[5%]",
      borderRadius: "35% 65% 23% 77% / 54% 71% 29% 46%", // Blob shape pointing towards top-left
    },
    {
      id: 2,
      icon: "/apple-svgrepo-com.svg",  // Example of another SVG
      text: "Fresh in the fridge for 60 days",
      bgColor: "bg-[#FD7015] bg-opacity-70",
      borderRadius: "49% 51% 69% 31% / 70% 46% 54% 30%", // Blob shape pointing towards bottom-left
      position: "lg:absolute lg:top-[10%] lg:right-[-5%]",
    },
    {
      id: 3,
      icon: "/organic-lunch-svgrepo-com.svg",  // Example of another SVG
      text: "100% organic ingredients",
      bgColor: "bg-[#EA4006] bg-opacity-70",
      borderRadius: "23% 77% 44% 56% / 28% 34% 66% 72%", // Blob shape pointing towards top-right
      position: "lg:absolute lg:bottom-[10%] lg:right-[-5%]",
    },
    {
      id: 4,
      icon: "/bowl-breakfast-svgrepo-com.svg",  // Example of another SVG
      text: "No sugar, artificial preservatives added",
      bgColor: "bg-[#F8B413] bg-opacity-70",
      borderRadius: "65% 35% 46% 54% / 45% 14% 86% 55%", // Blob shape pointing towards bottom-right
      position: "lg:absolute lg:bottom-[10%] lg:left-[10%]",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-backgroundColor sm:pt-60 p-24 relative">
      <div>
        <img
          src="/green_leaf.png"
          alt="Green Leaf"
          className="mx-6 animate-bounce"
          width={80}
        />
      </div>
      <div className="text-2xl mb-10 sm:text-7xl font-paytone">As Fresh As It Gets</div>

      {/* Center Image */}
      <div className="absolute hidden sm:block top-[50%] left-[45%] transform -translate-x-[50%] -translate-y-[50%] z-20 hover:scale-110 transition-transform duration-500">
        <img
          src="/uggu-Photoroom.png"
          alt="Center Content"
          className="w-[800px] h-[600px]"
        />
      </div>

      {/* Features */}
      <div className="relative w-full h-auto flex flex-col lg:w-[1000px] lg:h-[1000px] lg:flex-none">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`group relative flex items-center justify-center w-64 h-64 ${feature.bgColor} text-white text-center shadow-lg ${feature.position} transition-all duration-500 ease-in-out overflow-hidden hover:animate-morph`}
            style={{
              borderRadius: feature.borderRadius, // Different border-radius for each feature
            }}
          >
            {/* Default Content */}
            <div className="absolute flex font-bold text-white font-paytone text-xl flex-col items-center justify-center w-full h-full z-10 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="mt-4 text-md font-semibold">{feature.text}</p>
            </div>

            {/* Icon Circle (using the image directly for the SVG icon) */}
            <div className="absolute top-[-0px] bg-white rounded-full p-4 shadow-lg z-20">
              <img
                src={feature.icon}
                alt="Feature Icon"
                className="w-12 h-12" // Adjust size as needed
              />
            </div>

            {/* On hover, the border-radius becomes more pronounced */}
            <div className="absolute w-full h-full group-hover:border-radius-[50%] transition-all duration-500 ease-in-out" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCircle;
