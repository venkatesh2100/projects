import { useState } from "react";
import { Button } from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrderClick = () => {
    const phoneNumber = "9032221070";
    const message = encodeURIComponent(
      "Hello, I am interested in the product. Please provide more details."
    );
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="w-full h-16 bg-gradient-to-r to-pink-500 bg-backgroundColor relative shadow-md">
      {/* Background Image */}

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center mx-auto p-5 max-w-6xl">
        {/* Logo */}
        <div>
          <div className="text-3xl font-extrabold tracking-wide drop-shadow-lg">
            Little<span className="text-yellow-300">Diet</span>
          </div>
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

        {/* Menu */}
        <div
          className={`lg:flex flex-col lg:flex-row gap-6 lg:gap-16 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 bg-backgroundColorease-in-out ${
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
            <a href="/blog" className="block lg:inline hover:text-yellow-300">
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
