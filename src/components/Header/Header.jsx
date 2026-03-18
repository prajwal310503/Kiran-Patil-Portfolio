import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import logo from "../../assets/bjp.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium">
          <Link to="/" className="transition duration-200  hover:scale-105">Home</Link>
          <Link to="/about" className="transition duration-200 hover:scale-105">About</Link>
          <Link to="/gallery" className="transition duration-200  hover:scale-105">Gallery</Link>
          <Link to="/blogs" className="transition duration-200  hover:scale-105">Events</Link>


        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-white text-gray-800 px-6 py-1 rounded-2xl font-semibold hover:bg-gray-100">
            Join Us
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block">Gallery</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="block">Blogs</Link>

          <div className="pt-4 flex flex-col gap-3">
            <button className="bg-white text-gray-800 px-4 py-1 rounded-2xl font-semibold">
              Join Us
            </button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
