import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const createDictionary = createAsyncThunk(
  'user/createDictionary',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        '/dictionaries/create-dictionary',
        data
      );

      toastSuccess('Dictionary has been added successful');
      return response.data.dictionaries;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default createDictionary;
