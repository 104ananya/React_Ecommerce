import React from "react";
import { FaApple } from "react-icons/fa";
import { SiDell } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiLenovo } from "react-icons/si";

const Brands = () => {
  return (
    <main className="bg-gray-200 flex flex-col justify-center items-center pt-4 pb-8">
      <div className="text-4xl font-bold my-4">Featured Brands</div>
      <div className="grid grid-cols-6 gap-4 mt-5">
        {/* Grid for the first brand */}
        <div className="brand-grid">
          <FaApple size={48} />
        </div>

        {/* Grid for the second brand */}
        <div className="brand-grid">
          <SiDell size={48} />
        </div>

        {/* Grid for the third brand */}
        <div className="brand-grid">
          <SiAdidas size={48} />
        </div>

        {/* Grid for the fourth brand */}
        <div className="brand-grid">
          <SiSamsung size={48} />
        </div>

        {/* Grid for the fifth brand */}
        <div className="brand-grid">
          <SiPuma size={48} />
        </div>

        {/* Grid for the sixth brand */}
        <div className="brand-grid">
          <SiLenovo size={48} />
        </div>
      </div>
    </main>
  );
};

export default Brands;
