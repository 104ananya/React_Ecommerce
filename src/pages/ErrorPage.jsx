import React from "react";
import { NavLink } from "react-router-dom";
import { cat } from "../assets/icons";

const ErrorPage = () => {
  return (
    <div class="h-screen bg-gray-100 flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center text-gray-700">
        <div class="max-w-md">
          <div class="text-4xl md:text-12xl font-bold text-coral-red">404</div>
          <p class="text-4xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <NavLink to="/">
            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-coral-red active:bg-red-500 hover:bg-dark-red">
              Back to Homepage
            </button>
          </NavLink>
        </div>
        <div class="">
          <img src={cat} alt="cat" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
