import React from "react";
// import { laptops } from "../assets/images";
import { NavLink } from "react-router-dom";

const HeroSection = ({heroData}) => {

  const {title, paragraph2, paragraph, buttonText, imageUrl, navLinkUrl} = heroData;


  return (
    <div className="grid grid-cols-2 mx-20 bg-gray-200">
      
      {/* Content for the first column */}
      <div className="flex justify-center items-center">
        <div className="py-10 pl-20 pr-10">
          <h1 className="text-4xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg mt-5">
            {paragraph}
            <br />
            {paragraph2}
          </p>
          <NavLink to={navLinkUrl}>
            <button className="button mt-5">{buttonText}</button>
          </NavLink>
        </div>
      </div>

      {/* Content for the second column */}
      <div className="p-4">
        <img src={imageUrl} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
