import axios from 'axios';
import { GET_ITINERARIES, ITINERARIES_LOADING} from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

export const getItineraries =  () => dispatch => {
  dispatch(setItinerariesLoading());
   axios
     .get('http://localhost:4000/itineraries')
    .then(res =>
      dispatch({
        type: GET_ITINERARIES,
        payload: res.data
      })
    )
    // .catch(err =>
    //   dispatch(returnErrors(err.response.data, err.response.status))
    // );
};

export const setItinerariesLoading = () => {
    return {
      type: ITINERARIES_LOADING
    };
  };