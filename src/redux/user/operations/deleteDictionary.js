import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const deleteDictionary = createAsyncThunk(
  'user/deleteDictionary',
  async (data, { rejectWithValue }) => {
    try {
      await axios.delete(`/dictionaries/delete-dictionary?tl=${data}`);
      toastSuccess('Dictionary was deleted successful');
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default deleteDictionary;
