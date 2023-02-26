import { AUTH, LOGOUT, CLIENT_MSG, ADMIN, ALL_ADMINS, DELETE_ADMIN } from '../constants/actionTypes';

const adminReducer = (state = { allAdmin: [] }, action) => {
  switch (action.type) {
    case ALL_ADMINS:
      return { ...state, allAdmin: action.payload };
    case DELETE_ADMIN:
      return {
        ...state,
        allAdmin: state.allAdmin.filter((admin) => admin.id !== action.payload),
      };

    default:
      return state;
  }
};

export default adminReducer;
