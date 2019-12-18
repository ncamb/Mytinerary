import axios from 'axios';
import { GET_ITINERARIES, ITINERARIES_LOADING} from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

export const getItineraries =  () => dispatch=> {
  dispatch(setItinerariesLoading());
    axios
     .get('http://localhost:4000/itineraries/')
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

export const getItinerariesbycity =  name =>  (dispatch)=> {
  dispatch(setItinerariesLoading());
   axios
     .get(`http://localhost:4000/itineraries/${name}`)
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

export const postacoment = ({ coment }) => dispatch => {
  // Headers
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };
  // Request body
  const body = JSON.stringify({coment});
  axios
      .post('http://localhost:4000/users', body, config)
      .then(res =>
          dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
          })
      )
  //   .catch(err => {
  //     dispatch(
  //       returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
  //     );
  //     dispatch({
  //       type: REGISTER_FAIL
  //     });
  //   });
};
export const setItinerariesLoading = () => {
    return {
      type: ITINERARIES_LOADING
    };
  };