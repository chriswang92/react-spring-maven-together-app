import { put, takeEvery, fork, all } from 'redux-saga/effects';
import { REGISTER_USER } from '../../register&login/actions/apis';
import restSaga from '../sagaUtils/restSaga';

// function* getDataSaga({ payload: {restEndpointName }}) {
//   const sessionId = 1;
//   yield put(registerUser2(
//     // sessionId,
//     restEndpointName));
// }

export default function* rootSaga() {
  yield all([fork(restSaga)]);
}
