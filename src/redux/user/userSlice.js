import { createSlice } from '@reduxjs/toolkit';
import userApi from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    nativeLang: null,
    memoryStatus: null,
    gameRecord: null,
    dictionaries: [],
  },
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      /*****************signIn********************/
      .addCase(userApi.signIn.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      /****************log out */
      .addCase(userApi.logOut.fulfilled, state => {
        state.user = { ...initialState.user };
        state.token = null;
      })
      .addCase(userApi.logOut.rejected, state => {
        state.user = { ...initialState.user };
        state.token = null;
      })
      /******************************fetch current user */
      .addCase(userApi.fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload.userData };
        state.token = payload.token;
      })
      .addCase(userApi.fetchCurrentUser.rejected, state => {
        state.user = { ...initialState.user };
        state.token = null;
      })
      /******************************create dictionary */
      .addCase(userApi.createDictionary.fulfilled, (state, { payload }) => {
        state.user.dictionaries = [...payload];
      })
      /******************************add word */
      .addCase(userApi.addWord.fulfilled, (state, { payload }) => {
        state.user.dictionaries = [...payload];
      })
      /******************************change status */
      .addCase(userApi.changeStatus.fulfilled, (state, { payload }) => {
        state.user.dictionaries = [...payload];
      })
      /******************************delete word */
      .addCase(userApi.deleteWord.fulfilled, (state, { payload }) => {
        state.user.dictionaries = state.user.dictionaries.map(dict =>
          dict.lang === payload.tl
            ? {
                ...dict,
                words: dict.words.filter(w => w._id !== payload.wordId),
              }
            : dict
        );
      })
      /******************************repeat word */
      .addCase(userApi.sendToRepeat.fulfilled, (state, { payload }) => {
        state.user.dictionaries = payload;
      })
      /******************************delete dictionary */
      .addCase(userApi.deleteDictionary.fulfilled, (state, { payload }) => {
        state.user.dictionaries = state.user.dictionaries.filter(
          dict => dict.lang !== payload
        );
      });
  },
});
export const { change } = userSlice.actions;
export default userSlice.reducer;
