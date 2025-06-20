import { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaComments, FaEnvelope, FaRocket, FaPlus } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { to: "hero", label: "Home", icon: <FaHome /> },
    { to: "about", label: "About", icon: <FaUser /> },
    { to: "services", label: "Services", icon: <FaBriefcase /> },
    { to: "PortFolio", label: "Portfolio", icon: <FaProjectDiagram /> },
    { to: "Testimonals", label: "Testimonials", icon: <FaComments /> },
    { to: "Contact", label: "Contact", icon: <FaEnvelope /> },
    { to: "Footer", label: "Get Started", icon: <FaRocket />, isButton: true },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="backdrop-blur-md bg-white/30 border border-white/20 shadow-md fixed top-0 left-0 right-0 z-30 px-6 md:px-12 py-4 rounded-b-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-14 w-60 flex items-center">
            <img src="/images/vyomanexgen.png" alt="Vyomanexgen Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 text-gray-800 font-medium text-lg">
            {navLinks
              .filter((link) => !link.isButton)
              .map((link) => (
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

          {/* Mobile FAB Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white bg-yellow-500 rounded-full p-2 text-2xl focus:outline-none transition-transform duration-300"
              style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              aria-label="Toggle navigation menu"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Radial Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-40 md:hidden flex items-center justify-center"
          onClick={() => setMenuOpen(false)} // Close menu when clicking outside
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
            {navLinks.map((link, index) => {
              const angle = (index / navLinks.length) * 360;
              const radius = 100; // Uniform radius for all buttons
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`absolute flex flex-col items-center justify-center w-16 h-16 rounded-full p-2 shadow-md transition-all duration-300 transform hover:scale-110 ${
                    link.isButton
                      ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white"
                      : "bg-white text-gray-800"
                  } ${activeSection === link.to && !link.isButton ? "text-yellow-500 font-semibold" : ""}`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${menuOpen ? 1 : 0})`,
                    transformOrigin: "center",
                  }}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-xs mt-1 truncate max-w-[60px] text-center">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;