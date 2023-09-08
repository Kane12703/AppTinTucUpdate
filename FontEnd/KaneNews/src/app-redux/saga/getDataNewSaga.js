import {put, call, takeLatest} from 'redux-saga/effects';
import AxiosInstance from '../../api/AxiosInstanse';
import {startLoading, stopLoading} from '../reducers/loadingReducer';
import {
  setAllAuthor,
  setAllNew,
  setByCategory,
  setNewById,
  setNewByIdAuthor,
  setAllCategory,
  getAllNew,
  getByCategory,
  getNewById,
  getNewByIdAuthor,
  getAllCategory,
  getAllAuthor,
  getNewTrending,
  setNewTrending,
  getNewSearch,
  setNewSearch,
} from '../reducers/getDataNew';

function* getDataByCategorySaga(action) {
  yield put(startLoading());
  try {
    // console.log('run saga');
    const newBycategory = yield call(
      AxiosInstance().post,
      'products/get-byIdCategory',
      {id: action.payload.id},
    );
    // console.log('SAGA:', dataBycategory);
    yield put(setByCategory(newBycategory));
  } catch (error) {
    console.log('GET data by category error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getDataAllSaga(action) {
  yield put(startLoading());
  try {
    // console.log('run saga');
    const newAll = yield call(AxiosInstance().get, 'products/get-all');
    // console.log('SAGA:', dataBycategory);
    yield put(setAllNew(newAll));
  } catch (error) {
    console.log('GET data all error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getDataByIdSaga(action) {
  yield put(startLoading());
  try {
    // console.log('=>>>>>>', action.payload.id);
    const dataNewId = yield call(
      AxiosInstance().get,
      `products/${action.payload.id}`,
    );
    // console.log('SAGA:', dataBycategory);
    yield put(setNewById(dataNewId));
  } catch (error) {
    console.log('GET data by ID NEW error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getAllAuthorSaga(action) {
  yield put(startLoading());
  try {
    // console.log('run saga');
    const dataAuthor = yield call(
      AxiosInstance().get,
      'products/get-all-author',
    );
    // console.log('SAGA:', dataBycategory);
    yield put(setAllAuthor(dataAuthor));
  } catch (error) {
    console.log('GET data ALL AUTHOR error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getDataByIdAthourSaga(action) {
  yield put(startLoading());
  try {
    const dataNewIdAuthor = yield call(
      AxiosInstance().get,
      `products/get_Id_Author/${action.payload.id}`,
    );
    yield put(setNewByIdAuthor(dataNewIdAuthor));
  } catch (error) {
    console.log('GET new data by ID author error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getAllCategorySaga(action) {
  yield put(startLoading());
  try {
    const allCategory = yield call(
      AxiosInstance().get,
      'products/get-all-category',
    );

    yield put(setAllCategory(allCategory));
  } catch (error) {
    console.log('GET All category error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getDataByIdTrendingSaga(action) {
  yield put(startLoading());
  try {
    const dataIdTreding = yield call(
      AxiosInstance().get,
      `products/${action.payload.id}`,
    );
    console.log(dataIdTreding);
    yield put(setNewTrending(dataIdTreding));
  } catch (error) {
    console.log('GET data by ID  TRENDING  error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

function* getDataSearchByNameSaga(action) {
  yield put(startLoading());
  try {
    const dataSearchByName = yield call(
      AxiosInstance().get,
      '/products/search',
      {
        params: {
          title: action.payload.title,
        },
      },
    );
    console.log('saga', dataSearchByName);
    yield put(setNewSearch(dataSearchByName));
  } catch (error) {
    console.log('GET new data search by name  error: ', error);
  } finally {
    yield put(stopLoading());
  }
}

export default function* watchGetDataSaga() {
  yield takeLatest(getAllCategory, getAllCategorySaga);
  yield takeLatest(getAllNew, getDataAllSaga);
  yield takeLatest(getByCategory, getDataByCategorySaga);
  yield takeLatest(getNewById, getDataByIdSaga);
  yield takeLatest(getAllAuthor, getAllAuthorSaga);
  yield takeLatest(getNewByIdAuthor, getDataByIdAthourSaga);
  yield takeLatest(getNewTrending, getDataByIdTrendingSaga);
  yield takeLatest(getNewSearch, getDataSearchByNameSaga);
}
