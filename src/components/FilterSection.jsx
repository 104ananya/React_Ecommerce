import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import CompanyFilter from "./CompanyFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { text },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  // COMMON FUNCTION - for each field
  const getUniqueData = (data, field) => {
    // For geeting all the field/category value
    let newData = data.map((currElem) => {
      return currElem[field];
    });

    // For getting unique value -- using SET
    let uniqueNewData = ["All", ...new Set(newData)];

    return uniqueNewData;
  };



  return (
    <div className="flex flex-col justify-around h-screen p-5">
      <div className="p-2">
        <SearchBar inputText={text} searchFunction={updateFilterValue} />
      </div>
      <div className="p-2">
        <CategoryFilter />
      </div>
      <div className="p-2">
        <CompanyFilter />
      </div>
      <div className="p-2">
        <ColorFilter />
      </div>
      <div className="p-2">
        <PriceFilter />
      </div>
      <div className="p-2">Item 6</div>
    </div>
  );
};

export default FilterSection;
