import {useEffect} from 'react';
import {getUserListingModel} from '../api';

const useListingModel = () => {
  const fetchData = async () => {
    try {
      let resp = await getUserListingModel();
      console.log('respresp', resp);
    } catch (error) {
      console.log('Errror', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {fetchData};
};
export default useListingModel;
