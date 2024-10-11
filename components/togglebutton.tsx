// src/components/Navbar.tsx

import React, { useEffect, useState } from "react";

const ToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDarkMode(theme === "dark");
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, []);

  // Toggle the theme and store it in localStorage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative focus:outline-none"
      >
        <span
          className={`absolute w-6 h-6 bg-white rounded-full transition-transform duration-300 transform ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
        <span className="hidden dark:block text-gray-500">🌙</span>
        <span className="block dark:hidden text-gray-500">☀️</span>
      </button>
  );
};

export default ToggleButton;
