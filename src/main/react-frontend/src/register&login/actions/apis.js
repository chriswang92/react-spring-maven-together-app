

import {APPNAME} from '../config';
import { post,get } from '../../utils/sagaUtils/restActions';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;
export const LOGIN_USER = `@@CHRISWANG/${APPNAME}/LOGIN_USER`;
export const GET_ALL_USERS = `@@CHRISWANG/${APPNAME}/GET_ALL_USERS`;
// let userId = 0;

export const getAllUsers = () => 
  // console.log('called apis/getAllUsers()...');
  get(`/api/user`
  , {
    success: allUsers => ({
      type: GET_ALL_USERS,
      payload: {allUsers}
    })
  });


// ({
//   type: GET_ALL_USERS,
//   payload: {
//     userInfo
//   }
// })

export const registerUser = (
  // sessionId, 
  apiData) => 
  post(`/api/user`
  // ?sessionId=${sessionId}
  , {
    success: newRecord => ({
      type: REGISTER_USER,
      payload: { newRecord }
    }),
    // id: ++userId,
    body: apiData
  });