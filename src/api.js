import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31763935-81785faf577ab21332a77c6ed';

const fetchImages = async (searchWord, pageNum) => {
  try {
    const response = await axios.get(
      `?q=${searchWord}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchImages;

