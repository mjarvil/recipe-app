import axios from 'axios';
import * as api from './api';

const getRecipes = (queryString) => {
  return axios.get(
    `https://api.edamam.com/search?q=${recipeToSearch}&app_id=${api.APP_ID}&app_key=${api.API_KEY}&from=0&to=10`
  );
};
