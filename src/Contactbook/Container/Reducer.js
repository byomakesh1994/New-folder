const initialState = {
  success: false,
  data: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        success: action.success,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        success: action.success,
        data: action.value,
      };
    case "GET_PRODUCTS_FAIL":
      return {
        ...state,
        success: action.success,
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;
