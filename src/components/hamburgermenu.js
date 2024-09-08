"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative block md:hidden px-5 z-10">
      <button
        className="text-3xl focus:outline-none flex justify-start"
        onClick={toggleMenu}>
        &#9776;
      </button>
      <nav
        className={`absolute left-0 top-11 bg-main flex flex-col ${
          isOpen ? "block" : "hidden"
        }`}>
        <Link href="/" className="text-white py-2 px-4 hover:bg-gray-600" onClick={closeMenu}> 
          Hem
        </Link>
        <Link href="/about" className="text-white py-2 px-4 hover:bg-gray-600" onClick={closeMenu}>
          Om oss
        </Link>
        <Link
          href="/cars"
          className="text-white py-2 px-4 whitespace-nowrap hover:bg-gray-600" onClick={closeMenu}>
          Våra Bilar
        </Link>
        <Link
          href="/contact"
          className="text-white py-2 px-4 hover:bg-gray-600" onClick={closeMenu}>
          Kontakt
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
