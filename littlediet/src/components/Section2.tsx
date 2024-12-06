import React from "react";

const FeatureCircle: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "🫙",
      text: "Cold pressed & always fresh",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#82A000] bg-opacity-70", // Adjusted color and opacity
      position: "lg:absolute lg:top-[10%] lg:left-[5%]",
    },
    {
      id: 2,
      icon: "🥗",
      text: "Fresh in the fridge for 60 days",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#FD7015] bg-opacity-70", // Adjusted color and opacity
      position: "lg:absolute lg:top-[10%] lg:right-[0%]",
    },
    {
      id: 3,
      icon: "🍎",
      text: "100% organic ingredients",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#EA4006] bg-opacity-70", // Adjusted color and opacity
      position: "lg:absolute lg:bottom-[10%] lg:right-[0%]",
    },
    {
      id: 4,
      icon: "♻️",
      text: "100% recyclable packaging",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-[#F8B413] bg-opacity-70", // Adjusted color and opacity
      position: "lg:absolute lg:bottom-[10%] lg:left-[5%]",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-backgroundColor pt-60 p-24 relative">
       <div>
            <img
              src="/green_leaf.png"
              alt="Green Leaf"
              className="mx-6 animate-bounce"
              width={80}
            />
          </div>
          <div className="text-7xl  font-paytone ">As Fresh As It Gets</div>
      {/* Center Image */}
      <div className="absolute hidden sm:block top-[50%] left-[45%] transform -translate-x-[50%] -translate-y-[50%] z-20 hover:scale-110 transition-transform duration-500">
        <img
          src="/uggu-Photoroom.png"
          alt="Center Content"
          className="w-[800px] h-[600px] "
        />
      </div>

      {/* Features */}
      <div className="relative w-full h-auto flex flex-col lg:w-[1000px] lg:h-[1000px] lg:flex-none">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`group relative flex items-center rounded-full  justify-center w-64 h-64 ${feature.bgColor} text-white text-center shadow-lg ${feature.position} transition-all duration-500 ease-in-out overflow-hidden hover:animate-morph hover:scale-110`}
            // style={{
            //   clipPath: `polygon(50% 0%, 100% 10%, 100% 60%, 90% 80%, 50% 100%, 10% 80%, 0% 60%, 0% 10%)`,
            // }}
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
