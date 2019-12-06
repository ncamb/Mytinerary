import { combineReducers } from 'redux';
import cityReducer from './cityreducer';
import itineraryReducer from './itineraryreducer';
import activityReducer from './activityreducer';
import userReducer from './userreducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer,
  user: userReducer,
//   auth: authReducer
});