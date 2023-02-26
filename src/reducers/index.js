import {combineReducers} from 'redux';
import auth from './auth';
import admins from './admin';


export default combineReducers({
  auth,admins
});