import { combineReducers } from 'redux';
import warning from './warning';
import auth from './auth';
import user from './user';
import contacts from './contacts';

export default combineReducers(
  {
    warning, auth, user, contacts,
  },
);
