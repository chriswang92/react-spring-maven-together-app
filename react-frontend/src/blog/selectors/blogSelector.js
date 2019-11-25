import Immutable from 'immutable';
import { BLOG_STATE } from '../../config/constants';
// import { createSelector } from 'reselect';

const blogStateSelector = state => state.get(BLOG_STATE);
export const blogSelector = state => {
  console.log('reached blog selector, state=', state);
  return state.blogState.get('blogs');
};
export const blogCategorySelector = state => {
  console.log('reached blog selector, state=', state);
  return state.blogState.get('blogCategories');
};
