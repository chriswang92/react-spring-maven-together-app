import { fork, all } from 'redux-saga/effects';
import restSaga from '../../utils/sagaUtils/restSaga';
import blogSagas from './blogSagas';

export default function* rootSaga() {
  yield all([fork(restSaga), fork(blogSagas)]);
}
