import axios from 'axios';
import { GET_ACTIVITIES, ITINERARIES_LOADING} from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

export const getActivities =  () => dispatch=> {
  dispatch(setActivitiesLoading());
    axios
     .get('http://localhost:4000/activities/')
    .then(res =>
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data
      })
    )
    // .catch(err =>
    //   dispatch(returnErrors(err.response.data, err.response.status))
    // );
};

export const getActivitiesbytitle =  name =>  (dispatch)=> {
  dispatch(setActivitiesLoading());
   axios
      .get(`http://localhost:4000/activities/${name}`)
      .then(res =>
        dispatch({
        type: GET_ACTIVITIES,
        payload: res.data
      })
    )
    // .catch(err =>
    //   dispatch(returnErrors(err.response.data, err.response.status))
    // );
};

export const setActivitiesLoading = () => {
    return {
      type: ITINERARIES_LOADING
    };
  };