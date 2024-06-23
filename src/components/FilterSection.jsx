import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import CompanyFilter from "./CompanyFilter";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { text, category, company },

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

  // FOR category filter
  const categoryWiseData = getUniqueData(all_products, "category");
  const companyWiseData = getUniqueData(all_products, "company");

  return (
    <div className="flex flex-col justify-around h-screen p-5">
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
