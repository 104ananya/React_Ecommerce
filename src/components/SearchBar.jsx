import React from "react";
import { useFilterContext } from "../context/filterContext";

const SearchBar = () => {

  const {
    filters: {text},
    updateFilterValue,
  } = useFilterContext()

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search.."
          onChange={updateFilterValue}
        />
      </form>
    </div>
  );
};

export default SearchBar;
