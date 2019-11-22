import { APPNAME } from '../../utils/config';
import { post, get, put, del } from '../../utils/sagaUtils/restActions';
export const REGISTER_USER = `@@CHRISWANG/${APPNAME}/REGISTER_USER`;
// export const LOGIN_USER = `@@CHRISWANG/${APPNAME}/LOGIN_USER`;
export const GET_ALL_USERS = `@@CHRISWANG/${APPNAME}/GET_ALL_USERS`;
export const GET_USER = `@@CHRISWANG/${APPNAME}/GET_USER`;
export const UPDATE_USER = `@@CHRISWANG/${APPNAME}/UPDATE_USER`;
export const DELETE_USER = `@@CHRISWANG/${APPNAME}/DELETE_USER`;

export const getAllUsers = () =>
  get(`/api/user`, {
    success: allUsers => ({
      type: GET_ALL_USERS,
      payload: { allUsers }
    })
  });
export const getUser = id =>
  get(`/api/user/${id}`, {
    success: user => ({
      type: GET_USER,
      payload: { user }
    })
  });
export const registerUser = apiData =>
  post(
    `/api/user`,
    // ?sessionId=${sessionId}
    {
      success: newRecord => ({
        type: REGISTER_USER,
        payload: { newRecord }
      }),
      body: apiData
    }
  );
export const updateUser = (id, apiData) =>
  put(
    `/api/user/${id}`,
    // ?sessionId=${sessionId}
    {
      success: newRecord => ({
        type: UPDATE_USER,
        payload: { newRecord }
      }),
      body: apiData
    }
  );
export const deleteUser = id =>
  del(`/api/user/${id}`, {
    success: res => ({
      type: DELETE_USER,
      payload: { res }
    })
  });
