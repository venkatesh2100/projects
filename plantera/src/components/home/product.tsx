import Image from "next/image";
import React from "react";

export const Main_ProductSection: React.FC = () => {
  const ProductCard = ({ image, alt, name }: { image: string; alt: string; name: string }) => (
    <div className="text-center flex-shrink-0">
      <Image src={image} alt={alt} width={128} height={128} />
      <p className="mt-2">{name}</p>
    </div>
  );

  return (
    <div className="relative overflow-hidden bg-white py-10">
      <div className="flex items-center gap-8 animate-scroll">
        {/* Render product cards */}
        {/* <ProductCard
          image="/plantera Home ui Images/Image 1.png"
          alt="Aloe Vera"
          name="Aloe Vera"
        /> */}
        <ProductCard
          image="/plantera Home ui Images/Image 2.png"
          alt="Snake Plant"
          name="Snake Plant"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 3.png"
          alt="Peace Lily"
          name="Peace Lily"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 4.png"
          alt="Spider Plant"
          name="Spider Plant"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 5.png"
          alt="Cactus"
          name="Cactus"
        />
        {/* Duplicate cards for seamless animation */}
        {/* <ProductCard
          image="/plantera Home ui Images/Image 1.png"
          alt="Aloe Vera"
          name="Aloe Vera"
        /> */}
        <ProductCard
          image="/plantera Home ui Images/Image 2.png"
          alt="Snake Plant"
          name="Snake Plant"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 3.png"
          alt="Peace Lily"
          name="Peace Lily"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 4.png"
          alt="Spider Plant"
          name="Spider Plant"
        />
        <ProductCard
          image="/plantera Home ui Images/Image 5.png"
          alt="Cactus"
          name="Cactus"
        />
      </div>
    </div>
  );
};
