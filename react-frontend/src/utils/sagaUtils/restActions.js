import { APPNAME } from '../../config/constants';

export const GET = `@@BVS/${APPNAME}/GET`;
export const POST = `@@BVS/${APPNAME}/POST`;
export const DELETE = `@@BVS/${APPNAME}/DELETE`;
export const PUT = `@@BVS/${APPNAME}/PUT`;

export const get = (url, { success, fail }) => ({
  type: GET,
  payload: { url, success, fail }
});

export const post = (url, { success, fail, body = {} }) => ({
  type: POST,
  payload: { url, body, success, fail }
});

export const put = (url, { success, fail, body = {} }) => ({
  type: PUT,
  payload: { url, body, success, fail }
});

export const del = (url, { success, fail, body = {} }) => ({
  type: DELETE,
  payload: { url, body, success, fail }
});
