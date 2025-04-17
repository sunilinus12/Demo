import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUserListingModel} from '../../api';

export const getCommentListing = createAsyncThunk(
  'comment/listing',
  async (data, thunkApi) => {
    try {
      let resp = await getUserListingModel();
      return resp;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Something went wrong');
    }
  },
);
