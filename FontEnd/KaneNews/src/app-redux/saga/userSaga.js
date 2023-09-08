// userSaga.js
import {takeLatest, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setIsLoggedIn,
  login,
  register,
  setIsRegisterIn,
} from '../reducers/userSlice';

import AxiosInstance from '../../api/AxiosInstanse';
import {startLoading, stopLoading} from '../reducers/loadingReducer';

function* loginSaga(action) {
  yield put(startLoading());
  try {
    const {email, password} = action.payload;
    const response = yield call(AxiosInstance().post, 'users/login', {
      email: email,
      password: password,
    });

    const token = response.data.token;
    console.log(token);
    yield call(AsyncStorage.setItem, 'token', token);
    yield put(setIsLoggedIn(true));
  } catch (error) {
    console.log('Login error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* registerSaga(action) {
  try {
    const {email, password, confirm_password, name} = action.payload;
    yield call(AxiosInstance().post, 'users/register', {
      email: email,
      password: password,
      confirm_password: confirm_password,
      name: name,
    });
    yield put(setIsRegisterIn(true));
  } catch (error) {
    console.log('Register error: ', error);
  }
}

export default function* watchAuthSaga() {
  yield takeLatest(login, loginSaga);
  yield takeLatest(register, registerSaga);
}
