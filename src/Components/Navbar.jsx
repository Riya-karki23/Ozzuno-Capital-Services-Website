// src/components/Navbar.jsx

import { useState } from "react";
import logoImg from "../assets/logo-img.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // mobile menu close
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <div className="flex items-center">
  <img
    src={logoImg}
    alt="logo"
    className="h-32 w-auto md:h-46"  
  />
</div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("case")}>Case study</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white border-t px-6 py-4 space-y-4 font-medium text-gray-700">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about ")}>About</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("case")}>Case Study</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      )}
    </nav>
  );
}
