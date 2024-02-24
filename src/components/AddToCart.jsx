import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ productData }) => {
  const { id, colors, stock } = productData;

  const [markColor, setMarkColor] = useState(colors[0]);

  return (
    <div className="flex flex-row">
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
  );
};

export default AddToCart;
