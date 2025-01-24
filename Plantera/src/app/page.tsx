"use client";

import { NavBar } from "../components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import { Mainpage_Hero } from "@/components/home/hero";
import { Main_ProductSection } from "@/components/home/product";
import { Mainpage_Finalsection } from "@/components/home/finalsection";
import { Main_pageNewsletter } from "@/components/home/newletter";

interface ImageProps {
  image: string;
  alt: string;
  name: string;
}

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Main Hero Section */}
      <Mainpage_Hero />
      {/* Product Section */}
      <Main_ProductSection />

      {/* Mid-section */}
      <div className="relative flex items-center h-[80vh] bg-[#E9F6E2] py-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Section 3.png" // Use your image path or imported image
            alt="Mid Section Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex ml-20 justify-start  items-center w-full px-6">
          <div className="relative  border-black p-20 z-10 max-w-2xl text-left mr-8">
            <h2 className="text-5xl font-semibold text-[#11321E] mb-4">
              Elevate Your Space with Plantera
            </h2>
            <p className="text-sm text-[#897E6F] mb-6">
              Plantera offers a wide selection of stunning potted plants that
              are perfect for any room in your home. From low-maintenance
              succulents to lush, trailing vines, our plants are carefully
              chosen to thrive in a variety of environments.
            </p>
            <button className="mt-6 px-4 py-3  w-300 h-74 rounded-full bg-[#123D24] text-[#B1C0A9]  hover:bg-green-800">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <Mainpage_Finalsection />
      {/** New Leater Section*/}
      <Main_pageNewsletter />

      <Footer />
    </div>
  );
}
