import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 top-4 left-0 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">
          Nitish<span className="text-emerald-400">.</span>
        </div>

        <div className="hidden md:flex items-center gap-6 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
          <a href="#about" className="hover:text-emerald-400">
            About
          </a>
          <a href="#projects" className="hover:text-emerald-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400">
            Contact
          </a>
          <a
            href="#"
            className="text-sm bg-emerald-500/20 border border-emerald-500 px-3 py-1 rounded-full hover:bg-emerald-500/30"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
