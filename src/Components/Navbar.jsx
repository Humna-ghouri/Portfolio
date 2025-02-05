// import React, { useState } from 'react';
// import { Dialog, DialogPanel } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Home', href: '#' },
//   { name: 'Portfolio', href: '#' },
//   { name: 'About Me', href: '#' },
//   { name: 'Testimonials', href: '#' },
// ];

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       {/* Navbar */}
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img alt="Logo" src="/logo.png" className="h-8 w-auto" />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a
//               href="#"
//               className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 border border-[#5E3BEE] bg-white hover:bg-gray-50"
//             >
//               Contact Me
//             </a>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img alt="Logo" src="/logo.png" className="h-8 w-auto" />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 border border-[#5E3BEE] bg-white hover:bg-gray-50"
//                   >
//                     Contact Me
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>

//       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-9 lg:space-y-0">
  
//   {/* Left Content - Centered */}
//   <div className="w-full lg:w-[560px] text-center lg:text-left space-y-9">
//     <h5 className="font-bold">Hey, I am John</h5>
//     <h1 className="text-5xl font-bold text-gray-900">
//       I create <span className="text-purple">product design</span> and brand experience
//     </h1>
//     <p className="text-lg text-gray-600">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
//     </p>
//     <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md border border-indigo-600 
//       hover:bg-white hover:text-indigo-600 transition-all">
//       Get Started
//     </button>
//   </div>

//   {/* Center Logo - Positioned Below */}
//   <div className="flex justify-center w-[150px] mt-9 lg:mt-0">
//     <img src="./src/assets/Logo.png" alt="Logo" className="w-[120px] h-[20px]" />
//   </div>

//   {/* Right Image - Fixed Alignment & Responsive */}
//   <div className="w-full lg:w-[459px] h-[400px] rounded-[40px] overflow-hidden mt-9 lg:mt-0">
//     <img 
//       src="./src/assets/Group 11 1.png" 
//       alt="Right Section Image" 
//       className="w-full h-full object-cover rounded-[40px]" 
//     />
//   </div>
// </div>
// )}


import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'About Me', href: '#' },
  { name: 'Testimonials', href: '#' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src="../src/assets/Logo.png" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 border border-[#5E3BEE] bg-white hover:bg-[#5E3BEE]"
            >
              Contact Me
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="Logo" src="./src/assets/Logo.png" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 border border-[#5E3BEE] bg-white hover:bg-gray-50"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

</div>    
  );
}
