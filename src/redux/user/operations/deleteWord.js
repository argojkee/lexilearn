import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const deleteWord = createAsyncThunk(
  'user/deleteWord',
  async ({ wordId: id, tl: lang }, { rejectWithValue }) => {
    try {
      const {
        data: { tl, wordId },
      } = await axios.delete(
        `/dictionaries/delete-word?tl=${lang}&wordId=${id}`
      );
      toastSuccess('Word was deleted successful');
      return { tl, wordId };
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default deleteWord;
