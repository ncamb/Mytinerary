import { combineReducers } from 'redux';
import cityReducer from './cityreducer';
import itineraryReducer from './itineraryreducer';
import activityReducer from './activityreducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer,
//   auth: authReducer
});