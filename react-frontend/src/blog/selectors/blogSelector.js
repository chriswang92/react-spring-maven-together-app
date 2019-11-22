import Immutable from 'immutable';
import { BLOG_STATE } from '../../config/constants';
// import { createSelector } from 'reselect';

const blogStateSelector = state => state.get(BLOG_STATE);
export const blogSelector =
  // createSelector(userStateSelector,
  //   userState =>
  //   userState.get('users')
  // );
  state => {
    console.log('reached blog selector, state=', state);
    return state.blogState.get('blogs');
    // return state.blogState.isMap()
    //   ? state.blogState.get('blogs')
    // :
    // return state.blogState.blogs;
  };

//state => state.users;
