import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header({ onClick }) {
  return (
    <Router>
      <div className="fixed top-0 w-full bg-[#21211f] text-gray-800 z-10">
        <nav className="flex justify-between items-center flex-1 max-w-screen-lg h-28 mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white border-0 cursor-pointer w-fit rounded-md p-2 ml-4 sm:ml-0 text-3xl font-bold"
          >
            PRO FUND
          </Link>

          <ul className="hidden sm:flex justify-center items-center space-x-4">
            <li>
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                offset={-85}
                duration={500}
                className="text-white font-normal text-lg cursor-pointer p-1 hover:text-blue-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-115}
                duration={500}
                className="text-white  text-lg font-normal cursor-pointer p-1 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="team-members"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="text-white text-lg font-normal cursor-pointer p-1 hover:text-blue-600"
              >
                Team Members
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <NavLink
              to="/crowd-funding"
              className="text-white hover:text-blue-600"
            >
              <button
                className="p-2 text-lg font-semibold border-2 border-white"
                onClick={onClick}
              >
                Crowd Funding
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default Header;