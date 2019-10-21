import {call,put,all,takeEvery} from 'redux-saga/effects';
import {GET,PUT,POST} from './restActions';

async function fetchApi(url, body) {
  try {
    const response = await fetch(url, body);
    switch (response.status) {
      case 200:
      case 201: {
        const jsonResponse = await response.json();
        return { response: jsonResponse, resHeader: response.headers };
      }
      case 204:
        return {response: {},resHeader: response.headers};  
      case 400:
        throw Error('Bad Request');
      case 401:
      case 403:
        throw Error('Unauthorized || Forbidden');
      case 404:
        throw Error('Not Found');
      case 500:
        throw Error('Internal Server Error'); // response.json()
      default:
        throw Error(`Error Code ${response.status}`);
    }
  } catch (err) {
    return { response: undefined, err };
  }
}
function* handlePostRequest(url, body) {
  return yield call(fetchApi, url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Encoding': 'gzip'
    },
    type: 'application/json',
    body: JSON.stringify(body)
  });
}

export function* postSaga({
  payload: {url, body, success, fail}
}) {
  console.log('reached postSaga...');
  const {response, resHeader, error} = yield* handlePostRequest(url, body);
  if (response) {
    console.log('--------------putsaga success, response:', response);
    yield put(success(response, resHeader));
  }
}

function* handleGetRequest(url) {
  return yield call(fetchApi, url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Encoding': 'gzip'
    },
    type: 'application/json'
  });
}
export function* getSaga({ 
  payload: {url, success} 
}) {
  console.log('reached getSaga...');
  const {response,resHeader,err} = yield* handleGetRequest(url);
  if (response) {
    console.log('--------------getsaga success, response:', response);
    yield put(success(response, resHeader));
  }
}


export default function* restSaga() {
  yield all([
    takeEvery(GET, getSaga),
    // takeEvery(PUT, putSaga),
    takeEvery(POST, postSaga)
  ]);
}