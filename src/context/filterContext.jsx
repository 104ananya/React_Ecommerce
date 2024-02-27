import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./productcontext";
import { useEffect } from "react";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  // useReducer Hook
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

// custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};


