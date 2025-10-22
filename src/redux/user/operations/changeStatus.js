import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError } from 'services/toastNotification';

const changeStatus = createAsyncThunk(
  'user/changeStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/dictionaries/change-status', data);
      return response.data.dictionaries;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Oops... something went wrong. Plese, try again');
    }
  }
);

export default changeStatus;
