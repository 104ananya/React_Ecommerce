import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


const QuantityToggle = ({ quantity, setIncrease, setDecrease }) => {
  return (
    <div className="w-1/2" >
      <div className="bg-pale-blue rounded-lg h-14 mb-4 flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 lg:w-1/3 ">
        <button onClick={() => setDecrease()} className="text-coral-red">
          <FaMinus />
        </button>
        <div>{quantity}</div>
        <button onClick={() => setIncrease()} className="text-coral-red">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default QuantityToggle;
