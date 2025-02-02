import React from 'react';
// Import images from the assets folder
import Img1 from '../assets/chain.png';
import Img2 from '../assets/tag 1.png';
import Img3 from '../assets/feather-pen 1.png';
import Img4 from '../assets/feather-pen 1 (1).png';

const cards = [
  {
    id: 1,
    imageUrl: Img1, // Use the imported image
    title: "Strategy & Direction",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    imageUrl: Img2, // Use the imported image
    title: 'Branding & Logo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    imageUrl: Img3, // Use the imported image
    title: 'UI & UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    imageUrl: Img4, // Use the imported image
    title: "Webflow Development",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function MyExpertice() {
  return (
    <div className="bg-white py-24 sm:py-32" style={{ marginLeft: '5px' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h4 className="text-xl font-semibold text-gray-900">My Skill</h4>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">My Experience</h1>
        </div>
        {/* Cards Grid with Tailwind gap utility for spacing */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col p-8 bg-[#F5FCFF] rounded-lg border-b-4 border-gray-300"
            >
              <div className="h-16 w-16 bg-white  rounded-lg flex items-center justify-center ">
                <img
                  src={card.imageUrl}
                  alt=""
                  className="h-14 w-14 rounded-lg mt-0" // Adjusted size and shape
                />
              </div>             
              
               <h2 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h2>
              {/* Description */}
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}