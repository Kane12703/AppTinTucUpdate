// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  darkMode: false,
};

const modeReducer = createSlice({
  name: 'modeReducer',
  initialState,
  reducers: {
    changeAppMode: state => {
      state.isLoading = true;
    },
    changeAppModeSuccess: (state, action) => {
      state.isLoading = false;
      state.darkMode = action.payload.darkMode;
    },
  },
});

export const {changeAppMode, changeAppModeSuccess} = modeReducer.actions;
export default modeReducer.reducer;
