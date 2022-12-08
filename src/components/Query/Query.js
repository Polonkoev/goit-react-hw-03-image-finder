import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '30755005-c126f789c706217abec8a0f9e';

export const fetchImages = (page, q) => {
  return axios({
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q,
      page,
      per_page: 12,
    },
  });
};
