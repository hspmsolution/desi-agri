import {FETCH_PRODUCTS} from '../constants/actionTypes';

const productReducer = (state = { productsDetail: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, productsDetail: action.payload };
   
    default:
      return state;
  }
};

export default productReducer;
