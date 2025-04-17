import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUserListingModel} from '../../api';
import {StorageKey} from '../../utils/Constants';
import {getData} from '../../utils/StorageManager';

export const getCommentListing = createAsyncThunk(
  'comment/listing',
  async (_, thunkApi) => {
    try {
      // 1. Fetch data from API
      const apiData = await getUserListingModel();

      // 2. Get locally stored data
      const localData = await getData(StorageKey);

      // 3. Merge both
      let mergedData = apiData;
      if (Array.isArray(localData)) {
        mergedData = apiData.map(apiItem => {
          const localItem = localData.find(local => local.id === apiItem.id);
          return localItem ? {...apiItem, ...localItem} : apiItem;
        });
      }

      return mergedData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Something went wrong');
    }
  },
);
