import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./productcontext";
import { useEffect } from "react";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  list_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  // useReducer Hook
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // _____________________________________________________________

  // Function which will set up List view of Product section
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // Getting_sorting_value_function
  const sorting_function = (event) => {
    let selectedValue = event.target.value;
    dispatch({ type: "GET_SORTING_VALUE", payload: selectedValue });
  };

  // Update the filter value of search bar  not just this but it works for all filtering.
  // We are calling it Globally
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // To clear all the selected filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // _______________________________________________________________

  // useEffect Hook to update sorted products
  useEffect(() => {
    dispatch({ type: "FILTER_SEARCHED_PRODUCTS", payload: products });
    dispatch({ type: "GET_SORTED_PRODUCTS", payload: products });
  }, [products, state.sorting_value, state.filters]);

  // useEffect Hook to update the filtered products when the products change
  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // _______________________________________________________________

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setListView,
        sorting_function,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
