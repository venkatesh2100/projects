import React, { useEffect, useState } from 'react';
// import { cn } from '../../src/app/lib/utils';
const ToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showFullScreen, setShowFullScreen] = useState<boolean>(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setIsDarkMode(theme === 'dark');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, []);

  // Toggle the theme and full-screen display
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);

    setShowFullScreen(true);

    setTimeout(() => {
      setShowFullScreen(false);
    }, 100);
  };

  return (
    <div>
      {showFullScreen && (
        <div className="full-screen-content absolute inset-0 flex items-center justify-center -z-40 bg-opacity-75">
        </div>
      )}
      <button
        onClick={toggleTheme}
        className={`relative z-10 flex items-center justify-between w-16 h-8 p-1 bg-gray-300 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
        aria-label="Toggle Dark Mode"
      >
        {/* Sun Icon (Light Mode) */}
        <span
          className={`flex items-center justify-center w-6 h-6 text-yellow-500 transition-transform duration-500 ${
            isDarkMode
              ? '-translate-x-8 opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          ☀️
        </span>

        {/* Moon Icon (Dark Mode) */}
        <span
          className={`flex items-center justify-center w-6 h-6 text-gray-300 transition-transform duration-500 ${
            isDarkMode ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          🌙
        </span>

        {/* Toggle Indicator */}
        <span
          className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-500 ${
            isDarkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>

      {/* Full-Screen Styles */}
      <style jsx>{`
        .full-screen-content {
          background-color: rgba(0, 0, 0, 0.8);
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ToggleButton;
