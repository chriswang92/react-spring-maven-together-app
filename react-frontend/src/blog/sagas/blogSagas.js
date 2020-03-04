import { put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import { setSelectedBlogId } from '../actions/RecordViewActions/recordViewAction';
import { ADD_BLOG } from '../api/apis';

function* addBlogSideEffectSaga({ payload }) {
  message.success('Created new blog');
  try {
    const {
      res: { id }
    } = payload;
    yield put(setSelectedBlogId(id));
    message.success('Navigated to the new blog id: ' + id);
  } catch (err) {
    message.error('Can not navigate to the new created blog');
  }
}

function* blogSagas() {
  yield takeEvery(ADD_BLOG, addBlogSideEffectSaga);
}

export default blogSagas;
