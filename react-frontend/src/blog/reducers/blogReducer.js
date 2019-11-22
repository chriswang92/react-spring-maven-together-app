import {
  ADD_BLOG,
  GET_ALL_BLOGS,
  GET_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG
} from '../actions/apis';
import { BLOG_STATE } from '../../config/constants';
import Immutable from 'immutable';

export default function blogReducer(state = Immutable.Map(), action) {
  let newState = state;
  switch (action.type) {
    case ADD_BLOG:
      console.log(
        'in blogReducer->ADD_BLOG, state=',
        state,
        ', action=',
        action
      );
      const blogs = state
        .get('blogs') //Immutable.List.push(another immutable object), since the elements in the list are all immutable
        .push(Immutable.fromJS(action.payload.res));

      newState = Immutable.fromJS({
        ...state,
        blogs //: state.get('blogs').concat(action.payload.res)
      });
      console.log('newState =', newState);
      // return state.withMutations(mutableState =>
      //     mutableState.set(immuData));
      // return newState;
      return newState;

    case GET_ALL_BLOGS:
      console.log(
        'in blogReducer->GET_ALL_BLOGS, state=',
        state,
        ', action=',
        action
      );
      // Immutable.fromJS() will make all sub elements immutable, versus Immutable.Map() will only make level1 elements immutable
      newState = Immutable.fromJS({ ...state, blogs: action.payload.res });
      console.log('newState =', newState);
      // return newState;
      return newState;

    // case GET_BLOG:
    //   break;
    default:
      return newState;
  }
}
