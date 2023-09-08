// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isRegisterIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsRegisterIn: (state, action) => {
      state.isRegisterIn = action.payload;
    },
    login: (state, action) => {
      state.isLoggedIn = false;
    },
    register: (state, action) => {
      state.isRegisterIn = false;
    },
  },
});

export const {setIsLoggedIn, login, register, setIsRegisterIn} =
  userSlice.actions;
export default userSlice.reducer;
