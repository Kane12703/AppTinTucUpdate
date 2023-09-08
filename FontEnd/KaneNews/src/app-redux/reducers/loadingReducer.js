// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    stopLoading: state => {
      state.isLoading = false;
    },
  },
});
export const {startLoading, stopLoading} = loadingReducer.actions;

export default loadingReducer.reducer;
