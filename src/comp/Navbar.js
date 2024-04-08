import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Home
        </Link>
        <div className="flex items-center">
          <div className="hidden md:block">
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
              <li>
                <Link
                  to="/fixtures"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Fixtures
                </Link>
              </li>
              <li>
                <Link
                  to="/h2h"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  H2H
                </Link>
              </li>
              <li>
                <Link
                  to="/livescore"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  LiveScore
                </Link>
              </li>
              <li>
                <Link
                  to="/standings"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Standings
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20 ${
          isOpen ? "visible" : "invisible"
        } transition-opacity duration-300`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`md:hidden fixed inset-y-0 right-0 bg-gray-800 w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-30 transition-transform duration-300`}
      >
        <div className="p-4">
          <ul className="flex flex-col space-y-4">
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
            <li>
              <Link
                to="/fixtures"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Fixtures
              </Link>
            </li>
            <li>
              <Link
                to="/h2h"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                H2H
              </Link>
            </li>
            <li>
              <Link
                to="/livescore"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                LiveScore
              </Link>
            </li>
            <li>
              <Link
                to="/standings"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Standings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
