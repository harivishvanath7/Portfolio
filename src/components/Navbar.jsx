import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-light text-brand-dark p-4 border-b border-brand-cream sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Hari Vishvanath S
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-brand-olive"><a href="#home">Home</a></li>
          <li className="cursor-pointer hover:text-brand-olive"><a href="#about">About</a></li>
          <li className="cursor-pointer hover:text-brand-olive"><a href="#projects">Projects</a></li>
          <li className="cursor-pointer hover:text-brand-olive"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 pt-4 pb-4">
          <li onClick={() => setOpen(false)} className="cursor-pointer"><a href="#home">Home</a></li>
          <li onClick={() => setOpen(false)} className="cursor-pointer"><a href="#about">About</a></li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">Projects</li>
          <li onClick={() => setOpen(false)} className="cursor-pointer">Contact</li>
        </ul>
      )}

    </nav>
  );
};

export default Navbar;