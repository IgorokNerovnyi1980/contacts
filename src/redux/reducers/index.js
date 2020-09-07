import { combineReducers } from 'redux';
import warning from './warning';
import auth from './auth';

export default combineReducers({ warning, auth });
