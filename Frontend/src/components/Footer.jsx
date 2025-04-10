import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-200 py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#7806c0]">
        {/* Left Section */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          FAV
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li className="hover:text-purple-500 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-purple-500 cursor-pointer">Terms of Service</li>
          <li className="hover:text-purple-500 cursor-pointer">Contact</li>
        </ul>

        {/* Socials or Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} FAVstudies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
