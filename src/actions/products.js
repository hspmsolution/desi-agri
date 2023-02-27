import {FETCH_PRODUCTS,  CLIENT_MSG } from "../constants/actionTypes";
import * as api from "../api";

export const addProduct = (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.addProduct(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
      
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
      console.log(error);
    }
  };

  export const getProducts = () => async (dispatch) => {
    try {
      const { data } = await api.getProducts();
      dispatch({
        type: FETCH_PRODUCTS,
        payload:data
      });
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
      console.log(error);
    }
  };

  export const updateProduct = (formData) => async (dispatch) => {
    try {
      const { data, status } = await api.updateProduct(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
      
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
      console.log(error);
    }
  };