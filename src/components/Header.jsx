import React from "react";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Navbar />
    </header>
  );
};

export default Header;
