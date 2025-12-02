// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo-img.png";

export default function Navbar({ openContact }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "White Papers", to: "/whitePapers" },
    { label: "Contact", to: "/contact" },
  ];

  // Scroll par hide/show
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 
      bg-black/10 backdrop-blur border-b border-white/10
      transition-transform duration-300
      h-16 md:h-28 flex items-center
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 w-full ">
        {/* Logo left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Logo"
              className="h-14 w-auto md:h-48 object-contain"
            />
          </Link>
        </div>

        {/* Desktop links right */}
        <ul
          className="
            hidden md:flex items-center 
            gap-4 lg:gap-8 
            text-xs font-medium
          "
        >
          {navItems.map((item) => (
            <li key={item.label}>
              {item.action === "openContact" ? (
                <button
                  type="button"
                  onClick={openContact}
                  className="
                    bg-transparent
                    text-slate-700
                    relative
                    uppercase
                    tracking-[0.18em] lg:tracking-[0.22em]
                    text-[12px] lg:text-[14px]
                    text-slate-300
                    transition-all
                    duration-200
                    pb-1
                    hover:text-white
                    hover:tracking-[0.22em] lg:hover:tracking-[0.26em]
                    after:content-['']
                    after:absolute
                    after:left-1/2
                    after:-translate-x-1/2
                    after:bottom-0
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-[#eab308]
                    after:to-[#f97316]
                    after:rounded-full
                    after:transition-all
                    after:duration-200
                    hover:after:w-full
                  "
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className="
                    text-slate-700
                    relative
                    uppercase
                    tracking-[0.18em] lg:tracking-[0.22em]
                    text-[12px] lg:text-[14px]
                    text-slate-300
                    transition-all
                    duration-200
                    pb-1
                    hover:text-white
                    hover:tracking-[0.22em] lg:hover:tracking-[0.26em]
                    after:content-['']
                    after:absolute
                    after:left-1/2
                    after:-translate-x-1/2
                    after:bottom-0
                    after:h-[2px]
                    after:w-0
                    after:bg-gradient-to-r
                    after:from-[#eab308]
                    after:to-[#f97316]
                    after:rounded-full
                    after:transition-all
                    after:duration-200
                    hover:after:w-full
                  "
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-1.5 rounded-md border border-white/20"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-[2px] w-5 bg-white"></span>
            <span className="block h-[2px] w-5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#050816] border-t border-white/10">
          <ul className="flex flex-col px-4 py-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.action === "openContact" ? (
                  <button
                    type="button"
                    onClick={() => {
                      openContact();
                      setOpen(false);
                    }}
                    className="
                      block w-full text-left
                      py-2 px-2
                      rounded-md
                      uppercase
                      tracking-[0.2em]
                      text-[11px]
                      text-slate-300
                      hover:text-white
                      hover:bg-white/5
                      transition-all
                      duration-200
                    "
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="
                      block w-full
                      py-2 px-2
                      rounded-md
                      uppercase
                      tracking-[0.2em]
                      text-[11px]
                      text-slate-300
                      hover:text-white
                      hover:bg-white/5
                      transition-all
                      duration-200
                    "
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
