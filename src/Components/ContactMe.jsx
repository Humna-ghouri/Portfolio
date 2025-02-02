import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h5 className="text-lg font-semibold text-gray-700">GET IN TOUCH</h5>
        <h1 className="text-4xl font-bold mt-2">Contact Me</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed labore et dolore magna aliqua.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <form className="w-full max-w-lg bg-white p-6 rounded-lg "> 
          {/* Name Fields */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2" 
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2" 
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email and Contact Number */}
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2" 
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2" 
                placeholder="Contact Number"
                required
              />
            </div>
          </div>

          {/* Choose a Topic */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="topic">Choose a Topic</label>
            <select
              id="topic"
              className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2" 
              required
            >
              <option value="">Select a topic</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full border border-[#5E3BEE] rounded-md p-2 h-32" 
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#5E3BEE] text-white font-bold py-2 px-4 rounded-md hover:bg-[#4E2BCF]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;