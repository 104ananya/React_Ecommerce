import React from "react";
import _ from 'lodash';

const CategoryFilter = ({ categoryArray, updateCategoryFilter }) => {
  console.log(categoryArray);

  return (
    <div className="pl-6 pr-6 mr-12  ">
      <h3 className=" font-bold mb-4">Categories</h3>

      <div>
        {categoryArray.map((currElem, index) => {
          return (
            <button
              key={index}
              type="button"
              name="category"
              value={currElem}
              onClick={updateCategoryFilter}
              className="text-gray-600 flex w-full hover:border-b border-coral-red mb-2"
            >
              {_.capitalize(currElem)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
