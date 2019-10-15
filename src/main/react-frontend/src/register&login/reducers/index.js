import {combineReducers} from 'redux';
import userReducer from './userReducer';
import {USER_STATE} from '../../config/constants';

export default combineReducers({
    [USER_STATE]: userReducer
});