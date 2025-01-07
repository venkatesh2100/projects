import Image from "next/image";

export const Main_pageNewsletter: React.FC = () => {
  return (
    <div className="relative bg-[#FDECDE]">
      {/* Top Section */}
      <div className="relative py-16 px-10">
        <div className="relative">
          {/* Top-left Image */}
          <div className="absolute top-0 left-0 w-48 h-48">
            <Image
              src="/plantera Home ui Images/Image 11.png"
              alt="Top Left Background"
              width={126}
              height={188}
              // className="rounded-lg shadow-lg"
            />
          </div>
          {/* Content */}
          <div className="relative z-10 px-80 py-20">
            <h3 className="text-6xl font-semibold text-[#090707] mb-5">
              Explore Our Collection
            </h3>
            <p className="text-[#958B81]  mb-10">
              Discover a world of lush, vibrant plants at Plantera. Our carefully
              curated collection features a diverse range of species, from
              low-maintenance succulents to towering floor plants, all chosen to
              bring natural beauty and air-purifying benefits to your living space.
            </p>
            <button className="rounded-xl bg-[f3f3f3] text-[#87807A]  px-6 py-3">
              Sign Up for Our Newsletter
            </button>
          </div>
          {/* Bottom-right Image */}
          <div className="absolute bottom-0 right-0 w-60 h-60">
            <Image
              src="/plantera Home ui Images/Image 12.png"
              alt="Bottom Right Background"
              height={505}
              width={514}
              // className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center bg-white py-16 gap-8">
        {/* Left Image */}
        <div className="w-full mr-40 lg:w-1/2 flex justify-center">
          <Image
            src="/plantera Home ui Images/Image 13.png"
            alt="Outdoor Plants"
            width={736}
            height={800}
            className=""
          />
        </div>
        {/* Right Content */}
        <div className="w-full px-20 lg:w-1/2">
          <h1 className="text-5xl font-semibold mb-5 text-[#183D1E]">
            Elevate Your Outdoor Oasis
          </h1>
          <p className="text-[#A2A3A1] mb-8">
            Transform your patio, balcony, or garden into a lush, inviting retreat
            with Plantera's selection of outdoor plants. From blooming flowers to
            hardy, drought-resistant shrubs, our plants are designed to thrive in
            various climates and conditions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0D401D] text-[#D7DFD1] px-4 py-3 rounded-full">
              Shop Out
            </button>
            <button className=" text-[#A1A2A0] px-5 py-2 rounded-md">
              Care Tips
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#0D401D] text-[#D7DFD1] px-4 py-3 rounded-full">
              Explore Accounts
            </button>
            <button className="px-5 text-[#A1A2A0] py-2 rounded-md">
              Plant Subscriptions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
