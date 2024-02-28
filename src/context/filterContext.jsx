import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./productcontext";
import { useEffect } from "react";
import filterReducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  list_view: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  // useReducer Hook
  const [state, dispatch] = useReducer(filterReducer, initialState);


  // Function which will set up List view of Product section
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  }


  // useEffect Hook  
  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

// custom hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};

 
