import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const Links = [
    { id: 1, name: "Accueil", path: "/" },
    { id: 2, name: "À propos", path: "/about" },
    { id: 3, name: "Blog", path: "/blog" },
    { id: 4, name: "Contactez-nous", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b-4 border-gray-300 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {Links.map((link) => (
              <Link
                to={link.path}
                key={link.id}
                className={`${
                  location.pathname === link.path
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                } px-3 py-2 rounded-full text-sm font-medium hover:text-gray-900`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <IoMdClose size={30} /> : <MdOutlineMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-4 h-screen bg-gray-500 font-medium sm:px-3">
            {Links.map((link) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to={link.path}
                key={link.id}
                className={`${
                  location.pathname === link.path
                    ? "bg-green-500 text-white"
                    : "text-white"
                } block text-2xl px-3 py-2 rounded-md hover:text-gray-900`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
