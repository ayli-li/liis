import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import flightsReducer from './flights/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  flights: flightsReducer,
 });

export default rootReducer;