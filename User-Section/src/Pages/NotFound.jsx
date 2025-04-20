// src/Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
            <p className="text-md text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
