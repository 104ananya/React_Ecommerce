import React from "react";
import { useFilterContext } from "../context/filterContext";

const SearchBar = () => {

  const {
    filters: {text},
    updateFilterValue,
  } = useFilterContext()

  return (
    <div >
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search.."
          onChange={updateFilterValue}
          className="w-full px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-1 focus:ring-coral-red"

        />
      </form>
    </div>
  );
};

export default SearchBar;
