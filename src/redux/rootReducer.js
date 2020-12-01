import {combineReducers} from 'redux';
import AuthReducer from './reducers/authReducer';
import HomeReducer from './reducers/homeReducer';
import LocationReducer from './reducers/locationReducer';
import RateReducer from './reducers/rateReducer';

const RootReducer = combineReducers({
  authReducer: AuthReducer,
  homeReducer: HomeReducer,
  locationReducer: LocationReducer,
  rateReducer: RateReducer,
});

export default RootReducer;
