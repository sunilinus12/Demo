import {useEffect} from 'react';
import {getUserListingModel} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentListing} from '../redux/actions/CommentAction';
import {updatingData} from '../redux/reducers/CommentListingSlice';

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

  return {loading, data, error, errorMessage, addingRatingData};
};
export default useListingModel;
