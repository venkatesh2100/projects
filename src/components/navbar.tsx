import React from "react";
import Image from "next/image";

export const NavBar: React.FC = () => {
  return (
    <div className="fixed w-full top-0 z-50 backdrop-blur-md shadow-md py-3 px-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" height={30} width={40} />
          <div className="font-semibold text-xl text-gray-800">Plantera</div>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-6 text-sm">
          <div className="text-[#5B4423] hover:text-green-600 font-medium cursor-pointer transition duration-300">
            Home
          </div>
          <div className="text-[#5B4423] hover:text-green-600 font-medium cursor-pointer transition duration-300">
            About
          </div>
          <div className="text-[#5B4423] hover:text-green-600 font-medium cursor-pointer transition duration-300">
            Products
          </div>
          <div className="text-[#5B4423] hover:text-green-600 font-medium cursor-pointer transition duration-300">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};
