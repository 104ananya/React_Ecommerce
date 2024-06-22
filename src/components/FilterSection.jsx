import React from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import CompanyFilter from './CompanyFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

const FilterSection = () => {
  return (
    <div className="flex flex-col justify-around h-screen p-5">
      <div className="p-2 "><SearchBar /></div>
      <div className="p-2 "><CategoryFilter/></div>
      <div className="p-2 "><CompanyFilter/></div>
      <div className="p-2 "><ColorFilter/></div>
      <div className="p-2 "><PriceFilter/></div>
      <div className="p-2 ">Item 6</div>
    </div>
  );
};

export default FilterSection;
