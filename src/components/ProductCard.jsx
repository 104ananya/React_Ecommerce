import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import FormatPrice from "../helper/FormatPrice";

const ProductCard = (curElem) => {
  const { id, name, image, price, company } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <motion.div
        className="p-4 m-5 flex flex-col justify-center items-center rounded-md hover:bg-gray-100"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-auto mb-2 rounded-lg shadow-md"
        />
        <p className="text-lg font-bold text-center capitalize">{name}</p>
        <p className="text-sm text-center capitalize">{company}</p>
        <p className="text-sm text-center">Price: <FormatPrice price = {price} /></p>
      </motion.div>
    </NavLink>
  );
};

export default ProductCard;
