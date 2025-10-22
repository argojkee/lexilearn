import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});
export const { changeLang } = langSlice.actions;
export const getLang = (state) => state.lang.lang;
export default langSlice.reducer;
