import {combineReducers} from 'redux';
import auth from './auth';
import admins from './admin';
import products from './products';


export default combineReducers({
  auth,admins,products
});