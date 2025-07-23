import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons
import logo from '../assets/Logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#F5FCFF] py-12"> {/* Increased vertical padding for footer height */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
             src={logo}
             alt="Logo" className="mr-4 h-12 w-auto" /> {/* Adjusted height */}
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">About Me</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Contact</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Testimonials</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]"><FaFacebook /></a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]"><FaInstagram /></a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]"><FaTwitter /></a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]"><FaLinkedin /></a>
          </div>
        </div>

        {/* Break Line */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Made with Love and Links */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h5 className="text-sm text-gray-600 mr-2">Made with ❤️ by Humna Ghouri</h5>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Terms of Service</a>
            <a href="#" className="text-gray-700 hover:text-[#5E3BEE]">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;