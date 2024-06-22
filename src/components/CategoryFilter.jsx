import React from "react";
import { useFilterContext } from "../context/filterContext";

const CategoryFilter = () => {

  const {
    filters: {text},
    all_products,
    updateFilterValue,
  } = useFilterContext()

  // // `getUniqueData` is common function that will retrieve distinct data from the json
  // const categoryWiseData = getUniqueData(all_products, "category");

  return (
    <div className="pl-6 pr-3 mr-12  ">
      <h1 className="text-base font-bold mb-4">Categories</h1>
      <p className="text-gray-600 hover:border-b border-coral-red mb-2">Category 1</p>
      <p className="text-gray-600 hover:border-b border-coral-red mb-2">Category 2</p>
      <p className="text-gray-600 hover:border-b border-coral-red mb-2">Category 3</p>
      <p className="text-gray-600 hover:border-b border-coral-red">Category 4</p>
    </div>
  );
};

export default CategoryFilter;
