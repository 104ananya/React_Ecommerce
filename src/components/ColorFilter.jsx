import React from "react";
import { FaCheck } from "react-icons/fa";

const ColorFilter = ({ inputColor, colorArray, updateColorFilter }) => {
  // console.log(colorArray);

  return (
    <div className="pl-6 mr-12">
      <h3 className="font-bold mb-4">Colors</h3>

      <div className="flex space-x-2">
        {colorArray.map((currElem, index) => {
          const isSelected = currElem === inputColor;
          const isAll = currElem === "all";

          return (
            <button
              key={index}
              type="button"
              name="color"
              value={currElem}
              onClick={updateColorFilter}
              style={{
                backgroundColor: currElem,
                opacity: isSelected ? 1 : 0.4,
              }}
              className="w-4 h-4 rounded-full hover:bg-opacity-1 flex items-center justify-center"
            >
              {isSelected ? <FaCheck className="text-white w-3 h-3 " /> : null}
              {isAll ? "All" : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorFilter;
