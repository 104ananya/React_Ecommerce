// 1. Creating context - warehouse
// 2. Delivery Man
// 3. Customer - useContext hook

import { createContext, useContext } from "react";

// STEP 1
const AppContext = createContext();

// STEP 2
const AppProvider = ({children}) => {
    return <AppContext.Provider value={{name: "Ananya"}}>
        {children}
    </AppContext.Provider>
}

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};
// REMEMBER to wrap whole <App /> inside this Approvider