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
  // const state = rootState.get([USER_STATE]);
  switch (action.type) {
    case REGISTER_USER:
      console.log(
        'in userReducer->REGISTER_USER, state=',
        state,
        ', action=',
        action
      );
      const newUser = action.payload.newRecord;
      const immuData = Immutable.Map({
        ...state,
        users:
          // state.get('users').set(newUser.id, newUser)
          state.get('users').concat({
            id: action.payload.newRecord.id,
            username: action.payload.newRecord.username,
            password: action.payload.newRecord.password
          })
      });
      // return state.withMutations(mutableState =>
      //     mutableState.set(immuData));
      return immuData;

    case GET_ALL_USERS:
      console.log(
        'in userReducer->GET_ALL_USERS, state=',
        state,
        ', action=',
        action
      );
      const immuData2 = Immutable.Map({
        ...state,
        users: action.payload.allUsers
      });
      console.log('immuData2=', immuData2);
      return immuData2;

    case GET_USER:
      return action.payload.user;
    // case LOGIN_USER:

    default:
      return state;
  }
}
