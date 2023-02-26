import { AUTH, CLIENT_MSG ,ALL_ADMINS, DELETE_ADMIN} from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    navigate('/dashboard');
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

export const signup = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.signUp(formData);
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

export const resetPassword = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.resetPassword(formData);

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

export const deleteAdmin = (id) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteAdmin(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({
      type: DELETE_ADMIN,
      payload:id,
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

export const getAdmins = () => async (dispatch) => {
  try {
    const { data } = await api.getAdmins();
      dispatch({
      type: ALL_ADMINS,
      payload:data,
    });
  } catch (error) {
    console.log(error)
  }
};
