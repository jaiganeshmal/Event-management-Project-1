import React, { useState } from "react";
import { assets } from "../assets/global";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center relative">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={assets.logo} alt="Logo" loading="lazy" className="h-20 w-auto" />
        </Link>
      </div>

      {/* Center - Desktop Links */}
      <ul className="hidden md:flex gap-8 items-center text-lg">
        <li>
          <Link
            to="/"
            className="hover:underline hover:decoration-amber-400 hover:underline-offset-4 hover:decoration-2"
          >
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
            <Link to="/services" className="hover:text-yellow-400">Our Services</Link>
            <MdKeyboardArrowDown />
          </div>
          {servicesOpen && (
            <ul className="absolute z-50 top-full mt-2 bg-white text-black shadow-lg rounded-lg w-56">
              <li>
                <Link to="/corporate" className="block px-4 py-2 hover:bg-gray-100">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/wedding" className="block px-4 py-2 hover:bg-gray-100">
                  Wedding Events
                </Link>
              </li>
              <li>
                <Link to="/catering" className="block px-4 py-2 hover:bg-gray-100">
                  Catering
                </Link>
              </li>
              <li>
                <Link to="/general-events" className="block px-4 py-2 hover:bg-gray-100">
                  General Events
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Insights Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setInsightsOpen(true)}
          onMouseLeave={() => setInsightsOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
            <Link to="/insights" className="hover:text-yellow-400">Insights</Link>
            <MdKeyboardArrowDown />
          </div>
          {insightsOpen && (
            <ul className="absolute z-50 top-full mt-2 bg-white text-black shadow-lg rounded-lg w-64">
              <li>
                <Link to="/company-profile" className="block px-4 py-2 hover:bg-gray-100">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/event-planners" className="block px-4 py-2 hover:bg-gray-100">
                   Event Planners
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">
                  Blogs Post
                </Link>
              </li>
              <li>
                <Link to="/giveaway" className="block px-4 py-2 hover:bg-gray-100">
                  Giveaway
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/venus" className="hover:text-yellow-400">
            Venus
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-yellow-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right - Button */}
      <div className="hidden md:block">
        <Link
          to="/new-chat"
          className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          New Chat
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 px-6 py-6 md:hidden z-50">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <div>
            <p className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Our Services <MdKeyboardArrowDown />
            </p>
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <Link to="/corporate" onClick={() => setMobileOpen(false)}>Corporate Events</Link>
              <Link to="/wedding" onClick={() => setMobileOpen(false)}>Wedding Events</Link>
              <Link to="/catering" onClick={() => setMobileOpen(false)}>Catering</Link>
              <Link to="/general-events" onClick={() => setMobileOpen(false)}>General Events</Link>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
              Insights <MdKeyboardArrowDown />
            </p>
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <Link to="/company-profile" onClick={() => setMobileOpen(false)}>Company Profile</Link>
              <Link to="/event-planners" onClick={() => setMobileOpen(false)}> Event Planners</Link>
              <Link to="/blogs" onClick={() => setMobileOpen(false)}>Blogs Post</Link>
              <Link to="/giveaway" onClick={() => setMobileOpen(false)}>Giveaway</Link>
            </div>
          </div>

          <Link to="/venus" className="hover:text-yellow-400" onClick={() => setMobileOpen(false)}>
            Venus
          </Link>
          <Link to="/gallery" className="hover:text-yellow-400" onClick={() => setMobileOpen(false)}>
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-yellow-400" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>

          <Link
            to="/new-chat"
            className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition mt-4 inline-block"
            onClick={() => setMobileOpen(false)}
          >
            New Chat
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
