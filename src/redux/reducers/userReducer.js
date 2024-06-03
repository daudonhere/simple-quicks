import { 
    FETCH_GET_ALL_USER_REQUEST, 
    FETCH_GET_ALL_USER_SUCCESS, 
    FETCH_GET_ALL_USER_FAILURE
} from '@/redux/actions/userAction';

const initialState = {
    loading: false,
    result: null,
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GET_ALL_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_GET_ALL_USER_SUCCESS:
            return {
                loading: false,
                result: action.payload,
                error: '',
            };
        case FETCH_GET_ALL_USER_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;