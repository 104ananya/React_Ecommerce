const filterReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        list_view: !state.list_view,
      };

    case "GET_SORTING_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "GET_SORTED_PRODUCTS":
      const { filter_products, sorting_value } = state;
      let initialSortedProduct = [...filter_products];  // Create a copy of filter_products

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      let finalSortedProduct = initialSortedProduct.sort(sortingProduct);

      return {
        ...state,
        filter_products: finalSortedProduct,
      };

    // ---------------------------------------------------------------
    default:
      return state;
  }
};

export default filterReducer;
