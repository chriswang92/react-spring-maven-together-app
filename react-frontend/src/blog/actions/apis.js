import { APPNAME } from '../../utils/config';
import { post, get, put, del } from '../../utils/sagaUtils/restActions';
export const ADD_BLOG = `@@CHRISWANG/${APPNAME}/ADD_BLOG`;
export const UPDATE_BLOG = `@@CHRISWANG/${APPNAME}/UPDATE_BLOG`;
export const GET_ALL_BLOGS = `@@CHRISWANG/${APPNAME}/GET_ALL_BLOGS`;
export const GET_BLOG = `@@CHRISWANG/${APPNAME}/GET_BLOG`;
export const DELETE_BLOG = `@@CHRISWANG/${APPNAME}/DELETE_BLOG`;

export const getAllBlogs = () =>
  get(`/api/blog`, {
    success: res => ({
      type: GET_ALL_BLOGS,
      payload: { res }
    })
  });
export const getBlog = userId =>
  get(`/api/blog/${userId}`, {
    success: res => ({
      type: GET_BLOG,
      payload: { res }
    })
  });
export const addBlog = apiData =>
  post(
    `/api/blog`,
    // ?sessionId=${sessionId}
    {
      success: newRecord => ({
        type: ADD_BLOG,
        payload: { newRecord }
      }),
      body: apiData
    }
  );
export const updateBlog = (id, apiData) =>
  put(
    `/api/blog/${id}`,
    // ?sessionId=${sessionId}
    {
      success: newRecord => ({
        type: UPDATE_BLOG,
        payload: { newRecord }
      }),
      body: apiData
    }
  );
export const deleteBlog = id =>
  del(`/api/blog/${id}`, {
    success: res => ({
      type: DELETE_BLOG,
      payload: { res }
    })
  });
