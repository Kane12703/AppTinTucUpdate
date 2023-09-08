// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dataAll: [],
  dataByCategory: [],
  dataById: [],
  dataAllAuthor: [],
  dataByIdAuthor: [],
  dataCategory: [],
  dataTrending: [],
  dataSearchByName: [],
};

const getDataNew = createSlice({
  name: 'getDataNew',
  initialState,
  reducers: {
    getAllNew: state => {},
    setAllNew: (state, action) => {
      state.dataAll = action.payload;
    },
    getByCategory: state => {},
    setByCategory: (state, action) => {
      state.dataByCategory = action.payload;
    },
    getNewById: state => {},
    setNewById: (state, action) => {
      state.dataById = action.payload;
    },
    getAllAuthor: state => {},
    setAllAuthor: (state, action) => {
      state.dataAllAuthor = action.payload;
    },
    getNewByIdAuthor: state => {},
    setNewByIdAuthor: (state, action) => {
      state.dataByIdAuthor = action.payload;
    },
    getAllCategory: state => {},
    setAllCategory: (state, action) => {
      state.dataCategory = action.payload.allCategory;
    },
    getNewTrending: state => {},
    setNewTrending: (state, action) => {
      state.dataTrending = action.payload;
    },
    getNewSearch: state => {},
    setNewSearch: (state, action) => {
      state.dataSearchByName = action.payload;
    },
  },
});

export const {
  getAllNew,
  setAllNew,
  getByCategory,
  setByCategory,
  getNewById,
  setNewById,
  getAllAuthor,
  setAllAuthor,
  getNewByIdAuthor,
  setNewByIdAuthor,
  getAllCategory,
  setAllCategory,
  getNewTrending,
  setNewTrending,
  getNewSearch,
  setNewSearch,
} = getDataNew.actions;
export default getDataNew.reducer;
