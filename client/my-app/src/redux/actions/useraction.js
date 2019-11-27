import axios from 'axios';
// import { returnErrors } from './errorActions';

import {
    //   USER_LOADED,
    //   USER_LOADING,
    //   AUTH_ERROR,
    //   LOGIN_SUCCESS,
    //   LOGIN_FAIL,
    //   LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    //   REGISTER_FAIL
} from './types';


// Register User
export const register = ({ username, name, email,imgurl, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // Request body
    const body = JSON.stringify({ username, name, email, imgurl, password });
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