const productReducer = (state, action) => {

  // We can use IF ELSE or SWITCH CASE to handle multiple cases
  
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "MY_API_DATA":
      const featureProducts = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureProducts,
      };

    // ----------------------------------------------------------

    case "API_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "API_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "MY_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
