import { axios, token } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const signIn = createAsyncThunk(
  'user/signIn',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);

      toastSuccess('Log in successful. Welcome back ');
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Not valid email or password. Please, try again');
    }
  }
);

export default signIn;
