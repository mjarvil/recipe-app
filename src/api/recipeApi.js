import axios from 'axios';
import * as api from './api';

export const getRecipes = (queryString, max_filter) => {
  return axios.get(
    `https://api.edamam.com/search?q=${queryString}&app_id=${api.APP_ID}&app_key=${api.API_KEY}&from=0&to=${max_filter}`
  );
};
