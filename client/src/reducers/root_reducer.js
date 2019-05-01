import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import prices from './price_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  auth: authReducer,
  prices,
  errors: errorsReducer,
});