import React, { useState, useEffect } from "react";
import Logo from "/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Career", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#101018] h-[70px]"
          : "bg-transparent h-[70px]"
      }`}
    >
      <div className="mx-auto xl:mx-10 flex items-center justify-between p-4 text-white">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-[40px] md:h-[50px]" />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-8 font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden text-center ${
          isOpen
            ? "max-h-64 opacity-100 bg-[rgba(16,16,24,0.95)]"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 space-y-4 font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
