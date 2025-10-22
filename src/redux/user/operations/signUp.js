import { axios } from 'services/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

const signUp = createAsyncThunk(
  'user/signUp',

  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', user);
      toastSuccess('Registration was successfull');
      return data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return rejectWithValue(error.message);
    }
  }
);

export default signUp;
