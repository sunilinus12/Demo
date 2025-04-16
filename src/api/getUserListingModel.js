import axios from 'axios';

 const getUserListingModel = async () => {
  try {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return resp.data;
  } catch (error) {
    throw error;
  }
};
export default getUserListingModel