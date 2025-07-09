// src/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn’t exist or you’re not authorized to view it.</p>
      <Link
        to="/"
        className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition"
      >
        🔙 Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
