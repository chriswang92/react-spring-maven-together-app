import { put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { setSelectedBlogId } from '../actions/RecordViewActions/recordViewAction';
import { ADD_BLOG } from '../api/apis';

function* addBlogSideEffectSaga({ payload }) {
  console.log(payload);
  try {
    const {
      res: {
        data: { id }
      }
    } = payload;
    yield put(setSelectedBlogId(id));
  } catch (err) {
    message.error('Failed navigate to the new created blog');
  }
}

function* blogSagas() {
  yield takeEvery(ADD_BLOG, addBlogSideEffectSaga);
}

export default blogSagas;
