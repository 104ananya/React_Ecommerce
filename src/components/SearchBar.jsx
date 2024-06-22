import React from "react";

const SearchBar = ({inputText, searchFunction}) => {

  return (
    <div className="mx-6" >
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={inputText}
          placeholder="Search.."
          onChange={searchFunction}
          className="w-full px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-1 focus:ring-coral-red"

        />
      </form>
    </div>
  );
};

export default SearchBar;
