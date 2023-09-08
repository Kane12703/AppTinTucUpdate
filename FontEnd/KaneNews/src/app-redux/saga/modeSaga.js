import {put, call, takeLatest} from 'redux-saga/effects';
import {changeAppModeSuccess} from '../reducers/modeReducer';
import {changeAppMode} from '../reducers/modeReducer';

function* updateMode(action) {
  // console.log('action : ', action);
  yield put(changeAppModeSuccess(action.payload));
}

export default function* watchModeSaga() {
  yield takeLatest(changeAppMode, updateMode);
}
