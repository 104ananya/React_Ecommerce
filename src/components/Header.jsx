import React from "react";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <Navbar />
    </header>
  );
};

export default Header;
