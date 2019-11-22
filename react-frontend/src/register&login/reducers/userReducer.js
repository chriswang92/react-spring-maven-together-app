import {
  REGISTER_USER,
  //   LOGIN_USER,
  GET_ALL_USERS,
  GET_USER,
  DELETE_USER
} from '../actions/apis';
import { USER_STATE } from '../../config/constants';
import Immutable from 'immutable';

export default function userReducer(state = Immutable.Map(), action) {
  let newState = state;
  switch (action.type) {
    case REGISTER_USER:
      console.log(
        'in userReducer->REGISTER_USER, state=',
        state,
        ', action=',
        action
      );
      const users = state
        .get('users') //Immutable.List.push(another immutable object), since the elements in the list are all immutable
        .push(Immutable.fromJS(action.payload.res));

      newState = Immutable.fromJS({
        ...state,
        users //: state.get('blogs').concat(action.payload.res)
      });
      console.log('newState =', newState);
      // return state.withMutations(mutableState =>
      //     mutableState.set(immuData));
      // return newState;
      return newState;

    case GET_ALL_USERS:
      console.log(
        'in userReducer->GET_ALL_USERS, state=',
        state,
        ', action=',
        action
      );
      // Immutable.fromJS() will make all sub elements immutable, versus Immutable.Map() will only make level1 elements immutable
      newState = Immutable.fromJS({ ...state, users: action.payload.res });
      console.log('newState =', newState);
      // return newState;
      return newState;

    case GET_USER:
      return action.payload.user;
    // case LOGIN_USER:

    default:
      return newState;
  }
}
