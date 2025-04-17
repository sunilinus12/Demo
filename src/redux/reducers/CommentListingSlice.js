import {StorageKey} from '../../utils/Constants';
import {storeData} from '../../utils/StorageManager';

const {createSlice} = require('@reduxjs/toolkit');
const {getCommentListing} = require('../actions/CommentAction');

// initial state
const initialState = {
  loading: false,
  data: [],
  error: false,
  errorMessage: null,
};
const CommentListingSlice = createSlice({
  name: 'commentListing',
  initialState,
  reducers: {
    //reducers for updating the state
    updatingData: (state, action) => {
      const {item: subitem} = action.payload;
      const updatedData = state.data.map(item =>
        item.id === subitem.id ? {...item, ...subitem} : item,
      );
      state.data = updatedData;
      storeData(StorageKey, updatedData);
    },
  },
  //extra reducers for handling the api calling.
  extraReducers: builder => {
    builder
      .addCase(getCommentListing.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.errorMessage = null;
      })
      .addCase(getCommentListing.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
        state.errorMessage = null;
      })
      .addCase(getCommentListing.rejected, (state, action) => {
        console.log('rejected state', action.payload);
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export const {updatingData} = CommentListingSlice.actions;
export default CommentListingSlice.reducer;
