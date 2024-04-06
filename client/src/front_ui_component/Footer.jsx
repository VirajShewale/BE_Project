import React from "react";
import { FooterImg } from "../assets";

const Footer = () => {
  return (
    <footer className="text-white px-8 py-4 relative">
      <div className="container flex flex-col justify-center items-center mx-auto relative z-10 text-white">
        <div className="sm:flex sm:justify-between sm:mx-10">
          <div className="text-center text-white sm:text-left py-4 sm:py-0">
            <h2 className="text-2xl p-3 text-center font-semibold">PRO FUND</h2>
            <p className=" text-md">
              We are a crowdfunding platform with a vision to create a social
              impact.
            </p>
            <p className="text-center text-sm">
              Let us make this world a better place to live together.
            </p>
          </div>
        </div>
        <div className="m-5 text-center cursor-pointer">
          <a href="/home" className="text-white text-md mr-2 hover:text-white">
            Home
          </a>
          <a
            href="/about-us"
            className="text-white text-md mr-2 hover:text-white"
          >
            About Us
          </a>
          <a
            href="/contact-us"
            className="text-white text-md mr-2 hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="/team-members"
            className="text-white text-md hover:text-white "
          >
            Team Members
          </a>
        </div>
      </div>
      <img
        className="absolute bottom-0 h-full left-0 w-full z-0 "
        src={FooterImg}
        alt="Image"
      />
    </footer>
  );
};

export default Footer;
