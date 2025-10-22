import { axios, token } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess } from 'services/toastNotification';

export default createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      toastSuccess('Log out successful. Come back sooner');
    } catch (error) {
      token.unset();
      toastSuccess('Log out successful. Come back sooner');
      return rejectWithValue(error.message);
    }
  }
);
