import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { cart } from "../assets/icons";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
      {/* LOGO ELEMENT  */}
      <div className="flex items-center space-x-2 ">
        <NavLink to="/" className="flex items-center space-x-2 ">
          <img src={logo} alt="logo" className="h-6" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-coral-red">
            Trendstore
          </span>
        </NavLink>
      </div>

      {/* SIGN IN BUTTON  */}
      <div className="flex md:order-2 space-x-3 md:space-x-0 ">
        <button
          type="button"
          className="text-white bg-coral-red hover:bg-dark-red font-medium rounded-lg text-sm px-4 py-2 text-center my-2 "
        >
          Get started
        </button>

        {/* CART ICON  */}
        <div className="text-sm px-4 py-2 text-center flex justify-center items-center hidden sm:flex">
          <NavLink to="/cart" className="relative py-2">
            <div className="top-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white hover:bg-dark-red">
                10
              </p>
            </div>
            <img src={cart} alt="cart" />
          </NavLink>
        </div>
      </div>

      {/* NAVBAR MENU  */}
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li>
            <NavLink to="/" className="nav-links" aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-links">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-links">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* NAVBAR TOGGLE BUTTON */}
      <button
        onClick={toggleMenu}
        className="md:hidden block items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CgClose className="w-6 h-6" />
        ) : (
          <CgMenu className="w-6 h-6" />
        )}
      </button>

      {/* Navbar Links FOR MOBILE DEVICES */}
      <div
        className={`md:hidden absolute bg-gradient h-screen w-screen justify-start top-0 right-0 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full items-end ">
          <button
            onClick={toggleMenu}
            className="md:hidden top-0 right-0 p-2 text-white rounded-lg m-4 outline"
            aria-label="Close menu"
          >
            <CgClose className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center justify-between  mt-5 h-96 w-screen ">
            <NavLink to="/" className="nav-links-mobile">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-links-mobile">
              About
            </NavLink>
            <NavLink to="/products" className="nav-links-mobile">
              Products
            </NavLink>
            <NavLink to="/contact" className="nav-links-mobile">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
