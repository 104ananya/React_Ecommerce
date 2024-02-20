// 1. Creating context - warehouse
// 2. Delivery Man
// 3. Customer - useContext hook

import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect } from "react";

// STEP 1
const AppContext = createContext();

// API url
// const API = "https://api.pujakaitem.com/api/products";
const API = "https://fakestoreapi.com/products";


const getProduct = async (url) => {
    const res = await axios.get(url);

    console.log(res)
    const products = res.data;
};


// STEP 2
const AppProvider = ({ children }) => {

  //Function for API calling
  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ name: "Ananya" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
// REMEMBER to wrap whole <App /> inside this Approvider
