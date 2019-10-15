
import Immutable from 'immutable';
import { USER_STATE } from '../../config/constants';

// const userStateSelector = state=> state.get(USER_STATE);
export const userSelector = state=>{
  console.log('reached user selector,',state.userState);
  return state.userState.users;
}

//state => state.users;