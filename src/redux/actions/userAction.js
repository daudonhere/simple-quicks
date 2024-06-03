import axios from 'axios';
import { GET_ALL_USER } from '@/api'

export const FETCH_GET_ALL_USER_REQUEST = 'FETCH_GET_ALL_USER_REQUEST';
export const FETCH_GET_ALL_USER_SUCCESS = 'FETCH_GET_ALL_USER_SUCCESS';
export const FETCH_GET_ALL_USER_FAILURE = 'FETCH_GET_ALL_USER_FAILURE';

export const getAllUser = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GET_ALL_USER_REQUEST });
        try {
            const response = await axios.get(GET_ALL_USER);
                dispatch({ type: FETCH_GET_ALL_USER_SUCCESS, payload: response.data });
            return response.data;
            } catch (error) {
                dispatch({ type: FETCH_GET_ALL_USER_FAILURE, payload: error.message });
            throw error;
        }
    };
};