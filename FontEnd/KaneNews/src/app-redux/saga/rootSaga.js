// userSaga.js
import {fork, all} from 'redux-saga/effects';
import watchAuthSaga from './userSaga';
import watchGetDataSaga from './getDataNewSaga';
import watchModeSaga from './modeSaga';

export function* rootSaga() {
  yield all([fork(watchAuthSaga), fork(watchGetDataSaga), fork(watchModeSaga)]);
}
