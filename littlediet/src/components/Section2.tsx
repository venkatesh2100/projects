import React from "react";

const FeatureCircle: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: "🫙",
      text: "Cold pressed & always fresh",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-green-300 bg-opacity-60",
      position: "lg:absolute lg:top-[10px] lg:left-[310px]",
    },
    {
      id: 2,
      icon: "🥗",
      text: "Fresh in the fridge for 10 days",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-yellow-300 bg-opacity-60",
      position: "lg:absolute lg:top-[160px] lg:left-[620px]",
    },
    {
      id: 3,
      icon: "🍎",
      text: "100% organic ingredients",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-orange-300 bg-opacity-60",
      position: "lg:absolute lg:top-[550px] lg:left-[640px]",
    },
    {
      id: 4,
      icon: "♻️",
      text: "100% recyclable packaging",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-orange-400 bg-opacity-60",
      position: "lg:absolute lg:top-[780px] lg:left-[310px]",
    },
    {
      id: 5,
      icon: "🍴",
      text: "No spices, salt or sugar",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-yellow-400 bg-opacity-60",
      position: "lg:absolute lg:top-[550px] lg:left-[0px]",
    },
    {
      id: 6,
      icon: "📍",
      text: "Small local producer",
      image: "https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/organic_animation_hover_01_home_04.jpg",
      bgColor: "bg-green-400 bg-opacity-60",
      position: "lg:absolute lg:top-[160px] lg:left-[0px]",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-backgroundColor pt-60 p-24 relative">
      {/* Center Image */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-20 hover:scale-110 transition-transform duration-500">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_01_home_04-600x540.png"
          alt="Center Content"
          className="w-96"
        />
      </div>

      {/* Features */}
      <div className="relative w-full h-auto mt-[-220px] flex flex-col justify-center lg:w-[800px] lg:h-[800px] lg:flex-none">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`group relative flex items-center justify-center w-48 h-48 ${feature.bgColor} rounded-full text-white text-center shadow-lg ${feature.position} transition-transform duration-300 ease-in-out overflow-hidden hover:scale-110 hover:animate-morph`}
          >
            {/* Default Content */}
            <div className="absolute flex flex-col items-center justify-center w-full h-full z-10 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-4xl">{feature.icon}</span>
              <p className="mt-4 text-md font-semibold">{feature.text}</p>
            </div>

            {/* Hover Image */}
            <div
              className="absolute w-full  h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              style={{ backgroundImage: `url(${feature.image})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCircle;
