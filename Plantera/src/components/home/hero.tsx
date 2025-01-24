import Image from "next/image";

export const Mainpage_Hero: React.FC = () => {
  return (
    <div className="relative h-[100vh] mt-10 bg-[#F9EDE2]">
      {/* Background Image */}
      <Image
        src="/plantera Home ui Images/Section 2.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: "cover", zIndex: "1" }}
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-[600px] px-40 pl-10 text-left">
        <h1 className="text-5xl font-bold text-[#121A18] mb-4">
          Discover the Beauty of Plantera
        </h1>
        <p className="text-lg text-[#5B4423] mb-6">
          Elevate your living space with Plantera&apos;s vibrant collection of
          lush, healthy plants. Explore our top-sellers, learn expert care tips,
          and sign up for our newsletter to stay in the loop on all things
          plant-related.
        </p>
        <button className="py-3 bg-[#FEFEFE] text-[#7B8980] font-medium rounded-full shadow-md hover:bg-green-800 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};
