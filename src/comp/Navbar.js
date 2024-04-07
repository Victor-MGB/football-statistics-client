import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Home
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/country"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Country
            </Link>
          </li>
          <li>
            <Link
              to="/leagues"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Leagues
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
