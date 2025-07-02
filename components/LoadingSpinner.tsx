
import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4 p-8">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-amber-300 border-t-transparent rounded-full animate-spin"></div>
      <svg
        className="w-8 h-8 absolute top-1/2 left-1/2 -mt-4 -ml-4 text-amber-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <p className="text-amber-200 font-serif-display text-lg tracking-wider">DEDUZINDO...</p>
  </div>
);

export default LoadingSpinner;