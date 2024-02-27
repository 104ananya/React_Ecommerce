import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import QuantityToggle from "./QuantityToggle";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AddToCart = ({ productData }) => {
  const { id, colors, stock } = productData;

  const [markColor, setMarkColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  const setIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(stock);
    }
  };

  return (
    <>
      {/* Color Div  */}
      <div className="color_section flex flex-row">
        <div className="mr-1 text-zinc-600">Available colors:</div>

        {colors.map((CurrColor, index) => {
          const isSelected = CurrColor === markColor;
          return (
            <button
              key={index}
              style={{
                backgroundColor: CurrColor,
                opacity: isSelected ? 1 : 0.5,
              }}
              // {isSelected ? <FaCheck /> : null}
              className="m-1 rounded-full w-5 h-5 flex items-center justify-center"
              onClick={() => setMarkColor(CurrColor)}
            >
              {isSelected && <FaCheck className="text-white text-xs " />}
            </button>
          );
        })}
      </div>

      <div className="flex lg:mt-8 w-full">
        {/* Select Amount Div  */}
        <QuantityToggle
          quantity={quantity}
          setIncrease={setIncrease}
          setDecrease={setDecrease}
        />

        {/* Add To Cart Button  */}
        <div className="w-1/2">
          <NavLink to="/cart">
            <button
              // onClick={addCart}
              className="w-full h-14 bg-coral-red rounded-lg lg:rounded-xl mb-2 shadow-orange-shadow shadow-2xl text-white flex items-center justify-center lg:w-3/5 hover:opacity-60"
            >
              <i className="cursor-pointer text-white text-xl leading-0 pr-3">
                <FaCartShopping />
              </i>
              Add to cart
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
