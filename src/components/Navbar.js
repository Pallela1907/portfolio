import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky bg-gradient-to-r from-blue-500 to-green-500 text-white p-5 fixed w-screen top-0 left-0 z-10 shadow-lg">
      
      <ul className="flex justify-around">
        <li>
          <Link
            to="/"
            className="px-1 py-2 rounded-lg bg-white text-blue-600 font-semibold transition duration-300 hover:bg-blue-600 hover:text-white shadow-md"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="px-1 py-2 rounded-lg bg-white text-blue-600 font-semibold transition duration-300 hover:bg-blue-600 hover:text-white shadow-md"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="px-1 py-2 rounded-lg bg-white text-blue-600 font-semibold transition duration-300 hover:bg-blue-600 hover:text-white shadow-md"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="px-1 py-2 rounded-lg bg-white text-blue-600 font-semibold transition duration-300 hover:bg-blue-600 hover:text-white shadow-md"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
