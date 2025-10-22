import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const sendToRepeat = createAsyncThunk(
  'user/sendToRepeat',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/dictionaries/repeat', data);
      toastSuccess('Word has been replaced to repeating successful');

      return response.data.dictionaries;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default sendToRepeat;
