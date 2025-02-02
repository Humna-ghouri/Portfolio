import React from 'react';
import AboutImage from '../assets/aboutimg.png'; // Replace with your image path

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid container for image and content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={AboutImage}
              alt="About Us"
              className="rounded-lg w-full max-w-md" // Adjust image size and styling
            />
          </div>

          {/* Right side: Heading and Content */}
          <div className="flex flex-col space-y-6">
          <h5 className="text-small font-small text-gray-900 sm:text-small mb-4">
              About 
            </h5>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Us
            </h2>

            {/* Content */}
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}