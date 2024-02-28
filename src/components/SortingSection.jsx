import React, { useState } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const SortingSection = () => {
  const {setListView} = useFilterContext();



  return (
    <div className="flex justify-between mb-4">
      {/* Grid toggle  */}
      <div>
        <button className="p-1.5 bg-gray-100" 
        onClick={setListView}>
          <BsFillGrid1X2Fill />
        </button>
      </div>

      {/* Products available  */}
      <div>Total</div>

      {/* Sorting function  */}
      <div>sort</div>
    </div>
  );
};

export default SortingSection;
