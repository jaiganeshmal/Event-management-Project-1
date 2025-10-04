import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-6">
      
      {/* Warning Icon */}
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-6 animate-bounce" />

      {/* Heading */}
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-lg mb-8">
        The link you clicked may be broken or the page may have been removed.  
        Don’t worry, let’s get you back on track.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-yellow-400 transition duration-300"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
