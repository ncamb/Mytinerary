import axios from 'axios';
import { GET_CITIES, CITIES_LOADING} from './types';


export const getCities =  () => dispatch => {
  dispatch(setCitiesLoading());//solo para ejecutar el loading
   axios
     .get('http://localhost:4000/cities')
    .then(res =>
      dispatch({
        type: GET_CITIES,
        payload: res.data
      })
    )
    // .catch(err =>
    //   dispatch(returnErrors(err.response.data, err.response.status))
    // );
};

export const setCitiesLoading = () => {
    return {
      type: CITIES_LOADING
    };
  };