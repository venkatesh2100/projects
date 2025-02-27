// components/NeonBlogSkeleton.tsx
import React from 'react';

const NeonBlogSkeleton = () => {
  return (
    <div className="relative border border-gray-700 rounded-2xl w-80 p-4 h-200 mt-10 bg-gray-900 animate-pulse max-w-md mx-auto shadow-lg overflow-hidden mb-6 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-lg"></div>
      <div className="relative h-32 bg-gray-800 rounded-lg mb-4 "></div>
      <div className="relative h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
      <div className="relative h-4 bg-gray-800 rounded w-1/2 mb-2"></div>
      <div className="relative h-4 bg-gray-800 rounded w-2/3 mb-2"></div>
      <div className="relative h-4 bg-gray-800 rounded w-1/3"></div>
      <div className="relative h-4 bg-gray-800 rounded w-2/3 mb-2"></div>
      <div className="relative h-4 bg-gray-800 rounded w-1/3"></div>
      <div className="relative h-4 bg-gray-800 rounded w-2/3"></div>
    </div>
  );
};

export default NeonBlogSkeleton;
