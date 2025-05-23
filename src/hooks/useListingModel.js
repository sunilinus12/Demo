import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentListing} from '../redux/actions/CommentAction';
import {
  deletingComment,
  updatingData,
} from '../redux/reducers/CommentListingSlice';

// hook for using login with view
const useListingModel = () => {
  const dispatch = useDispatch();
  const state = useSelector(e => e.commentListing);
  const {loading, data, error, errorMessage} = state;
  useEffect(() => {
    dispatch(getCommentListing());
  }, []);

  const addingRatingData = item => {
    dispatch(updatingData({item: item}));
  };

  const handleDeletingCommentData = item => {
    dispatch(deletingComment({item: item}));
  };

  return {
    loading,
    data,
    error,
    errorMessage,
    addingRatingData,
    handleDeletingCommentData,
  };
};
export default useListingModel;
