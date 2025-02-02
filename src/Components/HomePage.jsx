import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-9 lg:space-y-0 mt-28 bg-[#F5FCFF] h-auto lg:h-[500px]"> {/* Changed mt-25 to mt-28 */}
      {/* Text Section */}
      <div className="w-full lg:w-[600px] text-center lg:text-left space-y-9 mx-8">
        <h5 className="font-bold mt-10">Hey, I am John</h5>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
          I create <span className="text-indigo-600">product design</span> and brand experience
        </h1>
        <p className="text-base lg:text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md border border-indigo-600 hover:bg-white hover:text-indigo-600 transition-all">
          Get Started
        </button>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center w-full lg:w-[130px] mt-9 lg:mt-0"> {/* Changed lg:mt-50 to lg:mt-0 */}
        <img src="./src/assets/Logo.png" alt="Logo" className="w-[120px] h-[30px]" />
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center h-auto">
        <img
          src="./src/assets/Group 11 1.png"
          alt="Centered Image"
          className="w-full h-auto object-contain rounded-[40px] md:max-w-[400px] lg:max-w-[600px] ml-4"
        />
      </div>
    </div>
  );
};

export default HomePage;