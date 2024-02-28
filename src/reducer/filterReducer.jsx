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

    default:
      return state;
  }
};

export default filterReducer;
