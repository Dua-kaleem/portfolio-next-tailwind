"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='flex justify-between items-center w-full p-4 px-12 font-poppins top-0 fixed backdrop-blur-md z-30 rounded-full '>
      {/* Logo Section */}
      <div className="text-[50px] font-bold">
        <span className="text-[var(--hover-color)]">D</span>ua.
      </div>

      {/* Hamburger Menu Icon */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-[var(--text-color)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`lg:flex lg:space-x-6 lg:items-center space-y-4 lg:space-y-0 absolute lg:relative bg-gray-900 lg:bg-transparent w-full lg:w-auto left-0 top-16 lg:top-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <Link href={"/"} passHref>
          <li className="py-2 px-4 font-medium text-[var(--text-color)] hover:text-[var(--hover-color)] neon-text">
            Home
          </li>
        </Link>

        <Link href={"/about"} passHref>
          <li className="py-2 px-4 font-medium text-[var(--text-color)] hover:text-[var(--hover-color)] neon-text">
            About
          </li>
        </Link>

        <Link href={"/project"} passHref>
          <li className="py-2 px-4 font-medium text-[var(--text-color)] hover:text-[var(--hover-color)] neon-text">
            Projects
          </li>
        </Link>

        <Link href={"/skills"} passHref>
          <li className="py-2 px-4 font-medium text-[var(--text-color)] hover:text-[var(--hover-color)] neon-text">
            Skills
          </li>
        </Link>

        <Link href="/contact" passHref>
          <li className="py-2 px-4 font-medium text-[var(--text-color)] hover:text-[var(--hover-color)] neon-text">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
