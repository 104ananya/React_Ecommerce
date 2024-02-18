import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { cart } from "../assets/icons";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      {/* LOGO ELEMENT  */}
      <div className="flex items-center space-x-3 ">
        <NavLink to="/" className="flex items-center space-x-3 ">
          <img src={logo} alt="logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-coral-red">
            Trendstore
          </span>
        </NavLink>
      </div>

      {/* SIGN IN BUTTON  */}
      <div className="flex md:order-2 space-x-3 md:space-x-0 ">
        <button
          type="button"
          className="text-white bg-coral-red hover:bg-dark-red font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

        {/* NAVBAR TOGGLE BUTTON  */}
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* NAVBAR MENU  */}
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
    </nav>
  );
};

export default Navbar;
