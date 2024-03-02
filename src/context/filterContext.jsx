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

  // _______________________________________________________________

  // useEffect Hook to update sorted products
  useEffect(() => {
    dispatch({ type: "GET_SORTED_PRODUCTS", payload: products }, [
      products,
      state.sorting_value,
    ]);
  });

  // useEffect Hook to update the filtered products when the products change
  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setListView, sorting_function }}>
      {children}
    </FilterContext.Provider>
  );
};

// custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
