const {createSlice} = require('@reduxjs/toolkit');
const {getCommentListing} = require('../actions/CommentAction');

const initialState = {
  loading: false,
  data: [],
  error: false,
  errorMessage: null,
};
const CommentListingSlice = createSlice({
  name: 'commentListing',
  initialState,
  reducers: {},
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

const {} = CommentListingSlice.actions;
export default CommentListingSlice.reducer;
