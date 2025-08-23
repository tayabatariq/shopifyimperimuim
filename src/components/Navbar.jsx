import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  RiMenuLine, 
  RiCloseLine, 
  RiFacebookFill, 
  RiLinkedinFill, 
  RiMapPin2Line, 
  RiTimeLine, 
  RiMailLine, 
  RiPhoneLine 
} from "react-icons/ri";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [open, setOpen] = useState(false);


  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-pink-600 font-semibold" : "hover:text-pink-600";

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-[#eef0fc] px-6 py-2 text-sm text-gray-700">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <RiMapPin2Line className="text-pink-600" /> Atrium House, 574 Manchester Rd, Bury BL9 9SW
          </span>
          <span className="flex items-center gap-2">
            <RiTimeLine className="text-pink-600" /> 9.00 am - 9.00 pm
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <RiMailLine className="text-pink-600" /> info@imperiummedia.co.uk
          </span>
          <span className="flex items-center gap-2">
            <RiPhoneLine className="text-pink-600" /> 0800 009 6347
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white relative">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-pink-600 tracking-widest">IMPERIUM</h1>
          <p className="text-sm tracking-[0.3em]">MEDIA-GROUP</p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-800">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        What We Do ▾
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-30 bg-white shadow-md mt-2 rounded-lg">
          <NavLink
            to="/services/1"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)} // 👈 close on click
          >
            Service 1
          </NavLink>
          <NavLink
            to="/services/2"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)} // 👈 close on click
          >
            Service 2
          </NavLink>
        </div>
      )}
    </div>
          <NavLink to="/clients" className={navLinkClasses}>Clients</NavLink>
          <NavLink to="/saiyan" className={navLinkClasses}>Companies</NavLink>

          <NavLink to="/courses" className={navLinkClasses}>Courses</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="bg-[#eef0fc] p-2 rounded-full text-pink-600">
            <RiFacebookFill />
          </a>
          <a href="#" className="bg-[#eef0fc] p-2 rounded-full text-pink-600">
            <RiLinkedinFill />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white flex flex-col  shadow-md px-6 py-4 space-y-3 font-medium text-gray-800">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/services" className={navLinkClasses}>What We Do</NavLink>
          <NavLink to="/clients" className={navLinkClasses}>Clients</NavLink>
          <NavLink to="/companies" className={navLinkClasses}>Companies</NavLink>
          <NavLink to="/careers" className={navLinkClasses}>Careers</NavLink>
            <NavLink to="/courses" className={navLinkClasses}>Courses</NavLink> {/* ✅ Added */}
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          <div className="flex gap-3 pt-2">
            <a href="#" className="bg-[#eef0fc] p-2 rounded-full text-pink-600">
              <RiFacebookFill />
            </a>
            <a href="#" className="bg-[#eef0fc] p-2 rounded-full text-pink-600">
              <RiLinkedinFill />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
