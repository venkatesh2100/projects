import React from "react";

const FeatureCircle: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-backgroundColor pt-60 p-24 relative">
      {/* Center Image */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-20">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/image_01_home_04-600x540.png"
          alt="Center Content"
          className="w-96"
        />
      </div>

      {/* Features */}
      <div className="relative w-full h-auto mt-[-220px] flex flex-col justify-center lg:w-[800px] lg:h-[800px] lg:flex-none">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-green-300 mb-8 lg:absolute lg:top-[10px] lg:left-[310px]">
          <div className="text-4xl">🫙</div>
          <p className="mt-4 text-base font-semibold text-white">
            Cold pressed & always fresh
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-yellow-300 mb-8 lg:absolute lg:top-[160px] lg:left-[620px]">
          <div className="text-4xl">🥗</div>
          <p className="mt-4 text-base font-semibold text-white">
            Fresh in the fridge for 10 days
          </p>
        </div>

        {/* Feature 3 */}
        <div className=" flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-orange-300 lg:absolute lg:top-[550px] lg:left-[640px]">
          <div className="text-4xl">🍎</div>
          <p className="mt-4 text-base font-semibold text-white">
            100% organic ingredients
          </p>
        </div>

        {/* Feature 4 */}
        <div className=" flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-orange-400 mb-8 lg:absolute lg:top-[780px] lg:left-[310px]">
          <div className="text-4xl">♻️</div>
          <p className="mt-4 text-base font-semibold text-white">
            100% recyclable packaging
          </p>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-yellow-400 mb-8 lg:absolute lg:top-[550px] lg:left-[0px]">
          <div className="text-4xl">🍴</div>
          <p className="mt-4 text-base font-semibold text-white">
            No spices, salt or sugar
          </p>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col items-center text-center rounded-full shadow-lg w-56 h-56 p-6 bg-green-400 mb-8 lg:absolute lg:top-[160px] lg:left-[0px]">
          <div className="text-4xl">📍</div>
          <p className="mt-4 text-base font-semibold text-white">
            Small local producer
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCircle;
