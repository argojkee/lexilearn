import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const addWord = createAsyncThunk(
  'user/addWord',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/dictionaries/add-word', data);

      toastSuccess('Word has been added in your dictionary');
      return response.data.dictionaries;
      //   return response.data.dictionaries;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default addWord;
