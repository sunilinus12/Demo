import {useEffect} from 'react';
import {getUserListingModel} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentListing} from '../redux/actions/CommentAction';

const useListingModel = () => {
  const dispatch = useDispatch();
  const state = useSelector(e => e.commentListing);
  const {loading, data, error, errorMessage} = state;
  useEffect(() => {
    dispatch(getCommentListing());
  }, []);

  return {loading, data, error, errorMessage};
};
export default useListingModel;
