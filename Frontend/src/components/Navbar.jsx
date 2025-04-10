import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-transparent px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#6c00af]">
          FAVstudies
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#7806c0] font-medium">
          <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer text-[#7806c0]" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white/40 backdrop-blur-2xl shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-2xl text-[#7806c0] mt-2 font-extrabold" onClick={toggleMenu}>
            <RxCross1 />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 px-6 text-[#7806c0] font-semibold">
          <li><Link to="/" onClick={toggleMenu} className="hover:text-purple-500">Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="hover:text-purple-500">About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className="hover:text-purple-500">Contact</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
