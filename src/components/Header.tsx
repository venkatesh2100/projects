import { useState } from "react";
// import { Button } from "./Button";
import { Button } from "./Button1";
import { handleOrderClick } from "../whatsapp/redirectWhatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  return (
    <div className="w-full realtive h-20 bg-gradient-to-r to-pink-500 fixed">
      {/* Background Image */}
      <div className="  flex justify-between items-center mx-auto p-5 max-w-6xl">
        {/* Logo */}
        <div>
          <div className="w-36">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-between w-8 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-full h-1 bg-white rounded"></span>
          <span className="block w-full h-1 bg-white rounded"></span>
          <span className="block w-full h-1 bg-white rounded"></span>
        </button>

        {/* Menu */}
        <div
          className={`lg:flex flex-col bg-backgroundColor text-sm lg:flex-row gap-6 lg:gap-16 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 bg-backgroundColorease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div>
            <a href="/" className="block text-black font-bold lg:inline hover:text-green-500">
              Home
            </a>
          </div>
          <div>
            <a href="/about" className="block text-black font-bold lg:inline hover:text-green-500">
              About
            </a>
          </div>
          <div>
            <a href="/contact" className="block text-black font-bold lg:inline hover:text-green-500">
              Contact
            </a>
          </div>
          <div>
            <a href="/blog" className="block text-black font-bold lg:inline hover:text-green-500">
              Blog
            </a>
          </div>
        </div>

        {/* Order Button */}
        <div className="hidden lg:flex items-center gap-6">
          <Button text="Order Now" onClick={handleOrderClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
