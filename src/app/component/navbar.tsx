// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-[#2A254B] text-[#FAFAFA] shadow-lg ">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="text-2xl font-bold tracking-wide">
//           <Link href="/">Eleganza Interiors</Link>
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex space-x-6 lg:p-5">
//           <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/">Home Page</Link>
//           </li>
//           {/* <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/homepage">Home Page v.2</Link>
//           </li> */}
//           {/* <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/product">Product Listing</Link>
//           </li> */}
//           <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/about">About Page</Link>
//           </li>
//           {/* <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/productlist">Product Listings</Link>
//           </li> */}
//           {/* <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/shopping">Shopping Baskets</Link>
//           </li> */}
//           <li className="hover:text-gray-500 transition duration-300">
//             <Link href="/uiux" className="block hover:text-gray-400">Author</Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Toggle Button */}
//         <div className="">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white focus:outline-none"
//             aria-label="Toggle mobile menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#2A254B] text-center space-y-4 py-4">
//           <Link href="/" className="block hover:text-gray-500">
//             Home Page
//           </Link>
//           {/* <Link href="/homepage" className="block hover:text-gray-500">
//             Home Page v.2
//           </Link> */}
//           {/* <Link href="/product" className="block hover:text-gray-500">
//             Product Listing
//           </Link> */}
//           <Link href="/about" className="block hover:text-gray-500">
//             About Page
//           </Link>
//           {/* <Link href="/productlist" className="block hover:text-gray-500">
//             Product Listings
//           </Link> */}
//           {/* <Link href="/cart" className="block hover:text-gray-500">
//             Shopping Baskets
//           </Link> */}
//           <Link href="/uiux" className="block hover:text-gray-500">
//             UI/UX
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

//updated code 
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2A254B] text-[#FAFAFA] shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/">Eleganza Interiors</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 lg:p-5">
          <li className="hover:text-gray-500 transition duration-300">
            <Link href="/">Home </Link>
          </li>
          <li className="hover:text-gray-500 transition duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-500 transition duration-300">
            <Link href="/uiux">Author</Link>
          </li>
        </ul>

        {/* Icons (Visible on All Screens) */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-white hover:text-gray-400">
            <FiShoppingCart className="w-6 h-6" />
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            <FiUser className="w-6 h-6" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2A254B] text-center space-y-4 py-4">
          <Link href="/" className="block hover:text-gray-500">
            Home 
          </Link>
          <Link href="/about" className="block hover:text-gray-500">
            About 
          </Link>
          <Link href="/uiux" className="block hover:text-gray-500">
            Author
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
