import { useState, useEffect } from "react";
import { Button } from "./Button1";
import { handleOrderClick } from "../whatsapp/redirectWhatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than a threshold
      if (window.scrollY > 1000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-gradient-to-r"
      }`}
    >
      <div className="flex justify-between items-center mx-auto p-5 max-w-6xl">
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
          <span className="block w-full h-1 bg-black rounded"></span>
          <span className="block w-full h-1 bg-black rounded"></span>
          <span className="block w-full h-1 bg-black rounded"></span>
        </button>

        {/* Menu */}
        <div
          className={`lg:flex flex-col bg-transparent  text-md lg:flex-row gap-6 lg:gap-16 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"

            } ${
              isScrolled ? "bg-backgroundColor shadow-md" : "bg-gradient-to-r"
              }`}
              style={{ backgroundColor: "#D5C2B1" }}
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
          <div className="text-black font-bold lg:inline hover:text-green-500">
            <button onClick={scrollToFooter}>Contact</button>
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
