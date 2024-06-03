import { combineReducers } from 'redux';
import userReducer from '@/redux/reducers/userReducer';

const rootReducer = combineReducers({
    users: userReducer
});

export default rootReducer;