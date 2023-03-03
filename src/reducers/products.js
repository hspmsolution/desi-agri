import {FETCH_PRODUCTS,PRODUCTPAGE_INFO,PRODUCTINFO,LASTPRICE,LIVEQUOTES} from '../constants/actionTypes';

const productReducer = (state = { productsDetail: [],productPage:[],productInfo:[],lastPrice:0,liveQuotes:[]}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, productsDetail: action.payload };
   
    case PRODUCTPAGE_INFO:
      return {...state,productPage:state.productsDetail.filter((product)=>{return product.name===action.name})}

    case PRODUCTINFO:
       return {...state,productInfo:action.payload}

    case LASTPRICE:
       return {...state,lastPrice:action.payload}
    
    case LIVEQUOTES:
      return {...state,liveQuotes:action.payload}
    default:
      return state;
  }
};

export default productReducer;
