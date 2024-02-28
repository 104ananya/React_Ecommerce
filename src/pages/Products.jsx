import React from "react";
import ProductList from "../components/ProductList";
import FilterSection from "../components/FilterSection";
import SortingSection from "../components/SortingSection";
import { useFilterContext } from "../context/filterContext";

const Products = () => {

  // const {filter_products} = useFilterContext();
  // console.log(filter_products);




  return (
    <main className="relative mt-[75px] padding-x">
      {/* Categories */}
      <div className="flex justify-between items-center bg-gray-200 p-4 mb-4">
        <span>Category 1</span>
        <span>Category 2</span>
        <span>Category 3</span>
        <span>Category 3</span>
        <span>Category 3</span>
      </div>

      {/* Product grid */}
      <div className="flex">
        {/* 1st column - 1/4 width */}
        <div className="w-1/4 bg-gray-200">
          <FilterSection />
        </div>

        {/* 2nd column - 3/4 width */}
        <div className="w-3/4 ">
          <SortingSection />


          <div className="flex justify-between">
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
