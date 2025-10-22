import { axios, token } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError } from 'services/toastNotification';

export default createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().user;

    if (currentToken === null) {
      return rejectWithValue('Without token');
    }

    token.set(currentToken);
    try {
      const { data: user } = await axios.get('/users/current');
      const { token: newToken, ...userData } = user;
      return { userData, token: newToken };
    } catch (error) {
      axios.defaults.headers.common.Authorization = '';
      toastError(
        'Auth state is old. Please enter to your personal cabinet again'
      );
      return rejectWithValue(
        'Auth state is old. Please enter to your personal cabinet again'
      );
    }
  }
);
