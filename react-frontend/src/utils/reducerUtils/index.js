import { combineReducers } from 'redux';
import userReducer from '../../register&login/reducers/userReducer';
import blogReducer from '../../blog/reducers/blogReducer';
// import homeReducer from '../../home/reducers/homeReducer';
import { USER_STATE, BLOG_STATE, HOME_STATE } from '../../config/constants';
import Immutable from 'immutable';

export default combineReducers(
  // Immutable.Map(
  {
    [USER_STATE]: userReducer,
    [BLOG_STATE]: blogReducer
    // [HOME_STATE]: homeReducer
  }
  // )
);
