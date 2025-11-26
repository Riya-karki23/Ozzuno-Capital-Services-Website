// src/components/Navbar.jsx

import { useState } from "react";
import logoImg from "../assets/logo-img.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
  <img
    src={logoImg}
    alt="logo"
    className="h-32 w-auto md:h-46"  // yahan size control karo
  />
</div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>Industries</li>
          <li>Services</li>
          <li>Issues</li>
          <li>About us</li>
          <li>Careers</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t px-6 py-4 space-y-4 font-medium text-gray-700">
          <li>Industries</li>
          <li>Services</li>
          <li>Issues</li>
          <li>About us</li>
          <li>Careers</li>
        </ul>
      )}
    </nav>
  );
}
