import {
  ADD_BLOG,
  GET_ALL_BLOGS,
  GET_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG
} from '../actions/apis';
import { BLOG_STATE } from '../../config/constants';
import Immutable from 'immutable';

export default function blogReducer(rootState = Immutable.Map(), action) {
  const state = rootState.get([BLOG_STATE]);
  switch (action.type) {
    case ADD_BLOG:
      console.log(
        'in userReducer->REGISTER_USER, state=',
        state,
        ', action=',
        action
      );
      const immuData = {
        ...state,
        users: state.get('blogs').concat({
          id: action.payload.newRecord.id,
          username: action.payload.newRecord.username,
          password: action.payload.newRecord.password
        })
      };
      // return state.withMutations(mutableState =>
      //     mutableState.set(immuData));
      return immuData;

    case GET_ALL_BLOGS:
      console.log(
        'in userReducer->GET_ALL_USERS, state=',
        state,
        ', action=',
        action
      );
      const immuData2 = Immutable.fromJS({
        ...state,
        blogs: action.payload.res
      });
      console.log('all blogs got =', immuData2);
      return immuData2;

    // case GET_BLOG:
    //   break;
    default:
      return rootState;
  }
}
