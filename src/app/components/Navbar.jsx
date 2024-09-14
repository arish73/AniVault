"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            {/* Pikachu Image */}
            <img
              src="https://i.pinimg.com/736x/1a/80/1e/1a801ebedf510acb61a063f585a5538f.jpg"
              alt="pokemon pic"
              className="h-18 mr-2 w-10"
            />
            {/* Pokemon Name with different colors */}
            <h1 className="text-2xl font-bold">
              <span className="text-purple-500">Ani</span>
              <span className="text-gray-100">Vault</span>
            </h1>
          </div>

          {/* Center Navigation Links */}
          <ul className="hidden space-x-6 md:flex">
            <li>
              <Link href="/browse-anime" className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500">
                Browse Anime
              </Link>
            </li>
            <li>
              <Link href="/browse-manga" className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500">
                Browse Manga
              </Link>
            </li>
            <li>
              <Link href="/anime-list" className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500">
                Anime List
              </Link>
            </li>
            <li>
              <Link href="/manga-list" className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500">
                Manga List
              </Link>
            </li>
          </ul>

          {/* Right Login/Logout Button */}
          <div>
            <Link href="/logout" className="hidden rounded bg-purple-500 px-4 py-2 text-gray-100 transition-colors duration-200 hover:bg-purple-800 md:flex">
              Logout
            </Link>
          </div>

          {/* The hamburger menu icon */}
          <button
            className="block text-gray-100 focus:outline-none md:hidden"
            id="menuButton" onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className='flex-col md:hidden'>
            <li className="py-2">
              <Link href="/browse-manga" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>
                Browse Manga
              </Link>
            </li>
            <li className="py-2">
              <Link href="/browse-anime" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>
                Browse Anime
              </Link>
            </li>
            <li className="py-2">
              <Link href="/manga-list" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>
                Manga List
              </Link>
            </li>
            <li className="py-2">
              <Link href="/anime-list" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>
                Anime List
              </Link>
            </li>
            <li className="py-2">
              <Link href="/logout" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>
                Logout
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;



// "use client";
// import React, {useState} from 'react';

// const Navbar = () => {

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }

//     return(
//         <>
//                 <nav className="p-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* Logo and Name */}
//         <div className="flex items-center">
//           {/* Pikachu Image */}
//           <img
//             src="https://i.pinimg.com/736x/1a/80/1e/1a801ebedf510acb61a063f585a5538f.jpg"
//             alt="pokemon pic"
//             className="h-18 mr-2 w-10"
//           />
//           {/* Pokemon Name with different colors */}
//           <h1 className="text-2xl font-bold">
//             <span className="text-purple-500">Ani</span>
//             <span className="text-gray-100">Vault</span>
//           </h1>
//         </div>

//         {/* Center Navigation Links */}
//         <ul className="hidden space-x-6 md:flex">
//           <li>
//             <a
//               href="#"
//               className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500"
//             >
//               Browse Anime
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500"
//             >
//               Browse Manga
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500"
//             >
//               Anime List
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="border-b-2 border-transparent font-semibold text-gray-100 transition-colors duration-200 hover:border-purple-500 hover:text-purple-500"
//             >
//               Manga List
//             </a>
//           </li>
//         </ul>

//         {/* Right Login/Logout Button */}
//         <div>
//           <a
//             href="#"
//             className="hidden rounded bg-purple-500 px-4 py-2 text-gray-100 transition-colors duration-200 hover:bg-purple-800 md:flex"
//           >
//             Logout
//           </a>
//         </div>

//         {/* the hamburger menu icon */}
//         <button
//           className="block text-gray-100 focus:outline-none md:hidden"
//           id="menuButton" onClick={toggleMenu}
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//           {/* Mobile Menu */}
//     {isMenuOpen ? (
//         <ul className='flex-col md:hidden'>
//             <li className="py-2"><a href="#" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>Browse Manga</a></li>
//             <li className="py-2"><a href="#" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>Browse Anime</a></li>
//             <li className="py-2"><a href="#" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>Manga List</a></li>
//             <li className="py-2"><a href="#" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>Anime List</a></li>
//             <li className="py-2"><a href="#" className='text-gray-100 font-semibold transition-colors duration-200 hover:text-purple-400'>Logout</a></li>
//         </ul>
//     ):null}
//     </nav>


//         </>
//     )

// }

// export default Navbar;




