import React from "react";

const FeatureCircle: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-backgroundColor py-20 relative">
      {/* Center Image */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-20">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_01_home_04-600x540.png"
          alt="Center Content"
          className="sm:h-96 h-40"
        />
      </div>

      {/* Features in Circular Layout */}
      <div className="relative sm:w-[800px] sm:h-[800px] w-[400px] h-[400px] mt-[-120px] sm:mt-[-220px]">
        {/* Feature 1 - Top */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-green-300"
          style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="text-2xl sm:text-4xl">🫙</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            Cold pressed & always fresh
          </p>
        </div>

        {/* Feature 2 - Top Right */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-yellow-300"
          style={{ top: "25%", left: "85%", transform: "translateX(-50%)" }}
        >
          <div className="text-2xl sm:text-4xl">🥗</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            Fresh in the fridge for 10 days
          </p>
        </div>

        {/* Feature 3 - Bottom Right */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-orange-300"
          style={{ top: "75%", left: "85%", transform: "translateX(-50%)" }}
        >
          <div className="text-2xl sm:text-4xl">🍎</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            100% organic ingredients
          </p>
        </div>

        {/* Feature 4 - Bottom */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-orange-400"
          style={{ top: "95%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <div className="text-2xl sm:text-4xl">♻️</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            100% recyclable packaging
          </p>
        </div>

        {/* Feature 5 - Bottom Left */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-yellow-400"
          style={{ top: "75%", left: "15%", transform: "translateX(-50%)" }}
        >
          <div className="text-2xl sm:text-4xl">🍴</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            No spices, salt or sugar
          </p>
        </div>

        {/* Feature 6 - Top Left */}
        <div
          className="absolute flex flex-col items-center text-center rounded-full shadow-lg sm:w-56 sm:h-56 w-28 h-28 p-4 sm:p-6 bg-green-400"
          style={{ top: "25%", left: "15%", transform: "translateX(-50%)" }}
        >
          <div className="text-2xl sm:text-4xl">📍</div>
          <p className="mt-2 sm:mt-4 text-xs sm:text-base font-semibold text-white">
            Small local producer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCircle;
