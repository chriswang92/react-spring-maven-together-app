import { APPNAME } from '../config';
import { post, get } from '../../utils/sagaUtils/restActions';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;
export const LOGIN_USER = `@@CHRISWANG/${APPNAME}/LOGIN_USER`;
export const GET_ALL_USERS = `@@CHRISWANG/${APPNAME}/GET_ALL_USERS`;

export const getAllUsers = () =>
  get(`/api/users`, {
    success: allUsers => ({
      type: GET_ALL_USERS,
      payload: { allUsers }
    })
  });

export const registerUser = (
  apiData
) =>
  post(
    `/api/user`,
    // ?sessionId=${sessionId}
    {
      success: newRecord => ({
        type: REGISTER_USER,
        payload: { newRecord }
      }),
      // id: ++userId,
      body: apiData
    }
  );
