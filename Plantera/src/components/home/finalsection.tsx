import Image from "next/image";

export const Mainpage_Finalsection: React.FC = () => {
  const plantCareItems = [
    {
      image: "/plantera Home ui Images/Image 7.png",
      alt: "Watering Tips",
      title: "Watering Tips",
      description: "Learn the best watering schedule to keep your plants healthy and thriving.",
    },
    {
      image: "/plantera Home ui Images/Image 8.png",
      alt: "Sunlight Needs",
      title: "Sunlight Needs",
      description: "Understand the light requirements for different types of plants.",
    },
    {
      image: "/plantera Home ui Images/Image 9.png",
      alt: "Soil & Nutrition",
      title: "Soil & Nutrition",
      description: "Discover the perfect soil mixes and fertilizers for your plants.",
    },
    {
      image: "/plantera Home ui Images/Image 10.png",
      alt: "Pruning Techniques",
      title: "Pruning Techniques",
      description: "Master the art of pruning to promote growth and maintain plant health.",
    },
  ];

  return (
    <div className="py-16 px-10 bg-white">
      <h3 className="text-5xl font-semibold text-center text-[#0B0A0C] mb-8">
        Caring for Your Plants
      </h3>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        At Plantera, we believe that nurturing your plants is just as important
        as choosing the right ones. Our expert team has put together a
        comprehensive guide to help you provide the best care for your new green
        companions.
      </p>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plantCareItems.map((item, index) => (
          <div key={index} className="text-center">
            <Image
              src={item.image}
              alt={item.alt}
              width={192}
              height={192}
              className="mx-auto"
            />
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};
