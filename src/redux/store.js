const {configureStore} = require('@reduxjs/toolkit');
import CommentListingSlice from './reducers/CommentListingSlice';
export const store = configureStore({
  reducer: {
    commentListing: CommentListingSlice,
  },
});
