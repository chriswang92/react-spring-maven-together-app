import Immutable from 'immutable';
import { USER_STATE } from '../../config/constants';

// const userStateSelector = state=> state.get(USER_STATE);
export const userSelector = state => {
  console.log('reached user', state);
  return state.userState.get('users');
};

//state => state.users;
