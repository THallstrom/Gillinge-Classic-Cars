"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative block md:hidden px-5">
      <button
        className="text-3xl focus:outline-none flex justify-start"
        onClick={toggleMenu}>
        &#9776;
      </button>
      <nav
        className={`absolute left-0 top-11 bg-main flex flex-col ${
          isOpen ? "block" : "hidden"
        }`}>
        <Link href="/" className="text-white py-2 px-4 hover:bg-gray-600">
          Home
        </Link>
        <Link href="/about" className="text-white py-2 px-4 hover:bg-gray-600">
          About
        </Link>
        <Link
          href="/cars"
          className="text-white py-2 px-4 hover:bg-gray-600">
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white py-2 px-4 hover:bg-gray-600">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
