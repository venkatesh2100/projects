"use client";

import { useSession } from "next-auth/react";
import { NavBar } from "../components/navbar";

export default function Home() {
  const session = useSession();

  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Main Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[#F9EDE2] h-[80vh] p-10">
        <h1 className="text-5xl font-bold text-green-900 mt-10 mb-4">
          Discover the Beauty of Plants
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Welcome to Plantera, your premier destination for lush, vibrant plants that will transform your living space into a serene oasis.
        </p>
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
          Shop Our Collection
        </button>
      </div>

      {/* Product Section */}
      <div className="flex flex-wrap justify-center gap-8 py-10 bg-white">
        {/* Add individual plant images here */}
        <div className="text-center">
          <img src="/path/to/plant1.png" alt="Plant 1" className="h-32 w-32 mx-auto" />
          <p className="mt-2">Snake Plant</p>
        </div>
        <div className="text-center">
          <img src="/DeWatermark.ai_1731693864102.png" alt="Plant 2" className="h-32 w-32 mx-auto" />
          <p className="mt-2">Aloe Vera</p>
        </div>
        {/* Add more plant items as needed */}
      </div>

      {/* Mid-section */}
      <div className="flex items-center justify-center bg-[#F9EDE2] py-16">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-green-900 mb-4">
            Elevate Your Space with Plantera
          </h2>
          <p className="text-lg text-gray-700">
            Plantera offers a wide selection of stunning potted plants that are perfect for any room or setting. Find the perfect plant that brings beauty, tranquility, and a touch of nature to your everyday environment.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Learn More
          </button>
        </div>
      </div>

      {/* Final Section */}
      <div className="py-16 px-10 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Caring for Your Plants
        </h3>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          At Plantera, we believe that nurturing your plants is just as important as choosing the right one. Discover our care guides and learn how to keep your plants thriving.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src="/path/to/plant3.png" alt="Plant 3" className="h-48 w-48 mx-auto" />
          <img src="/path/to/plant4.png" alt="Plant 4" className="h-48 w-48 mx-auto" />
          {/* Add more plant images as necessary */}
        </div>
      </div>
    </div>
  );
}
