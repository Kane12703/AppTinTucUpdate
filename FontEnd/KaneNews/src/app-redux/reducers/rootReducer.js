import {combineReducers} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import modeReducer from './modeReducer';
import loadingReducer from './loadingReducer';
import getDataNew from './getDataNew';

export const rootReducer = combineReducers({
  user: userSlice,
  modeReducer: modeReducer,
  loadingReducer: loadingReducer,
  getDataNew: getDataNew,
});
