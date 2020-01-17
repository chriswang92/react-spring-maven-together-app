import Immutable from 'immutable';
import { BLOG_STATE } from '../../config/constants';
import { createSelector } from 'reselect';

export const blogStateSelector = state => state.blogState;
export const allBlogsSelector = state => {
  console.log('reached blog selector, state=', state);
  return state.blogState.get('blogs');
};
export const blogCategorySelector = state => {
  console.log('reached blog selector, state=', state);
  return state.blogState.get('blogCategories');
};

export const blogSelector = title =>
  createSelector(blogStateSelector, allBlogs =>
    allBlogs.filter(blog => blog.get('title') === title)
  );

export const selectedBlogIdSelector = state => {
  console.log(state);
  return state.blogState.get('selectedBlogId');
};
