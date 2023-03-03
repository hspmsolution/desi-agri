import decodeJWT from '../utils/jwtDecode';
import { AUTH, LOGOUT, CLIENT_MSG, ADMIN } from '../constants/actionTypes';

const authReducer = (state = { authData: null, message: null, admin: false }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('token',action?.data.token);
      return { ...state, authData: decodeJWT(action.data.token), admin: true };

    case LOGOUT:
      localStorage.removeItem('token');
      return { ...state, authData: null, admin: false };

    case ADMIN: {
      if(state.admin)return state;
      const token = localStorage.getItem('token');
      if(!token) return state;
      const decoded = decodeJWT(token);
      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem('token');
        return { ...state, authData: null, admin: false };
      }
      if (token) return { ...state, authData: decoded, admin: true };
      return state;
    }
    case CLIENT_MSG:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default authReducer;
