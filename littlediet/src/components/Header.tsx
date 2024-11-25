import { useState } from "react";
import { Button } from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOrderClick = () => {
        const phoneNumber = "9032221070"; // Replace with your WhatsApp number
        const message = encodeURIComponent("Hello, I am interested in the product. Please provide more details.");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    };

  return (
    <div className="w-full bg-gradient-to-r   to-pink-500 bg-backgroundColor  relative shadow-md">
      {/* Background Image */}
      <div className="absolute -top-1">
        <img
          src="https://bambino.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/07/White_wave_background.png"
          alt="Background"
          className="w-full opacity-30"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center mx-auto p-5 max-w-6xl">
        {/* Logo */}
        <div>
          <div className="text-3xl font-extrabold tracking-wide drop-shadow-lg">
            Little<span className="text-yellow-300">Diet</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex  items-center w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg text-black outline-none"
          />
          <button className="ml-2 px-4 mr-10 py-2 bg-yellow-300 text-black rounded-lg shadow-md hover:bg-yellow-400">
            Search
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-between w-8 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-full h-1 bg-black rounded"></span>
          <span className="block w-full h-1 bg-black rounded"></span>
          <span className="block w-full h-1 bg-black rounded"></span>
        </button>

        {/* Links */}
        <div
          className={`lg:flex flex-col lg:flex-row gap-6 lg:gap-16 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r  lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300  bg-backgroundColorease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div>
            <a href="/" className="block lg:inline hover:text-yellow-300">
              Home
            </a>
          </div>
          <div>
            <a href="/about" className="block lg:inline hover:text-yellow-300">
              About
            </a>
          </div>
          <div>
            <a href="/contact" className="block lg:inline hover:text-yellow-300">
              Contact
            </a>
          </div>
          <div>
            <a href="/blog" className="block lg:inline  hover:text-yellow-300">
              Blog
            </a>
          </div>
        </div>

        {/* Cart and Profile */}
        <div className="hidden lg:flex items-center gap-6">
          {/* <div className="relative">
            <a
              href="/cart"
              className="flex items-center  gap-2 px-1  py-2 bg-yellow-300 text-black rounded-lg shadow-md  hover:bg-yellow-400"
            >
              <span>Cart</span>
              <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            </a>
          </div> */}
          {/* <a
            href="/profile"
            className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200"
          > */}
         <Button text="Order Now" onClick={handleOrderClick} />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
