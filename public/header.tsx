import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LOGO_URL = "/samuri.png"; // Update with the path to your logo

const DynamicHeader = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // Dynamically set the document title based on the route
    switch (pathname) {
      case "/":
        document.title = "Home - My Website";
        break;
      case "/blog":
        document.title = "Blog - My Website";
        break;
      case "/aboutme":
        document.title = "About Me - My Website";
        break;
      default:
        document.title = "My Website";
    }
  }, [location]);

  return (
    <header className="flex items-center justify-between p-4">
      <img src={LOGO_URL} alt="Logo" className="h-8" />
      <h1 className="text-xl font-bold">
        {document.title.replace(" - My Website", "")}
      </h1>
    </header>
  );
};

export default DynamicHeader;
