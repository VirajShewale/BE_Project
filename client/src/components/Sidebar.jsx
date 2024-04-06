import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { menu, thirdweb, userLogo } from "../assets";

const Icon = ({ name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`flex items-center justify-center h-[48px] px-4 cursor-pointer transition-colors ${
      isActive && isActive === name
        ? "bg-[#2c2f32] text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    } ${!disabled ? "" : "opacity-50 pointer-events-none"}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt="fund_logo"
      className={`w-6 h-6 ${isActive !== name ? "grayscale" : ""}`}
    />
    <span className="ml-2">{name}</span>
  </div>
);

const TopNavBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const { connect, address } = useStateContext();
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white py-4 px-8">
      <Link
        to="/home"
        className="text-white cursor-pointer w-fit rounded-md text-3xl bor font-bold"
      >
        PRO FUND
      </Link>

      <div className="hidden md:flex items-center">
        {navlinks.map((link) => (
          <Icon
            key={link.name}
            {...link}
            isActive={isActive}
            handleClick={() => {
              if (!link.disabled) {
                setIsActive(link.name);
                navigate(link.link);
              }
            }}
          />
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <img
          src={menu}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-gray-900 text-white py-4 px-8 z-50 transition-transform duration-300 ${
          toggleDrawer ? "" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-4">
          <img
            src={menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setToggleDrawer(false)}
          />
        </div>
        <ul className="mb-4">
          {navlinks.map((link) => (
            <li
              key={link.name}
              className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"}`}
              onClick={() => {
                setIsActive(link.name);
                setToggleDrawer(false);
                navigate(link.link);
              }}
            >
              <img
                src={link.imgUrl}
                alt={link.name}
                className={`w-[24px] h-[24px] object-contain ${
                  isActive === link.name ? "grayscale-0" : "grayscale"
                }`}
              />
              <p
                className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                  isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                }`}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex mx-4">
          <CustomButton
            btnType="button"
            title={address ? "Create a campaign" : "Connect"}
            styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
            handleClick={() => {
              if (address) navigate("create-campaign");
              else connect();
            }}
          />
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={userLogo}
              alt="user"
              className="h-[80%] object-position:center"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
