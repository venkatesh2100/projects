import React from "react";

const FeatureCircle: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "🫙",
      text: "Freshly prepared at home with love and care",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#82A000] bg-opacity-70",
      position: "lg:absolute lg:top-[10%] lg:left-[5%]",
      border: "43% 57% 18% 82% / 60% 77% 23% 40%",
    },
    {
      id: 2,
      icon: "🥗",
      text: "Fresh in the fridge for 60 days",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#FD7015] bg-opacity-70",
      position: "lg:absolute lg:top-[10%] lg:right-[0%]",
      border: "45% 55% 76% 24% / 79% 52% 48% 21%",
    },
    {
      id: 3,
      icon: "🍎",
      text: "100% organic ingredients",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#EA4006] bg-opacity-70",
      position: "lg:absolute lg:bottom-[10%] lg:right-[0%]",
      border: "27% 73% 46% 54% / 26% 42% 58% 74%",
    },
    {
      id: 4,
      icon: "♻️",
      text: "No sugar, artificial preservatives added",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#F8B413] bg-opacity-70",
      border: "76% 24% 51% 49% / 34% 19% 81% 66%",
      position: "lg:absolute lg:bottom-[10%] lg:left-[5%]",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-backgroundColor pt-20 pl-10 sm:pl-24">
      {/* Header */}
      <div>
        <img
          src="/green_leaf.png"
          alt="Green Leaf"
          className="mx-6 animate-bounce"
          width={80}
        />
      </div>
      <div className="text-4xl sm:text-7xl font-paytone">As Fresh As It Gets</div>

      {/* Center Image */}
      <div className="absolute flex justify-center items-center w-full h-auto mt-96 pr-28">
        <img
          src="/uggu-Photoroom.png"
          alt="Center Content"
          className="w-[500px] hidden lg:block h-auto max-w-full max-h-[500px] hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Features */}
      <div className="relative w-full h-auto flex flex-col lg:w-[1000px] lg:h-[1000px] lg:flex-none">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`group m-6 relative flex items-center justify-center w-64 h-64 ${feature.bgColor} text-white text-center shadow-lg ${feature.position} transition-all duration-500 ease-in-out overflow-hidden hover:animate-morph hover:scale-110`}
            style={{ borderRadius: feature.border }}  // Apply the border radius from the 'border' field
          >
            {/* Default Content */}
            <div className="absolute flex flex-col items-center justify-center w-full h-full z-10 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-4xl">{feature.icon}</span>
              <p className="mt-4 text-md font-semibold">{feature.text}</p>
            </div>

            {/* Hover Image */}
            <div
              className="absolute w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              style={{ backgroundImage: `url(${feature.image})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCircle;
