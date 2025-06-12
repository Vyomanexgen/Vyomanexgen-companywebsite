// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/30 border border-white/20 shadow-md fixed top-0 left-0 right-0 z-30 px-6 md:px-12 py-4 rounded-b-2xl">
      <div className="flex items-center justify-between">
        <div className="h-14 w-60 flex items-center">
          <img src="/images/vyomanexgen.png" alt="Vyomanexgen Logo" />
        </div>

        <div className="hidden md:flex items-center space-x-5 text-gray-800 font-medium text-lg">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
  Home
</Link>
<Link to="about" smooth={true} duration={500} className="cursor-pointer">
  About
</Link>
          <Link to="services" smooth={true} duration={500} className="cursor-pointer">
  Services
</Link>
  <Link to="PortFolio" smooth={true} duration={500} className="cursor-pointer">
  PortFolio
</Link>
          <Link to="Testimonals" smooth={true} duration={500} className="cursor-pointer">
  Testimonals
</Link>
                <Link to="Contact" smooth={true} duration={500} className="cursor-pointer">
  Contact 
</Link>
          <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl font-semibold ml-4">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-purple-600 text-3xl font-bold focus:outline-none"
>
  {menuOpen ? '✕' : '☰'}
</button>

        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4 text-gray-800 font-medium">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
<Link to="about" smooth={true} duration={500}>About</Link>
<Link to="services" smooth={true} duration={500}>Services</Link>
<Link to="contact" smooth={true} duration={500}>Contact</Link>
          <button className="w-fit bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
