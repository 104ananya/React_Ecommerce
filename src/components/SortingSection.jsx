import React from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const SortingSection = () => {
  const { filter_products, setListView, sorting_function } = useFilterContext();

  return (
    <div className="flex justify-between mb-4">
      {/* Grid toggle  */}
      <div>
        <button className="p-1.5 bg-gray-100" onClick={setListView}>
          <BsFillGrid1X2Fill />
        </button>
      </div>

      {/* Products available  */}
      <div>{filter_products.length} Total products</div>

      {/* Sorting function  */}
      <div className="sorting-dropdown">
        <form action="#" className="">
          <label htmlFor="sort" className="mr-2 text-gray-700"></label>
          <select
            name="sort"
            id="sort"
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none"
            onClick={sorting_function}
          >
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
            <option value="a-z">Product (a-z)</option>
            <option value="z-a">Product (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SortingSection;
