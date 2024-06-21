import React from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import CompanyFilter from './CompanyFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

const FilterSection = () => {
  return (
    <div className="flex flex-col justify-around h-screen p-5">
      <div className="p-2 border border-gray-300 rounded"><SearchBar /></div>
      <div className="p-2 border border-gray-300 rounded"><CategoryFilter/></div>
      <div className="p-2 border border-gray-300 rounded"><CompanyFilter/></div>
      <div className="p-2 border border-gray-300 rounded"><ColorFilter/></div>
      <div className="p-2 border border-gray-300 rounded"><PriceFilter/></div>
      <div className="p-2 border border-gray-300 rounded">Item 6</div>
    </div>
  );
};

export default FilterSection;
