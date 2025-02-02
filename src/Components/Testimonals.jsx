import React from "react";
import clientImage from '../assets/Avatar Image (2).png'; 
import clientImage2 from '../assets/Avatar Image (1).png'; 
import clientImage3 from '../assets/Avatar Image.png'; 

const Testimonials = () => {
  return (
    <div className="container mx-auto px-9 py-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h5 className="text-lg font-semibold text-gray-700">CLIENT FEEDBACK</h5>
        <h1 className="text-4xl font-bold mt-2">Customers Testimonials</h1>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-4"> {/* Added padding to the card wrapper */}
          <div className="border rounded-lg p-6 shadow-md" style={{ borderColor: "#006B6A" }}>
            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#006B6A]">&#9733;</span>
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Client Image and Name */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={clientImage}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <h4 className="text-sm text-gray-500">Company Name</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4"> {/* Added padding to the card wrapper */}
          <div className="border rounded-lg p-6 shadow-md" style={{ borderColor: "#006B6A" }}>
            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#006B6A]">&#9733;</span>
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Client Image and Name */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={clientImage2}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Jane Smith</h2>
                <h4 className="text-sm text-gray-500">Company Name</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4"> {/* Added padding to the card wrapper */}
          <div className="border rounded-lg p-6 shadow-md" style={{ borderColor: "#006B6A", }}>
            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#006B6A]">&#9733;</span>
              ))}
            </div>
            {/* Testimonial Text */}
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Client Image and Name */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={clientImage3}
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Alice Johnson</h2>
                <h4 className="text-sm text-gray-500">Company Name</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;