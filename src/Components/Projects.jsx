import React from 'react';
import Img1 from '../assets/Image.png'; // Ensure this matches the actual file name
import Img2 from '../assets/image2.png'; // Ensure this matches the actual file name
import Img3 from '../assets/Image3.png'; // Ensure this matches the actual file name
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon from React Icons

const projects = [
  {
    id: 1,
    imageUrl: Img1,
    title: 'Ahuse',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    imageUrl: Img2,
    title: "App Dashboard",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    imageUrl: Img3,
    title: 'Easy Rent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function ProjectPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover" // Adjust image height
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                  <br />
                  Lorem ipsum dolor sit amet.
                </p>

                <div className="mt-auto flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="mr-2">View in Dribble</span>
                  <FaArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}