import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import CompanyFilter from "./CompanyFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { text, color },

    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // COMMON FUNCTION - for each field
  const getUniqueData = (data, field) => {
    // For geeting all the field/category value
    let newData = data.map((currElem) => {
      return currElem[field];
    });

    // SPECIAL CONDITION FOR color filter
    if (field === "colors") {
      return (newData = ["all", ...new Set([].concat(...newData))]);
    }

    // For getting unique value -- using SET
    let uniqueNewData = ["all", ...new Set(newData)];

    return uniqueNewData;
  };

  // Fieldwise filter
  const categoryWiseData = getUniqueData(all_products, "category");
  const companyWiseData = getUniqueData(all_products, "company");
  const colorWiseData = getUniqueData(all_products, "colors");

  // console.log(colorWiseData);

  return (
    <div className="flex flex-col justify-around p-5">
      <div className="p-2">
        <SearchBar inputText={text} updateSearchFilter={updateFilterValue} />
      </div>
      <div className="p-2">
        <CategoryFilter
          categoryArray={categoryWiseData}
          updateCategoryFilter={updateFilterValue}
        />
      </div>
      <div className="p-2">
        <CompanyFilter
          companyArray={companyWiseData}
          updateCompanyFilter={updateFilterValue}
        />
      </div>
      <div className="p-2">
        <ColorFilter
          inputColor={color}
          colorArray={colorWiseData}
          updateColorFilter={updateFilterValue}
        />
      </div>
      <div className="p-2">
        <PriceFilter />
      </div>

      <div className="p-2 flex justify-center mr-12 pr-12">
        <button className="button" onClick={clearFilters}>CLEAR</button>
      </div>
    </div>
  );
};

export default FilterSection;
