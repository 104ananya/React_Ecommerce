// 1. Creating context - warehouse
// 2. Delivery Man
// 3. Customer - useContext hook

import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import productReducer from "../reducer/productReducer";

// STEP 1
const AppContext = createContext();

// API url
const API = "https://api.pujakaitem.com/api/products";
// const API = "https://fakestoreapi.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {}
};

// STEP 2
const AppProvider = ({ children }) => {
  // We need this data in Three steps -
  // 1. Loading
  // 2. Displaying
  // 3. Error ------- for all that we use useReducer

  const [state, dispatch] = useReducer(productReducer, initialState);


    // 1st API calling ---- for whole products
  const getProduct = async (url) => {
    dispatch({ type: "API_LOADING" });
    try {
      // using Axios for fetching
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);

      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 2nd API calling ---- for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "API_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;

      dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  };

  //Function for API calling
  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
// REMEMBER to wrap whole <App /> inside this Approvider
