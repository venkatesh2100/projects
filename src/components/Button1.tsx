import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void; // Define onClick as an optional prop
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-300 text-black px-6 py-3 rounded-lg hover:bg-yellow-400"
    >
      {text}
    </button>
  );
};
