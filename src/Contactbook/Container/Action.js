import axios from "axios";

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_PRODUCTS", success: true });
    try {
      const { data } = await axios.get(
        ` http://timeapi.kaaylabs.com/api/v1/project_view`
      );
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        success: false,
        value: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_PRODUCTS_FAIL",
        success: false,
        error: error.message,
      });
    }
  };
};
