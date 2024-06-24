import React from "react";
import { useFilterContext } from "../context/filterContext";
import FormatPrice from "./../helper/FormatPrice";

const PriceFilter = () => {
  const {
    filters: { price, minPrice, maxPrice },
    updateFilterValue,
  } = useFilterContext();

  return (
    <div className="pl-6 mr-12">
      <h3 className="font-bold mb-4">Price</h3>
      <p>
        <FormatPrice price={price} />
      </p>
      <input
        type="range"
        name="price"
        id=""
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue}
      />
    </div>
  );
};

export default PriceFilter;
