import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "PortFolio", label: "Portfolio" },
    { to: "Testimonals", label: "Testimonials" },
    { to: "Contact", label: "Contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/30 border border-white/20 shadow-md fixed top-0 left-0 right-0 z-30 px-6 md:px-12 py-4 rounded-b-2xl">
      <div className="flex items-center justify-between">
        <div className="h-14 w-60 flex items-center">
          <img src="/images/vyomanexgen.png" alt="Vyomanexgen Logo" />
        </div>

        <div className="hidden md:flex items-center space-x-5 text-gray-800 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer transition duration-300 relative ${
                activeSection === link.to
                  ? "text-yellow-500 font-bold after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 after:rounded-full"
                  : "hover:text-yellow-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="Footer" smooth={true} duration={500}>
            <button className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl font-semibold ml-4">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-600 text-3xl font-bold focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-4 text-gray-800 font-medium bg-white/90 p-4 rounded-xl shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => setMenuOpen(false)}
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer transition duration-300 ${
                activeSection === link.to ? "text-yellow-500 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="Footer" smooth={true} duration={500}>
            <button className="w-fit bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl font-semibold">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
