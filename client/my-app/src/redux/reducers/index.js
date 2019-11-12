import { combineReducers } from 'redux';
import cityReducer from './cityreducer';
import itineraryReducer from './itineraryreducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
//   auth: authReducer
});