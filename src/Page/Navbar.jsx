// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className=" w-full px-4 py-3 flex items-center justify-between ">
        {/* Left Icon */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-lg">
            <span className="font-bold">L</span>
          </div>
        </div>

        {/* Large screen heading */}
        <div className="hidden lg:block  text-center font-semibold text-lg">
         <ul className="flex  p-4 gap-3">
            <li>
              <a href="#" className="block hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Large screen button */}
          <button className="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Button
          </button>

          {/* Small/Medium screen Hamburger */}
          <button
            className="lg:hidden ml-2 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu for small/medium screens */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col p-4 gap-3">
            <li>
              <a href="#" className="block hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
