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
      let initialSortedProduct = [...filter_products]; // Create a copy of filter_products

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

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_SEARCHED_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((current) => {
          return current.name.toLowerCase().includes(text.toLowerCase());
          // this is to check if the entered text is in the title of each/any element
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (current) => current.category === category
          // this is to check if the clicked category is same as the element's category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (current) => current.company === company
          // this is to check if the clicked company is same as the element's company
        );
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((current) =>
          current.colors.includes(color)
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    // ---------------------------------------------------------------
    default:
      return state;
  }
};

export default filterReducer;
