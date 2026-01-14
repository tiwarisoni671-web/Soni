import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white font-opensans sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-[#d4af37]/20" : ""
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-10 py-5">
        {/* LOGO */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Nebula Logo" className="h-22 w-auto" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-7 text-[15px] font-semibold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/account-types"
            >
              Account Types
            </NavLink>
          </li>

          {/* ================= INSTRUMENTS ================= */}
          <li className="relative group">
            {/* Trigger */}
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition ${
                ["/forex", "/metals", "/oil", "/index", "/crypto"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Instruments List <ChevronDown size={14} />
            </div>

            {/* Dark Background (Navbar style) */}
            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>

            {/* Dropdown */}
            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/forex">Forex</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/metals">Metals</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/oil">Oil & Commodities</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/index">Spot Index</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/crypto">Cryptocurrency</Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/academy"
            >
              Academy
            </NavLink>
          </li>

          {/* ================= CALCULATOR ================= */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition ${
                ["/margin-calculator", "/profit-calculator"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Calculator <ChevronDown size={14} />
            </div>

            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>

            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/margin-calculator">Margin Calculator</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/profit-calculator">Profit Calculator</Link>
              </li>
            </ul>
          </li>

          {/* ================= PLATFORM ================= */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition ${
                ["/mt5-windows", "/mt5-android", "/mt5-ios"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Platform <ChevronDown size={14} />
            </div>

            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>

            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/mt5-windows">MT5 For Windows</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/mt5-android">MT5 For Android</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/mt5-ios">MT5 For IOS</Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-gradient-to-b from-black to-[#0b0b0b] border-t border-[#d2aa73]">
          <ul className="flex flex-col items-center px-6 py-4 text-[15px] font-semibold">
            <li className="py-3 border-b border-[#d2aa73]">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/services"
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/account-types"
                onClick={() => setOpen(false)}
              >
                Account Types
              </NavLink>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/forex" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Forex
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/metals" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Metals
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/oil" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Oil & Commodities
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/index" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Spot Index
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/crypto" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Cryptocurrency
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/academy"
                onClick={() => setOpen(false)}
              >
                Academy
              </NavLink>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/margin-calculator" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Margin Calculator
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/profit-calculator" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                Profit Calculator
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/mt5-windows" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                MT5 For Windows
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/mt5-android" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                MT5 For Android
              </Link>
            </li>
            <li className="py-3 border-b border-[#d2aa73]">
              <Link to="/mt5-ios" onClick={() => setOpen(false)} className="hover:text-[#d4af37]">
                MT5 For IOS
              </Link>
            </li>
            <li className="py-3">
              <NavLink
                className={({ isActive }) =>
                  `hover:text-[#d4af37] transition ${isActive ? "text-[#d2aa73]" : ""}`
                }
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
