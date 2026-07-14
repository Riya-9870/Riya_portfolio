import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#39FF14] tracking-widest">
          RK
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#39FF14] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block px-5 py-2 rounded-lg bg-[#39FF14] text-black font-semibold hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#39FF14]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161B22] px-6 pb-6">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-[#39FF14]"
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="inline-block mt-4 px-5 py-2 rounded-lg bg-[#39FF14] text-black font-semibold"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
