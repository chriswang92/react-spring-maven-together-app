import {
  ADD_BLOG,
  GET_ALL_BLOGS,
  GET_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
  GET_ALL_BLOGCATEGORIES
} from '../api/apis';
import { SET_SELECTED_BLOG_ID } from '../actions/RecordViewActions/recordViewAction';
import { BLOG_STATE } from '../../config/constants';
import Immutable from 'immutable';

export default function blogReducer(state = Immutable.Map(), action) {
  let newState = state;
  switch (action.type) {
    case ADD_BLOG:
      newState = Immutable.fromJS({
        ...state,
        blogs: state
          .get('blogs') //Immutable.List.push(another immutable object), since the elements in the list are all immutable
          .push(Immutable.fromJS(action.payload.res))
      });
      return newState;

    case GET_ALL_BLOGS:
      let allBlogs = action.payload.res;
      console.log(allBlogs);
      // put the special one on the top
      allBlogs.forEach((currVal, currIndex, array) => {
        console.log(currVal, currIndex, array);
        if (currVal.id === 50) {
          const temp = currVal;
          allBlogs[currIndex] = allBlogs[0];
          allBlogs[0] = temp;
        }
      }, this);
      return state.set('blogs', Immutable.fromJS(allBlogs));

    case GET_ALL_BLOGCATEGORIES:
      console.log(
        'in blogReducer->GET_ALL_BLOGCATEGORIES, state=',
        state,
        ', action=',
        action
      );
      return state.set('blogCategories', Immutable.fromJS(action.payload.res));

    case SET_SELECTED_BLOG_ID:
      console.log(state, action);
      return newState.set('selectedBlogId', action.payload);

    default:
      return newState;
  }
}
